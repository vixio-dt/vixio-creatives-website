# Plan 002: Harden /api/contact input validation without changing the frozen contract

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report. When done, update the status row for this plan in `plans/README.md`
> unless a reviewer dispatched you and told you they maintain the index.
>
> **Drift check (run first)**: `git diff --stat 3ea5bbf..HEAD -- app/api/contact/route.ts`
> If the file changed since this plan was written, compare the "Current state"
> excerpts against the live code before proceeding; on a mismatch, treat it as
> a STOP condition.

## Status

- **Priority**: P1 — but **BLOCKED: requires owner sign-off**. AGENTS.md
  ("Frozen contracts") says: "Never touch `app/api/` or `lib/supabase.ts`."
  This plan strengthens validation while keeping the wire contract identical,
  but the repo's own constitution reserves these files. Do not execute until
  the owner approves and relaxes that line in AGENTS.md for this change.
- **Effort**: M
- **Risk**: MED (a public form endpoint; over-strict validation rejects real
  submissions, which is worse than the current laxity)
- **Depends on**: owner approval; execute together with plan 003 (tests
  characterize the hardened behavior)
- **Category**: security
- **Planned at**: commit `3ea5bbf`, 2026-06-10

## Why this matters

`POST /api/contact` is the site's only unauthenticated write endpoint. Today it
casts the parsed JSON with `as string` and checks only truthiness: a payload
field can be a number, an object, or a 10 MB string and still reach the
Supabase insert and the Resend email. There are no length caps, no server-side
email-shape check (the Newsletter client relies on native browser validation,
which `curl` skips), and no trimming. The fix is strictly *stricter* input
handling; the accepted field names and shapes (`{type:'creator', name,
portfolio, idea, contact}` | `{type:'buyer', contact}`) must not change.

## Current state

- `app/api/contact/route.ts` — the whole handler (83 lines). Key excerpts:
  - Lines 17–20: `const type = body.type as string` then a check that it is
    `'buyer'` or `'creator'`.
  - Lines 22–26 (buyer): `const contact = body.contact as string; if (!contact) … 400`.
    A non-string truthy value (e.g. `{"contact": 123}` or an object) passes.
  - Lines 46–56 (creator): destructures `{ name, portfolio, idea, contact }`
    via an `as` cast; only `!name || !idea || !contact` is checked.
  - Lines 37–43 and 71–78: Resend email built with raw `${contact}` / `${name}`
    in the subject. Resend's JSON API neutralizes real header injection, but
    control characters in subjects are still hygiene to strip.
  - Line 5–7: `getResend()` returns `null` when `RESEND_API_KEY` is unset and
    the notification silently does not send (submission still lands in
    Supabase). There is no log line for the missing-key case.
- Buyer block does not `return` on success; control falls through to the
  `type === 'creator'` check (false for buyers) and then the shared
  `return NextResponse.json({ success: true })` at line 81. Behavior is
  correct today but fragile.
- Repo conventions: user-visible copy must come from `lib/copy.ts`; API error
  strings are NOT user-visible copy (the client renders its own `copy.*.error`
  strings on any non-OK response), so plain strings in the route are the
  existing convention — keep it. No em/en dashes anywhere, including comments.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Typecheck | `npm run typecheck` | exit 0 |
| Lint | `npm run lint` | exit 0 |
| Build (offline-safe) | `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build` | exit 0 |
| Dash scan | `grep -rn $'–\|—' app components lib` | exit 1 (no matches) |

## Scope

**In scope**:
- `app/api/contact/route.ts` (only after owner sign-off; see Status)

**Out of scope** (do NOT touch):
- `lib/supabase.ts` — frozen.
- `components/contact/ContactForms.tsx`, `components/home/Newsletter.tsx` —
  client behavior is unchanged; they already handle non-OK responses.
- The wire contract: field names, accepted `type` values, success/error
  status codes for cases that succeed today with sane input.
- Do not add a schema library (zod etc.); inline checks keep the route
  dependency-free.

## Git workflow

- Work on the current checked-out branch.
- One commit, e.g.: `fix: validate contact payload types and bounds`

## Steps

### Step 1: Add a small validation helper at the top of the route file

Add (module scope, above `POST`):

```ts
const LIMITS = { name: 200, contact: 320, portfolio: 2000, idea: 10000 } as const

function cleanString(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (trimmed.length === 0 || trimmed.length > max) return null
  return trimmed
}

const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

**Verify**: `npm run typecheck` → exit 0

### Step 2: Validate the buyer branch and make branches mutually exclusive

Replace the buyer block's `const contact = body.contact as string; if (!contact) …`
with `cleanString(body.contact, LIMITS.contact)` plus an `EMAIL_SHAPE` test;
return the existing 400 `{ error: 'Email is required' }` for a missing/invalid
value. Keep inserting the cleaned value. End the buyer branch with its own
`return NextResponse.json({ success: true })` so control no longer falls
through.

**Verify**: `npm run typecheck` → exit 0

### Step 3: Validate the creator branch

Replace the destructure-and-truthiness check with `cleanString` per field
(`name`, `idea`, `contact` required; `portfolio` optional, but when present it
must pass `cleanString(…, LIMITS.portfolio)` and start with `http://` or
`https://`, else 400). Require `EMAIL_SHAPE.test(contact)`. Insert cleaned
values; keep `portfolio: portfolio || null`.

**Verify**: `npm run typecheck` → exit 0

### Step 4: Subject hygiene and missing-key log

Strip control characters from values interpolated into email subjects
(`value.replace(/[\r\n\x00-\x1f]/g, ' ')` at the interpolation site or on the
cleaned values) and add `console.warn('RESEND_API_KEY not set; skipping notification email')`
in the path where `getResend()` returns `null`.

**Verify**: full gate — typecheck, lint, offline build, dash scan → all pass

## Test plan

Plan 003 adds the test framework. When both land, the route tests must cover:
buyer happy path; buyer with non-string `contact` → 400; buyer with 100 kB
string → 400; buyer with `"not-an-email"` → 400; creator happy path with and
without portfolio; creator with `portfolio: "javascript:alert(1)"` → 400;
creator with newline-laden `name` → 200 and a subject containing no `\n`.

## Done criteria

- [ ] `npm run typecheck`, `npm run lint`, offline build all exit 0
- [ ] `grep -n "as string" app/api/contact/route.ts` → no matches
- [ ] Buyer branch returns its own success response (no fall-through):
      `grep -c "success: true" app/api/contact/route.ts` → 3
- [ ] `git status` shows changes only to `app/api/contact/route.ts`
- [ ] Wire contract unchanged: same field names, same accepted `type` values

## STOP conditions

Stop and report back (do not improvise) if:

- AGENTS.md still contains "Never touch `app/api/`" and the operator has not
  recorded owner approval in this plan's Status block — the plan is BLOCKED.
- The route file differs from the excerpts above (drift).
- You find yourself wanting to change a field name, status code for a
  currently-valid request, or anything in `lib/supabase.ts`.

## Maintenance notes

- If spam volume appears, the next escalation is a honeypot field added by the
  client plus a check here; that is deliberately deferred (needs owner's call
  on UX).
- Reviewer should diff the accepted-payload matrix before/after: every payload
  the old code accepted with sane values must still be accepted.
