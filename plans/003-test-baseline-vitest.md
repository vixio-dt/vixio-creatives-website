# Plan 003: Establish a test baseline with Vitest for slate logic and the contact route

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report. When done, update the status row for this plan in `plans/README.md`
> unless a reviewer dispatched you and told you they maintain the index.
>
> **Drift check (run first)**: `git diff --stat 3ea5bbf..HEAD -- lib/slate.ts app/api/contact/route.ts package.json`
> `lib/slate.ts` must be unchanged. `package.json` changes from plan 001 are
> expected. If `app/api/contact/route.ts` changed (plan 002 landed), test the
> hardened behavior described in plan 002's test plan instead of the current
> behavior listed here.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW (additive; no source files change except docs)
- **Depends on**: plans/001-update-next-and-prune-unused-deps.md (lockfile)
- **Category**: tests
- **Planned at**: commit `3ea5bbf`, 2026-06-10

## Why this matters

The repo has zero tests. The two riskiest surfaces are (a) `lib/slate.ts`,
whose pure functions resolve every status label, status line, and section
heading on the homepage — AGENTS.md calls this resolution seam load-bearing —
and (b) `app/api/contact/route.ts`, a frozen contract with no regression wall.
`@playwright/test` sits unused in devDependencies. Characterization tests make
every future slate/status change and any future route change verifiable, and
give CI (plan 004) something to run.

## Current state

- No `*.test.*` / `*.spec.*` files exist anywhere; no vitest/jest config.
- `package.json` devDependencies include `@playwright/test@^1.58.2` with no
  playwright config or tests — remove it (dead weight) as part of this plan.
- `lib/slate.ts` — pure functions over `copy` from `lib/copy.ts`:
  - `statusLabel(entry)` (lines 66–78): released+object → `copy.statusLabels['released-object']` ("Shop");
    released+film/labs → `'released-film'` ("Watch"); coming+year →
    `"Coming 2026"` composition; otherwise direct lookup.
  - `statusLine(entry)` (lines 85–91): coming → label as-is; others →
    `"<label>, <year>"` when `year` exists.
  - `sectionHeading(status, entries)` (lines 101–121): coming → year-composed
    only when ALL entries share one defined year; released → kind-specific
    label only when all entries share one kind, else film label.
  - `slateByStatus()` (lines 127–138): groups non-featured entries by status
    in STATUS_ORDER (`in-production, coming, released, in-development`),
    omitting empty statuses.
  - `featuredWork()` (lines 54–56): first entry with `featured === true`.
- `app/api/contact/route.ts` — current behavior to characterize (if plan 002
  has NOT landed): invalid JSON → 400 `{error:'Invalid JSON'}`; `type` other
  than buyer/creator → 400; buyer without `contact` → 400; buyer with contact
  → inserts `{contact}` into `buyer_submissions`, 200 `{success:true}`;
  creator missing name/idea/contact → 400; creator valid → inserts into
  `creator_submissions`, 200. Supabase insert error → 500 `{error:'Failed to submit'}`.
  The route imports `getSupabase` from `@/lib/supabase` and `Resend` from
  `'resend'` — both must be mocked (`vi.mock`); never hit real services.
- `tsconfig.json` uses `"paths": {"@/*": ["./*"]}` (verify; if the alias
  differs, mirror it in the vitest config).
- AGENTS.md line ~50 currently says: "No test framework exists; the gate plus
  the two scans above are the check."

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Install | `npm install` | exit 0 |
| Typecheck | `npm run typecheck` | exit 0 |
| Lint | `npm run lint` | exit 0 |
| Tests (after this plan) | `npm test` | all tests pass |
| Build (offline-safe) | `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build` | exit 0 |

## Scope

**In scope**:
- `package.json` (add `vitest` devDependency + `"test": "vitest run"` script; remove `@playwright/test`)
- `package-lock.json`
- `vitest.config.ts` (create; node environment, `@` alias to repo root, include `tests/**/*.test.ts`)
- `tests/slate.test.ts` (create)
- `tests/contact-route.test.ts` (create)
- `AGENTS.md` (update the one sentence about no test framework to name `npm test` as part of the gate)

