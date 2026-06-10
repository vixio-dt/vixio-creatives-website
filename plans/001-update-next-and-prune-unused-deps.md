# Plan 001: Update Next.js past the advisory range and remove two unused dependencies

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report. When done, update the status row for this plan in `plans/README.md`
> unless a reviewer dispatched you and told you they maintain the index.
>
> **Drift check (run first)**: `git diff --stat 3ea5bbf..HEAD -- package.json package-lock.json`
> If either file changed since this plan was written, compare the "Current
> state" excerpts against the live code before proceeding; on a mismatch,
> treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: MED (framework minor-version bump; the full build gate is the safety net)
- **Depends on**: none
- **Category**: security / migration
- **Planned at**: commit `3ea5bbf`, 2026-06-10
- **Outcome (2026-06-10)**: DONE, reconciled. The executor correctly hit STOP
  condition #1: no stable `next@16.3.x` exists (latest stable is 16.2.9; the
  advisory range closes only in 16.3 canaries). Reviewer reconciliation:
  landed `next@16.2.9` + `npm audit fix`, which cleared the high-severity
  transitive advisories (fast-uri, brace-expansion). Residual: 2 moderate
  advisories (next itself and its bundled postcss). Follow-up: bump to 16.3
  when stable releases; until then `npm audit --omit=dev` reporting those two
  moderates is expected.

## Why this matters

`npm audit --omit=dev` reports the installed `next@16.2.1` inside the vulnerable
range `9.3.4-canary.0 - 16.3.0-canary.5` covering 14 advisories (DoS via Server
Components, RSC cache poisoning, middleware bypasses, CSP-nonce XSS, and more —
e.g. GHSA-q4gf-8mx6-v5v3, GHSA-wfc6-r584-vfw7). Transitive advisories on
`fast-uri` (high), `postcss` (moderate), and `brace-expansion` (moderate) are
fixed by the same refresh. Separately, two production dependencies are imported
nowhere in the source tree: `serve` and `@phosphor-icons/react`. Removing them
shrinks install size and the audit surface.

## Current state

- `package.json:16` — `"next": "^16.1.6"`; lockfile resolves to `16.2.1`.
- `package.json:13` — `"@phosphor-icons/react": "^2.1.10"` — zero imports
  (`grep -rn "phosphor" app components lib` returns nothing).
- `package.json:20` — `"serve": "^14.2.6"` — zero imports and not referenced
  by any npm script or by README.md.
- The app is a small Next.js 16 App Router site. Pages: `/`, `/studio`,
  `/contact`, `/_not-found`, plus the dynamic route `/api/contact`.
  `next.config.ts` sets `distDir: 'dist'` and `images.unoptimized: true`.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Install | `npm install` | exit 0 |
| Typecheck | `npm run typecheck` | exit 0, no output |
| Lint | `npm run lint` | exit 0, no output |
| Build (offline-safe) | `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build` | exit 0; route table lists `/`, `/_not-found`, `/api/contact`, `/contact`, `/icon.svg`, `/studio` |
| Audit | `npm audit --omit=dev` | zero high-severity advisories against `next` |

## Scope

**In scope** (the only files you should modify):
- `package.json`
- `package-lock.json`

**Out of scope** (do NOT touch):
- Any file under `app/`, `components/`, `lib/` — this is a dependency-only change.
- `next.config.ts` — the `distDir`/`images` config must survive the bump unchanged.
- Do not add new dependencies. Do not run `npm audit fix --force`.

## Git workflow

- Work on the current checked-out branch.
- One commit, message style matches repo history (`git log --oneline`), e.g.:
  `chore: update next past advisory range, drop unused deps`

## Steps

### Step 1: Remove the unused dependencies

Run `npm uninstall serve @phosphor-icons/react`.

**Verify**: `grep -c "serve\|phosphor" package.json` → `0`

### Step 2: Update next (and its transitive advisories)

Run `npm install next@^16.3.0 eslint-config-next@^16.3.0` (keeps both in lockstep), then `npm audit fix` (plain, never `--force`) to refresh remaining transitive advisories (`fast-uri`, `postcss`, `brace-expansion`).

**Verify**: `npm audit --omit=dev` → no advisory listing `next`; `npm ls next` shows a version ≥ 16.3.0 (stable, not canary).

### Step 3: Run the full verification gate

Run typecheck, lint, and the offline-safe build from the command table.

**Verify**: all three exit 0 and the build route table matches the expected list in the command table.

## Test plan

No test framework exists at the planned-at commit (plan 003 introduces one).
The verification gate above (typecheck + lint + build + route table) is the
regression check for this change.

## Done criteria

- [ ] `npm run typecheck` exits 0
- [ ] `npm run lint` exits 0
- [ ] `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build` exits 0 with the same 6-entry route table
- [ ] `npm audit --omit=dev` reports no advisories against `next`
- [ ] `grep -c "phosphor\|\"serve\"" package.json` → 0
- [ ] `git status` shows changes only to `package.json` and `package-lock.json`

## STOP conditions

Stop and report back (do not improvise) if:

- `npm install next@^16.3.0` resolves only to a canary/prerelease version.
- The build fails after the bump and the error is not resolved by a clean
  reinstall (`rm -rf node_modules && npm install`) — do not patch app code to
  make a new Next version compile; that is out of scope.
- `npm audit fix` wants to change any direct dependency other than `next`/`eslint-config-next`.

## Maintenance notes

- `images.unoptimized: true` and `distDir: 'dist'` in `next.config.ts` are
  deliberate; if a future Next major changes either behavior, that migration is
  a separate plan.
- Reviewer should scrutinize the lockfile diff for unexpected new top-level
  packages (there should be none).
