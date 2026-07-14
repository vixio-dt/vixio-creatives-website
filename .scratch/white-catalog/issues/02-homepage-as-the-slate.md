# 02: Homepage as the slate

Status: ready-for-agent
Type: AFK

## Parent

.scratch/white-catalog/PRD.md

## What to build

The new homepage: featured viewport, status sections, newsletter, all driven by `lib/slate.ts` and `lib/copy.ts`. The old homepage components and the dark system's last remnants are deleted in the same slice.

Build (per RESTRUCTURE-PLAN-V2.md Sections 2, 3, 5, 7 and ADR-05/06/09/10/11):

- `components/slate/PlaceholderTreatment.tsx`: client-free (server) component rendering the designed interim for a given PlaceholderId, per plan Section 5: `HOME-HERO-01` = paper field with ONE oversized cropped ink triangle (logo geometry, simple polygon, `aria-hidden`) bleeding off the frame edge, plus at most one soft cyan (#3AAED8 / `--accent-media`) light gradient, non-text, subtle (under 12% opacity); `HOME-SLATE-TILE-01` = ink-on-paper typographic tile with hairline border; `HOME-SLATE-TILE-02` = paper tile with a hairline plinth glyph (a simple geometric line drawing: horizontal top line over a narrow vertical rectangle, drawn with 2 to 3 SVG strokes in `--line`-grade ink, `aria-hidden`). No gray boxes. No text inside the treatment itself (titles/captions live in the tile markup).
- `components/slate/FeaturedWork.tsx`: the first viewport. `min-h-[100dvh]` full-bleed section (offset for the 64px nav), HOME-HERO-01 treatment as the field, and a text block of EXACTLY four text elements: promise (`copy.hero.promise`, small, sentence case), h1 title (entry title, Space Grotesk 700, clamp(2.5rem, 7vw, 5.5rem)), status-year line ("In Production, 2026", `--text-secondary` weight 500), and one Button (primary) with the entry's `action.label` -> `action.href`. Title, year, status legible with zero scroll at 1440x900 AND 390x844. Mount fade on the text block (framer-motion, gated on useReducedMotion). Hover scale 1.02 on the treatment INSIDE overflow-hidden bounds.
- `components/slate/SlateTile.tsx`: tile = treatment (overflow-hidden, hover scale 1.02, whileInView fade-rise once) + title (h3) + status-year line + at most one verb if `action` exists. NOTHING else on tiles: no kind words, no descriptions.
- `components/slate/SlateSection.tsx`: h2 = status display string (sentence case per ADR-12, Space Grotesk 700, clamp(1.125rem, 2vw, 1.375rem)), then the tiles for that status. Renders nothing for empty statuses.
- `components/home/Newsletter.tsx`: client component, `<section id="newsletter">`, h2 `copy.newsletter.heading`, body line, form: label-above-input email field (`copy.newsletter.emailLabel` / placeholder), Button primary `copy.newsletter.submit`. POSTs EXACTLY `{ type: 'buyer', contact: <email> }` to `/api/contact` with Content-Type application/json. While pending: button disabled, label `copy.newsletter.submitting`, `aria-busy`. On 200: replace form with `copy.newsletter.success` in a `role="status"` live region. On failure: `copy.newsletter.error` below the input, `role="alert"`, linked via `aria-describedby`. No simulated success.
- `app/page.tsx`: compose FeaturedWork (from `featuredWork()`), SlateSections (from `slateByStatus()`), Newsletter.

Delete in this slice (files AND all imports/usages):

- `components/home/ScrollLogoReveal.tsx`, `LabelStatement.tsx`, `WhatWeMake.tsx`, `NowInProduction.tsx`, `TheBar.tsx`, `HomeCTA.tsx`
- The legacy `--ink*` token family and `--logo-width` from `app/globals.css` (nothing references them after ScrollLogoReveal dies)

Do not touch: `app/api/**`, `lib/supabase.ts`, studio/contact pages and components, `components/ui/Gradient*`/`Ghost*`/`ScrollReveal*`/`SectionLabel*` (slice 05 sweeps them).

## Acceptance criteria

- [ ] "npm run typecheck && npm run lint && npm run build" passes; output reported verbatim
- [ ] Scan 1 and Scan 2 (plan Section 9) return zero hits
- [ ] At 1440x900 and 390x844, the first viewport shows the featured work's title, year, and status with zero scroll
- [ ] The hero text block contains exactly 4 text elements: promise, title, status-year line, one verb
- [ ] Every tile renders exactly title + year + status, plus at most one functional verb. No genre or category words on any tile
- [ ] Within the catalog, status taxonomy terms are the only section headers
- [ ] The newsletter object is present on the homepage with a real capture path (frozen `{type:'buyer', contact}` payload) and the deck's expectation-setting microcopy. No simulated success
- [ ] The object edition appears as a slate peer under the same tile doctrine
- [ ] ScrollLogoReveal and the five old home sections are deleted; `grep -rn "ScrollLogoReveal\|LabelStatement\|WhatWeMake\|NowInProduction\|TheBar\|HomeCTA" app components` returns nothing
- [ ] `grep -n "ink\-\|--ink\|logo-width" app/globals.css` shows no legacy dark tokens
- [ ] All motion gated on useReducedMotion; no window scroll listeners; no `h-screen`
- [ ] Homepage h1 is the featured work's title; outside the hero promise there are zero sentences describing what Vixio is

## Blocked by

- 01-white-foundation-copy-module-chrome.md
