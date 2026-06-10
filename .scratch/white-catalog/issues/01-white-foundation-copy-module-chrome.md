# 01: White foundation, copy module, slate data, chrome

Status: ready-for-agent
Type: AFK

## Parent

.scratch/white-catalog/PRD.md

## What to build

The white design-system foundation and the site chrome, with every visible string moved into a typed copy module. After this slice the token system is white (Section 6 of RESTRUCTURE-PLAN-V2.md), `lib/copy.ts` and `lib/slate.ts` exist with the plan's deck content verbatim (plan Sections 3.1 and 3.2), the nav and footer are the white chrome, the 404 page and SVG favicon exist, and root metadata reads from the copy module. Old page components keep compiling against the new token names (they are replaced in later slices).

Specifics binding this slice:

- `app/globals.css`: replace the dark token block with the plan Section 6 token table EXACTLY (values verbatim). Keep `--spacing-*`, keep font variables. Remove: `--surface-high`, `--accent-soft`, `--gold`, `--vixio-gradient`, `--primary`, `--on-primary`, `--primary-container`, `--on-surface-variant`, pill radius aliases (`--radius-interactive`, `--radius-md/lg/xl/sm`), keeping a single `--radius: 0`. KEEP the legacy `--ink*` family and `--logo-width` for now (ScrollLogoReveal still references them; slice 02 deletes both together). Rework `.gradient-btn`/`.ghost-btn`/`.vx-input`/`.nav-link`/`.footer-link`/`.skip-link` styles to the white system (ink on paper, sharp corners, 2px `--accent` focus ring offset 2px, no `!important`). Recolor `.vx-error` to `var(--error)`. Gate `html { scroll-behavior: smooth }` behind `@media (prefers-reduced-motion: no-preference)`. Typography utility classes: keep `.display-*`/`.headline-*`/`.body-*` but retune to ADR-12 scale (display tracking -0.02em; body 1rem/1.6).
- `lib/copy.ts`: the plan Section 3.1 object verbatim, with a full `SiteCopy` interface typed from it (no `any`). Export `copy` as `SiteCopy`.
- `lib/slate.ts`: ADR-05 types plus the plan Section 3.2 data verbatim. Export a `slateByStatus()` helper that groups non-featured entries by status preserving slate order, returning only statuses that have entries, and a `featuredWork()` helper returning the single featured entry. Status display strings resolve through `copy.statusLabels`; render `${label}, ${year}` when the entry has a year.
- `components/ui/Button.tsx`: replaces GradientButton/GhostButton pattern (do NOT delete those files yet; later slices remove usages first). Props: `href` or `onClick/type/disabled`, `variant: 'primary' | 'secondary'`. Primary: ink fill, paper text. Secondary: transparent, 1px ink border. Sharp corners, min-height 44px, single-line label, hover translateY(-1px), active scale(0.98), focus-visible ring. When `href` is set, render a Next Link and IGNORE disabled-styling (no disabled links).
- `components/layout/SiteNav.tsx`: white bar, `background: var(--surface)` at 0.92 alpha equivalent via `color-mix` or rgba(250,250,248,0.92) with backdrop blur, hairline bottom border, 64px height, wordmark left (existing svg, `priority`), links right: `copy.nav.studio` then `copy.nav.contact`. All strings and aria-labels from `copy.nav`. No hardcoded dark rgba.
- `components/layout/SiteFooter.tsx`: plain sitemap: links Studio, Contact, Newsletter (`/#newsletter`), mailto `copy.footer.email`; descriptor line; legal line. All strings from `copy.footer`. Keep the responsive collapse, move the inline `<style>` CSS into globals.css under a `/* footer */` section.
- `app/layout.tsx`: metadata built from `copy.meta` (default title, template, description, OG, twitter, `ogImageAlt`); skip link text from `copy.skipLink`; body background/text from tokens.
- `app/not-found.tsx`: new server component; h1 `copy.notFound.heading`, body line, Button (secondary) link home labeled `copy.notFound.link`.
- `app/icon.svg`: new; the logo's triangle ("v") geometry as a single solid shape filled with `#3AAED8` (flat brand cyan; skip the gradient if it cannot be expressed in under ~20 SVG lines), transparent background, viewBox square.

Do not touch: `app/page.tsx`, `app/studio/*`, `app/contact/*`, `components/home/*`, `components/studio/*`, `components/contact/*`, `components/ui/Gradient*`, `components/ui/Ghost*`, `components/ui/ScrollReveal.tsx`, `components/ui/SectionLabel.tsx`, `app/api/**`, `lib/supabase.ts`.

## Acceptance criteria

- [ ] "npm run typecheck && npm run lint && npm run build" passes (offline builds require NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js); output reported verbatim
- [ ] Scan 1 (ban-list grep over lib/copy.ts lib/slate.ts, plan Section 9) returns zero hits
- [ ] Scan 2 (dash grep over app components lib, plan Section 9) returns zero hits
- [ ] Token values match the plan Section 6 table character-for-character
- [ ] Every string in SiteNav, SiteFooter, layout metadata, and not-found comes from lib/copy.ts; zero string literals for visible text in those components
- [ ] Focus ring (2px solid var(--accent), offset 2px) visible on nav links, footer links, buttons
- [ ] 44px minimum interactive height on nav links and buttons
- [ ] No `!important` in the reworked button/input styles
- [ ] `scroll-behavior: smooth` only inside `prefers-reduced-motion: no-preference`
- [ ] No `h-screen`; no `window.addEventListener('scroll')`

## Blocked by

None - can start immediately.
