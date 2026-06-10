# Plan 004: Automate the verification gate (CI, scan scripts, .env.example, stale docs)

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report. When done, update the status row for this plan in `plans/README.md`
> unless a reviewer dispatched you and told you they maintain the index.
>
> **Drift check (run first)**: `git diff --stat 3ea5bbf..HEAD -- AGENTS.md README.md package.json`
> Changes from plans 001/003 are expected; if the AGENTS.md scan commands or
> ADR references differ from the excerpts below, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: LOW (additive tooling + doc corrections)
- **Depends on**: plans/003-test-baseline-vitest.md (CI runs `npm test`)
- **Category**: dx / docs
- **Planned at**: commit `3ea5bbf`, 2026-06-10

## Why this matters

AGENTS.md mandates a gate (`typecheck && lint && build`) plus two mechanical
copy scans before any commit, but nothing enforces it: there is no CI, the
scans exist only as prose, and the documented dash-scan command is broken on
systems without the `en_US.UTF-8` locale (`grep -P "[\x{2013}...]"` errors with
"character code point value too large", silently passing a broken gate).
Required env vars are documented only in a README table; there is no
`.env.example`. AGENTS.md also says ADRs run "0001 through 0014" while
`docs/adr/` contains 0001 through 0016. This plan turns the documented gate
into one command and one CI workflow, and fixes the stale references.

## Current state

- No `.github/` directory exists.
- No `.env*` file exists; `lib/supabase.ts:7-8` reads `SUPABASE_URL` /
  `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_ANON_KEY` /
  `NEXT_PUBLIC_SUPABASE_ANON_KEY`; `app/api/contact/route.ts:6` reads
  `RESEND_API_KEY`. `.gitignore` already ignores `.env` and `.env.local`.
- `package.json` scripts: `dev`, `build`, `start`, `lint`, `typecheck`
  (plus `test` after plan 003).
- AGENTS.md line 10: "decisions live in `docs/adr/0001` through `0014`" —
  stale; 0015 and 0016 exist.
- AGENTS.md lines 26–28, the two scans:
  - Scan 1 (banned tokens, works):
    `grep -rinE "underserved|deserve|overlooked|forgotten|rescue|reviv|adapt|best expression|worlds we love|existing ip|world[ -]first|innovat|disrupt|transform|cutting[ -]edge|elevat|seamless|unleash|next[ -]gen|revolutioni|signal reel|no\.? ?001|meta[ -]drop|track [0-9]|move [0-9]|visual stud|experience|playable" lib/copy.ts lib/slate.ts`
    Passing = exit 1 (no matches).
  - Scan 2 (dashes, broken without the locale):
    `LC_ALL=en_US.UTF-8 grep -rnP "[\x{2013}\x{2014}]" app components lib`
    Portable replacement: `grep -rn $'–\|—' app components lib`
    (bash ANSI-C quoting; no locale or PCRE needed). Passing = exit 1.
- Offline/CI builds need `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js`
  (font-mocks.js exists at the repo root). On GitHub-hosted runners network is
  available, but using the mock keeps builds hermetic; use it in CI.
- Repo commit style (from `git log --oneline`): `feat: …`, `fix: …`,
  `chore: …`, `docs: …`.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Typecheck | `npm run typecheck` | exit 0 |
| Lint | `npm run lint` | exit 0 |
| Tests | `npm test` | exit 0 |
| Build (hermetic) | `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build` | exit 0 |
| New scan script | `npm run scan` | exit 0 |
| New full gate | `npm run verify` | exit 0 |

## Scope

**In scope**:
- `package.json` (add `scan`, `scan:copy`, `scan:dashes`, `verify` scripts)
- `.github/workflows/verify.yml` (create)
- `.env.example` (create — placeholder values only, NEVER real keys)
- `AGENTS.md` (ADR range; replace scan commands with the npm scripts; keep meaning)
- `README.md` (mention `npm run verify`, `.env.example`)

**Out of scope** (do NOT touch):
- Anything under `app/`, `components/`, `lib/`, `docs/adr/`.
- No husky/pre-commit hooks (decided against: CI + one-command gate cover it
  without a new dependency).
- No deployment workflow — verification only.

## Git workflow

- Work on the current checked-out branch.
- One commit, e.g.: `feat: one-command verification gate and CI workflow`

