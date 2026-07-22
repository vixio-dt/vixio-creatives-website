---
description: Project rules for vixio-creatives-website development
alwaysApply: true
---

# AGENTS.md

## Project Overview

Marketing website for Vixio Creatives (`vixiocreatives.com`): a white, catalog-first label site where the slate of work is the homepage. Next.js 16 App Router, TypeScript, Tailwind v4 + CSS custom properties, Framer Motion. Production uses `next build` (output in `dist/`) and `next start`. Restructured 10 June 2026; positioning updated to White Catalog 2.0 on 22 July 2026 (ADR-17). Decisions live in `docs/adr/0001` through `0017`, the glossary in `CONTEXT.md`, the design system in `DESIGN.md`.

## Frozen contracts (never change these)

1. **The contact API**: POST `/api/contact` accepts exactly `{type:'creator', name, portfolio, idea, contact}` or `{type:'buyer', contact}`. Never rename fields. Never touch `app/api/` or `lib/supabase.ts`.
2. **Brand assets**: `public/vixio-logo.svg`, `public/vixio-wordmark.svg`.
3. **Locked brand lines (White Catalog 2.0, ADR-17)**: the brand slogan, canonical wording "Stories Across Worlds", rendered on-site in sentence case as "Stories across worlds" (the featured viewport quiet promise line; never all caps, never an eyebrow), and the footer descriptor "Vixio develops new expressions of selected story worlds with creators and rights holders." Used with restraint; never paraphrased.

## Copy rules (zero tolerance in visible strings)

- Every visible string lives in `lib/copy.ts`; slate content in `lib/slate.ts`. Components NEVER define copy. Metadata reads from the copy module.
- Banned tokens: underserved, deserve(s), overlooked, forgotten, rescue, revive; adapt/adaptation, "best expression", "the worlds we love", "partner with existing IP", world-first; any real IP or franchise name; innovate, disrupt, transform, cutting-edge, elevate, seamless, unleash, next-gen, revolutionize; fake enthusiasm; deficit framing ("coming soon"); internal codenames (Signal Reel, No.001, Meta-Drop, Track 1/2, Move 1/2/3); "visual studies", "experiences", "playable".
- Em dashes and en dashes: ZERO, anywhere in `app/`, `components/`, `lib/`, including code comments.
- The single contact CTA string is "Contact" (ADR-13). Tiles carry title + year + status + at most one functional verb, nothing else.
- Mechanical scans, zero hits required before any commit touching copy:

```bash
grep -rinE "underserved|deserve|overlooked|forgotten|rescue|reviv|adapt|best expression|worlds we love|existing ip|world[ -]first|innovat|disrupt|transform|cutting[ -]edge|elevat|seamless|unleash|next[ -]gen|revolutioni|signal reel|no\.? ?001|meta[ -]drop|track [0-9]|move [0-9]|visual stud|experience|playable" lib/copy.ts lib/slate.ts
LC_ALL=en_US.UTF-8 grep -rnP "[\x{2013}\x{2014}]" app components lib
```

## The slate growth path

Adding a work = adding one entry to `lib/slate.ts`. Status display (kind-qualified released labels, year-composed coming labels, section headings, section order) resolves entirely inside `lib/slate.ts`; do not duplicate lookups in components. Statuses: `in-production`, `in-development`, `coming`, `released`. Kinds: `film`, `object`, `labs` (Labs deferred from the site per ADR-08; Notes deferred per ADR-07). Media slots key to `PLACEHOLDER-ASSETS.md` IDs; when a real asset lands, point the entry at the file and delete the interim treatment.

## Design system invariants

- White theme only: paper `#FAFAF8`, ink `#121417`, accent `#15718F` (interactive), raw brand cyan `#3AAED8` non-text inside media/logo only, gold logo-only. Full token table with ratios in ADR-01.
- One radius system: 0 everywhere. Zero eyebrows: status headers are sentence case. No three-equal-cards, no split-headers.
- Motion inventory is fixed by ADR-11 plus ADR-15 (in-view fade-rise, tile hover scale, hero mount fade, and the homepage LogoPrelude scroll-scrubbed opening; chrome static otherwise). Everything gates on `useReducedMotion`; the prelude renders nothing under reduced motion. NO `window.addEventListener('scroll')`, NO `h-screen` (use `min-h-[100dvh]`), no custom cursors. The brand gradient may fill logo geometry inside media treatments only, never UI or text (ADR-15).
- WCAG 2.1 AA: visible 2px accent focus rings, 44px targets, labels above inputs, live-region form states.

## Mandatory verification

Run before claiming work complete:

```bash
npm run typecheck && npm run lint && npm run build
```

Offline builds: `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build`. No test framework exists; the gate plus the two scans above are the check.

## Key directories

- `lib/copy.ts`, `lib/slate.ts`: all strings and slate data (the only files the ban scan needs)
- `components/slate/`: FeaturedWork, SlateSection, SlateTile, PlaceholderTreatment
- `components/home/Newsletter.tsx`: the relationship channel (frozen buyer payload)
- `components/layout/`: SiteNav, SiteFooter (chrome; never animates)
- `components/ui/Button.tsx`: the one button
- `docs/adr/`: decisions; `docs/agents/`: issue tracker + triage + domain doc conventions; `.scratch/`: local issue tracker

## Agent skills

### Issue tracker

Issues live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` at the repo root plus `docs/adr/`. See `docs/agents/domain.md`.

## History

The dark cinematic system (June 2026, with the 400vh ScrollLogoReveal) was rejected and fully removed; see DESIGN.md's history note and ADR-02. Do not resurrect its patterns from git history without a new ADR.
