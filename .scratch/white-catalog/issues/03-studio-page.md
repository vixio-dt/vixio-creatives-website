# 03: Studio page, the one self-description

Status: ready-for-agent
Type: AFK

## Parent

.scratch/white-catalog/PRD.md

## What to build

Rebuild `/studio` to the plan's section map (RESTRUCTURE-PLAN-V2.md Section 2), all strings from `copy.studio` and `copy.meta.studio`. This page is the ONLY place above the footer where the label describes itself.

- `app/studio/page.tsx`: metadata from `copy.meta.studio`; composes the sections below.
- Section 1, lead: h1 `copy.studio.heading`, then the descriptor `copy.studio.lead` as a display statement (Space Grotesk 700, clamp(2rem, 5vw, 3.5rem)). NOT a `min-h-[100dvh]` section; generous but bounded padding so facts are reachable in the first scroll.
- Section 2, facts: the four `copy.studio.facts` declaratives, stacked rows separated by hairlines (`--line`), Manrope, `--text` at comfortable reading size. No headings per row, no icons, no cards.
- Section 3, AI stance: h2 `copy.studio.aiStanceHeading` (sentence-case header per ADR-12), statement `copy.studio.aiStance` at display scale.
- Section 4, founder: h2 = `copy.studio.founder.name`, role line in `--text-secondary` (write & as a literal ampersand character), bio capped at 52ch. Typographic only (STUDIO-FOUNDER-01 stays imageless; never generate a portrait).
- Section 5, CTA: one Button (primary) labeled `copy.studio.cta` linking to `/contact`. Left-aligned with the content column, not a centered ceremony.
- Rework or replace `components/studio/*` as needed; delete any of the four old studio components that no longer earn their file. whileInView fade-rise per ADR-11, gated on useReducedMotion.

Layout families must differ across sections (statement / hairline stack / statement / split or stack / CTA row). Zero eyebrows. Sentence case headers.

Do not touch: `app/api/**`, `lib/supabase.ts`, home and contact surfaces.

## Acceptance criteria

- [ ] "npm run typecheck && npm run lint && npm run build" passes; output reported verbatim
- [ ] Scan 1 and Scan 2 (plan Section 9) return zero hits
- [ ] Every visible string on the page comes from lib/copy.ts
- [ ] The page covers, in order: descriptor lead, company, what the label makes, honest stage, AI stance, founder name and title, one Contact CTA
- [ ] The only contact-intent string on the page is exactly "Contact" (ADR-13)
- [ ] Heading outline: one h1, h2s for AI stance and founder; no heading-styled paragraphs standing in for headings
- [ ] All motion gated on useReducedMotion; no window scroll listeners; no h-screen
- [ ] Zero eyebrows; sentence-case headers only

## Blocked by

- 01-white-foundation-copy-module-chrome.md