## Steps

### Step 1: Add the scripts

In `package.json`:

```json
"scan:copy": "grep -rinE \"<the exact banned-token pattern from AGENTS.md, copied verbatim>\" lib/copy.ts lib/slate.ts && exit 1 || true",
"scan:dashes": "grep -rn $'\\u2013\\|\\u2014' app components lib && exit 1 || true",
"scan": "npm run scan:copy && npm run scan:dashes",
"verify": "npm run typecheck && npm run lint && npm test && npm run scan"
```

Note the inversion: grep exits 1 on "no matches", which is the PASS state.
Confirm each script passes on the current tree and FAILS when you temporarily
plant the word `seamless` in `lib/copy.ts` (revert the plant immediately;
`git diff lib/copy.ts` must be empty afterward). If `$'–'` quoting fails
inside npm scripts on this platform, move both scans into `scripts/scan.sh`
(bash shebang) and call it from npm — same semantics.

**Verify**: `npm run verify` → exit 0; plant test behaves as described; `git diff lib/copy.ts` empty

### Step 2: Create .env.example

Placeholders with one comment line each: `SUPABASE_URL`, `SUPABASE_ANON_KEY`
(server-side; the `NEXT_PUBLIC_*` variants exist as fallbacks in
`lib/supabase.ts` but the non-public names are preferred), `RESEND_API_KEY`
(optional; without it the contact API skips the notification email).
Placeholder values like `https://YOUR-PROJECT.supabase.co` only.

**Verify**: `grep -c "ey[A-Za-z0-9]\{20\}" .env.example` → 0 (no real-looking keys)

### Step 3: Create .github/workflows/verify.yml

Single job on `push` and `pull_request`: checkout, setup-node (Node 22,
npm cache), `npm ci`, `npm run verify`, then the hermetic build with
`NEXT_FONT_GOOGLE_MOCKED_RESPONSES: ${{ github.workspace }}/font-mocks.js` in
the step's `env`. No secrets are needed (the build does not require Supabase
or Resend vars).

**Verify**: a YAML parse passes, e.g. `node -e "require('js-yaml')"` is NOT
available — instead use `npx --yes yaml-lint .github/workflows/verify.yml` or
careful manual review; then `npm run verify` still exits 0.

### Step 4: Fix the stale docs

- AGENTS.md: "0001 through 0014" → "0001 through 0016" (or reword to "see
  `docs/adr/`"), and replace the two raw scan commands with `npm run scan`
  (keep one sentence stating what the scans check and that passing = zero hits).
  Update the "Mandatory verification" block to `npm run verify` plus the
  hermetic build command.
- README.md: add `npm run verify` to the scripts/commands section and a line
  pointing to `.env.example`.

**Verify**: `grep -n "0014" AGENTS.md` → no match for the ADR-range sentence; `npm run verify` → exit 0

## Test plan

No new unit tests. The "plant a banned word, watch the scan fail" check in
step 1 is the behavioral test for the gate itself; CI proves itself on the
first push.

## Done criteria

- [ ] `npm run verify` exits 0 on a clean tree
- [ ] Planting `seamless` in `lib/copy.ts` makes `npm run scan` exit non-zero (and is reverted)
- [ ] `.github/workflows/verify.yml` exists, runs `npm run verify` and the hermetic build
- [ ] `.env.example` exists with placeholders only
- [ ] AGENTS.md mentions neither "0014" (as the ADR upper bound) nor the locale-dependent `grep -P` scan
- [ ] `git status` touches only in-scope files

## STOP conditions

Stop and report back (do not improvise) if:

- The exact banned-token regex from AGENTS.md cannot be embedded in JSON
  without altering its meaning AND the `scripts/scan.sh` fallback also fails —
  report the escaping problem rather than weakening the pattern.
- `npm run verify` fails on the clean tree for a reason unrelated to your
  changes (report which gate fails).
- You are tempted to edit `lib/copy.ts` for any reason other than the
  temporary plant test.

## Maintenance notes

- When new banned tokens are added to AGENTS.md, the `scan:copy` pattern must
  be updated in the same commit — note this in AGENTS.md next to the script
  mention.
- If the site later needs build-time env vars, the CI build step will need a
  secrets block; keep `verify` (no secrets) and `build` as separate steps so
  the gate stays runnable on forks.
