# Plan 006: Extract the fade-rise motion variant into lib/motion.ts

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report. When done, update the status row for this plan in `plans/README.md`
> unless a reviewer dispatched you and told you they maintain the index.
>
> **Drift check (run first)**: `git diff --stat 3ea5bbf..HEAD -- components/studio/ components/slate/`
> If any of these files changed since this plan was written, compare the
> "Current state" excerpts against the live code; on a mismatch, STOP.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW (pure deduplication; rendered output must be identical)
- **Depends on**: none (cleaner if it lands after 003 so the gate includes tests)
- **Category**: tech-debt
- **Planned at**: commit `3ea5bbf`, 2026-06-10

## Why this matters

The single sanctioned in-view animation (AGENTS.md/ADR-11: fade-rise,
`opacity 0→1`, `y 24→0`, duration 0.6, ease `[0.16, 1, 0.3, 1]`) is
re-declared inline roughly nine times across seven components, in two slightly
different idioms. Any future tuning of the one allowed animation means seven
edits, and the duplicated easing array is exactly the kind of copy that
drifts. One shared module makes the fixed motion inventory literal: one place
to read it, one place to change it.

## Current state

Two idioms exist today:

- **Studio idiom** (per-element props; `components/studio/StudioLead.tsx:21-23, 37-39`,
  `StudioAIStance.tsx:19-22, 36-39`, `StudioFounder.tsx:19-22, 52-55`,
  `StudioCTA.tsx:20-23`, `StudioFacts.tsx:21-24`):

  ```tsx
  const reduce = useReducedMotion()
  …
  <motion.div
    initial={reduce ? false : { opacity: 0, y: 24 }}
    whileInView={…}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}   // some add delay: 0.08 or i * 0.08
  ```

- **Slate idiom** (spread object; `components/slate/SlateTile.tsx:22-32`,
  `components/slate/FeaturedWork.tsx:15-25`):

  ```tsx
  const tileMotionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      }
  <motion.article {...tileMotionProps}>
  ```

Read each file before editing; some studio components animate two elements
with a 0.08s stagger delay, and `StudioFacts.tsx` uses `delay: i * 0.08` in a
map. `LogoTransition.tsx` and chrome components (`SiteNav`, `SiteFooter`) do
NOT use this variant and are untouched.

Conventions: no em/en dashes anywhere including comments; components never
define copy; match existing file style (4-value ease tuple typing).

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Typecheck | `npm run typecheck` | exit 0 |
| Lint | `npm run lint` | exit 0 |
| Tests (if plan 003 landed) | `npm test` | exit 0 |
| Build (hermetic) | `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build` | exit 0 |
| Dash scan | `grep -rn $'–\|—' app components lib` | exit 1 (no matches) |

## Scope

**In scope**:
- `lib/motion.ts` (create)
- `components/studio/StudioLead.tsx`, `StudioFacts.tsx`, `StudioAIStance.tsx`,
  `StudioFounder.tsx`, `StudioCTA.tsx`
- `components/slate/SlateTile.tsx`, `components/slate/FeaturedWork.tsx`

**Out of scope** (do NOT touch):
- `components/home/LogoTransition.tsx` (scroll-scrubbed, its own ADR-16 spec)
- `components/layout/` (chrome never animates), `components/home/Newsletter.tsx`
- Any visual/timing change: durations, ease, distances, delays, and the
  reduced-motion behavior of every element must be byte-identical in effect.

## Git workflow

- Work on the current checked-out branch.
- One commit, e.g.: `refactor: single source for the fade-rise motion variant`

## Steps

### Step 1: Create lib/motion.ts

```ts
// The one sanctioned in-view animation (ADR-11): fade-rise.
// Components gate on useReducedMotion and pass the result to these helpers.

export const FADE_RISE_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
export const FADE_RISE_DURATION = 0.6
export const FADE_RISE_HIDDEN = { opacity: 0, y: 24 }
export const FADE_RISE_VISIBLE = { opacity: 1, y: 0 }

export function fadeRiseTransition(delay = 0) {
  return { duration: FADE_RISE_DURATION, delay, ease: FADE_RISE_EASE }
}

/** Spread-props helper for whileInView usage. Pass useReducedMotion()'s value. */
export function fadeRiseInView(reduced: boolean | null, delay = 0) {
  if (reduced) return {}
  return {
    initial: FADE_RISE_HIDDEN,
    whileInView: FADE_RISE_VISIBLE,
    viewport: { once: true },
    transition: fadeRiseTransition(delay),
  }
}
```

Adjust helper signatures only if a call site genuinely cannot be expressed
(e.g. a component uses `animate` instead of `whileInView` — check each file
first and mirror what it actually does today).

**Verify**: `npm run typecheck` → exit 0

### Step 2: Migrate the slate idiom

`SlateTile.tsx` and `FeaturedWork.tsx`: replace the inline props object with
`fadeRiseInView(reducedMotion)` (and the existing extra props they spread, if
any — read first). The `useReducedMotion()` call stays in each component.

**Verify**: `npm run typecheck` → exit 0

### Step 3: Migrate the studio idiom

For each studio component, replace the inline `initial/whileInView/viewport/
transition` (or `animate`) attribute group with the spread helper, preserving
each element's exact current behavior, including `delay: 0.08` second elements
and `StudioFacts`'s `i * 0.08`. IMPORTANT: first read each file and note
whether it uses `whileInView` or `animate` for the visible state; if any use
`animate`, add a matching helper (e.g. `fadeRiseMount`) to `lib/motion.ts`
rather than changing the trigger semantics.

**Verify**: after each file, `npm run typecheck` → exit 0

### Step 4: Confirm zero duplicates remain and run the full gate

**Verify**:
- `grep -rn "0.16, 1, 0.3, 1" components/` → no matches (the tuple lives only in `lib/motion.ts`)
- `grep -rn "opacity: 0, y: 24" components/` → no matches
- typecheck, lint, tests (if present), hermetic build, dash scan → all pass

## Test plan

No new tests: this is behavior-preserving deduplication verified by the gate
plus the grep done-criteria. (Framer Motion props are not unit-tested in this
repo; visual parity is the reviewer's diff check.)

## Done criteria

- [ ] `lib/motion.ts` exists; ease tuple and `opacity: 0, y: 24` appear nowhere under `components/`
- [ ] All gate commands exit 0 (typecheck, lint, test if present, build, dash scan)
- [ ] Per-element timing preserved: `grep -rn "0.08" components/studio/` still shows the stagger delays (passed as arguments)
- [ ] `git status` touches only the 8 in-scope files

## STOP conditions

Stop and report back (do not improvise) if:

- A studio component's motion usage does not match either idiom above (drift).
- Preserving exact behavior would require changing an out-of-scope file.
- You find yourself altering any duration/ease/distance value.

## Maintenance notes

- ADR-11/ADR-15 fix the motion inventory; if a future ADR adds an animation,
  it gets its own export here — components should never re-inline values.
- Reviewer: diff each component for accidental trigger changes
  (`whileInView` vs `animate`) and dropped `viewport: { once: true }`.