**Out of scope** (do NOT touch):
- `lib/slate.ts`, `lib/copy.ts`, `app/api/contact/route.ts`, `lib/supabase.ts`
  — characterization means testing what IS, not changing it.
- No jsdom/react component tests, no Playwright setup, no CI files (plan 004).

## Git workflow

- Work on the current checked-out branch.
- One commit, e.g.: `feat: vitest baseline for slate resolution and contact route`

## Steps

### Step 1: Install and wire vitest

`npm uninstall @playwright/test && npm install -D vitest`. Add the `test`
script. Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname) } },
  test: { environment: 'node', include: ['tests/**/*.test.ts'] },
})
```

**Verify**: `npm test` → "no test files found" style failure or 0 tests (tool runs)

### Step 2: Characterize lib/slate.ts in tests/slate.test.ts

Build local `SlateEntry` fixtures (import the type from `@/lib/slate`). Cover,
asserting against `copy.statusLabels` values imported from `@/lib/copy` rather
than hardcoded strings where practical:

1. `statusLabel`: released+object; released+film; released+labs (film label);
   coming with year; coming without year; in-production; in-development.
2. `statusLine`: coming+year has no comma; released+year is `"<label>, <year>"`;
   no year → bare label.
3. `sectionHeading`: coming, all same year → composed; coming, mixed/missing
   years → bare; released, all object → object label; released, mixed kinds →
   film label; in-production → direct lookup.
4. `featuredWork` returns the entry flagged featured in the real `slate` data,
   and `slateByStatus` never includes a featured entry and follows STATUS_ORDER.

**Verify**: `npm test` → all pass

### Step 3: Characterize the route in tests/contact-route.test.ts

`vi.mock('@/lib/supabase', …)` returning a `getSupabase` whose
`.from().insert()` resolves `{ error: null }` (capture calls for assertions),
and `vi.mock('resend', …)` with a constructor exposing
`emails.send: vi.fn().mockResolvedValue({})`. Import `{ POST }` from
`@/app/api/contact/route` and call it with
`new Request('http://test/api/contact', { method:'POST', body: JSON.stringify(payload) })`.
Cover every behavior listed in "Current state" (or plan 002's matrix if 002
landed), asserting status codes, response JSON, and which Supabase table
received which row. Add one case asserting that when the mocked insert returns
an error object, the response is 500 and no email send is attempted.

**Verify**: `npm test` → all pass, including the new file

### Step 4: Update AGENTS.md and run the full gate

Replace the "No test framework exists" sentence with one naming
`npm test` (Vitest, `tests/`) as part of the pre-completion gate. Run
typecheck, lint, tests, offline build.

**Verify**: all four commands exit 0

## Test plan

This plan IS the test plan; the cases are enumerated in steps 2–3. Pattern to
follow: none exists yet — these two files become the repo's exemplars, so keep
them plain (describe/it, no custom helpers beyond fixtures).

## Done criteria

- [ ] `npm test` exits 0 with ≥ 20 passing assertions across 2 files
- [ ] `npm run typecheck`, `npm run lint`, offline build all exit 0
- [ ] `grep -c playwright package.json` → 0
- [ ] `git status` touches only the in-scope files
- [ ] Tests import production code via `@/` alias (no copy-pasted logic)

## STOP conditions

Stop and report back (do not improvise) if:

- Importing the route in a node test environment fails on a Next.js server
  dependency that mocking `@/lib/supabase` and `resend` does not resolve —
  report the exact error; do not refactor the route to make it importable
  (that is plan 002 / owner territory).
- Any test requires modifying an out-of-scope file to pass.
- `lib/slate.ts` drifted from the excerpts.

## Maintenance notes

- When a slate entry gains a real `released` status, `sectionHeading`'s
  mixed-kind branch becomes reachable in production; the tests already pin it.
- If plan 002 lands later, extend `tests/contact-route.test.ts` with the
  matrix in that plan; the mocks need no changes.
- Reviewer: check the route tests assert on the *captured insert payloads*,
  not just status codes — that is what pins the frozen contract.
