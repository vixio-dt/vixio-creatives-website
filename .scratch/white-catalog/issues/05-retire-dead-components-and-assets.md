# 05: Retire dead components and assets

Status: ready-for-agent
Type: AFK

## Parent

.scratch/white-catalog/PRD.md

## What to build

The dead-code sweep after slices 01 through 04, plus the OG card regeneration attempt.

- Verify by grep that `components/ui/GradientButton.tsx`, `components/ui/GhostButton.tsx`, `components/ui/ScrollReveal.tsx`, `components/ui/SectionLabel.tsx` have zero importers; delete each unreferenced file. If any still has an importer, replace that usage with `components/ui/Button.tsx` (or plain markup) first, then delete.
- Sweep `app/globals.css` for rules that no longer match any markup (old `.gradient-btn`/`.ghost-btn` selectors if the new Button uses different classes, `.scroll-reveal-*` if ScrollReveal died, `.fade-in-up` if unused, `.wmm-*`/`.nip-*`/`.hww-*`/`.founder-inner`/`.contact-grid` leftovers from deleted inline styles). Delete dead rules.
- META-OG-01 attempt: regenerate `public/og.png` (1200x630) as the white card: wordmark (public/vixio-wordmark.svg) centered on `#FAFAF8`. Try Playwright (devDependency) by writing a throwaway script that renders a local HTML file and screenshots it; run it with the locally installed chromium if present. If no browser binary is available offline, DO NOT fake it: leave og.png untouched, delete the throwaway script, and state clearly in your report that META-OG-01 remains pending.
- Delete `scripts/extract-frames.py` if it references only the retired dark-system assets (verify by reading it first; if it is generic tooling, leave it).
- Final repo greps, reported verbatim: dangling imports of deleted components; `h-screen`; `window.addEventListener('scroll')`; both plan Section 9 scans.

Do not touch: `app/api/**`, `lib/supabase.ts`, `public/vixio-logo.svg`, `public/vixio-wordmark.svg`, `font-mocks.js`.

## Acceptance criteria

- [ ] "npm run typecheck && npm run lint && npm run build" passes; output reported verbatim
- [ ] Scan 1 and Scan 2 (plan Section 9) return zero hits
- [ ] Zero unreferenced component files remain under components/; grep evidence reported
- [ ] globals.css contains no selector that matches nothing (spot-check evidence for the named candidates)
- [ ] og.png either regenerated white (1200x630, wordmark on #FAFAF8) or explicitly reported pending; no fake/partial output committed
- [ ] No new dependencies; package.json diff is empty

## Blocked by

- 02-homepage-as-the-slate.md
- 03-studio-page.md
- 04-contact-rework.md
