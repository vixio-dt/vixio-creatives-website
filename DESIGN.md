# Design System: Vixio Creatives Website

**Register:** Brand, Layer 3 (public-safe) per Company Compass v2.0
**System:** White Catalog. Restructured 10 June 2026. Decisions in `docs/adr/0001` through `0014`; glossary in `CONTEXT.md`.

**History note.** A June 2026 redesign shipped a dark cinematic system (near-black ink surfaces, cyan glow, a 400vh scroll-driven logo intro). It was rejected days later for inverting the reference doctrine: chrome played the hero while the work waited four viewports below, and the homepage described the label instead of showing the slate. The white catalog replaces it entirely; the dark system's ink (#0C0D10 family) survives only as the new text color's ancestry. Details: git history and ADR-02.

---

## 0. Design Read

> A catalog-first label site for industry contacts first and story-world fans second, with a white gallery-utilitarian language: CSS custom properties + Tailwind v4, Space Grotesk display, motion inside media only.

| Dial | Value | Rationale |
|---|---|---|
| DESIGN_VARIANCE | 6 | The catalog grid is deliberately calm; variance lives inside tile media |
| MOTION_INTENSITY | 4 | In-view reveals and hover scale only; chrome never animates |
| VISUAL_DENSITY | 2 | Gallery air; the slate needs room, not company |

## 1. Doctrine

1. The catalog is the argument. The label never describes itself on the homepage; self-description lives in exactly three places: `/studio`, the footer descriptor line, and metadata.
2. Every work is title + year + status. Nothing else on tiles; at most one functional verb.
3. Status vocabulary is industry-plain and supplies the only catalog headers (In Production, In Development; reserved: Coming {year}, Watch, Shop).
4. Microcopy is functional verbs (Notify Me, Subscribe, Send, Contact). Never decorative, never enthusiastic.
5. The newsletter is a first-class object with expectation-setting copy and a real capture path.
6. Objects interleave as peers of the films under the same tile doctrine.

## 2. Tokens (app/globals.css, ratios per ADR-01)

| Token | Value | Role | Contrast on paper |
|---|---|---|---|
| `--surface` | #FAFAF8 | Paper, page background | n/a |
| `--surface-raised` | #F4F4F2 | Bands | n/a |
| `--text` | #121417 | Ink: text, buttons, links | 17.66:1 |
| `--text-secondary` | rgba(18,20,23,0.72) | Body secondary | 7.25:1 |
| `--text-muted` | #5C6167 | Status lines, captions | 5.98:1 |
| `--accent` | #15718F | Focus rings, form focus, inline links | 5.30:1 |
| `--accent-media` | #3AAED8 | Brand cyan as light, NON-TEXT, media + logo only | 2.44:1 (confined) |
| `--error` | #A8231B | Form errors only | 6.88:1 |
| `--line` | rgba(18,20,23,0.14) | Hairlines | decorative |
| `--radius` | 0 | One system, all-sharp | n/a |

Locks: one accent system (brand cyan in two values); gold is logo-artwork only and has no token; no pure #000 or #FFF; theme locked light-only (documented single-theme override).

## 3. Typography (ADR-12)

| Role | Spec |
|---|---|
| Display | Space Grotesk 700, tracking -0.02em; featured title clamp(2.5rem, 7vw, 5.5rem); tile titles clamp(1.5rem, 3vw, 2.25rem) |
| Status headers | Space Grotesk 700, sentence case, clamp(1.125rem, 2vw, 1.375rem). Never uppercase-tracked: zero eyebrows site-wide |
| Body | Manrope 400/500, 1rem, line-height 1.6, max 65ch |
| Status lines | Manrope 500, 0.9375rem, `--text-muted` |

Fonts load via `next/font` with CSS variables. Casing is sentence case everywhere.

## 4. Motion (ADR-11)

Complete inventory: whileInView fade-rise (24px, 0.6s, ease [0.16, 1, 0.3, 1], once) on tiles and section content; hover scale 1.02 on tile media inside overflow-hidden bounds; mount fade on the hero text block. Chrome static. Everything gates on `useReducedMotion`; `scroll-behavior: smooth` sits behind `prefers-reduced-motion: no-preference`. Banned: window scroll listeners, marquees, parallax, scroll-driven choreography, custom cursors. Anything beyond this inventory needs a new ADR.

## 5. Architecture

- All visible strings: `lib/copy.ts` (typed `SiteCopy`). All slate content: `lib/slate.ts` (typed `SlateEntry`). Components never define strings (ADR-14).
- Adding a work is a data-only change (ADR-05). Status display resolution (kind-qualified released labels, year-composed coming labels, section order) lives entirely in `lib/slate.ts`.
- Placeholder media render as designed treatments keyed to `PLACEHOLDER-ASSETS.md` IDs (ADR-10): paper fields, ink logo geometry, hairline glyphs, brand cyan as light. Never gray boxes, stock, or fake renders.
- Routes: `/` (the slate), `/studio` (the one self-description), `/contact`, `/api/contact` (frozen). Nav: wordmark + Studio + Contact (ADR-07). Labs and Notes deferred (ADR-08).

## 6. Copy rules (Layer 3)

Banned in any visible string: underserved, deserve(s), overlooked, forgotten, rescue, revive; adapt/adaptation, "best expression", "the worlds we love", "partner with existing IP", world-first; any real IP or franchise name; em and en dashes (zero, anywhere); innovate, disrupt, transform, cutting-edge, elevate, seamless, unleash, next-gen, revolutionize; fake enthusiasm; deficit framing; internal codenames (Signal Reel, No.001, Meta-Drop, Track/Move vocabulary); "visual studies", "experiences", "playable". Voice: restrained label copy, short declaratives, momentum framing. The single contact CTA string is "Contact" (ADR-13).

## 7. Accessibility

WCAG 2.1 AA on white (token table above). Skip link; semantic landmarks; visible 2px `--accent` focus rings (offset 2px); 44px targets; labels above inputs with `aria-describedby` errors and live-region states; reduced-motion paths on every animation; `min-h-[100dvh]` never `h-screen`; alt text per the copy module; decorative treatment shapes `aria-hidden`.

## 8. Pre-Flight (run before any merge)

1. `npm run typecheck && npm run lint && npm run build` (offline: `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js`)
2. Ban scan: the Section 6 grep over `lib/copy.ts` and `lib/slate.ts` returns zero hits
3. Dash scan: `LC_ALL=en_US.UTF-8 grep -rnP "[\x{2013}\x{2014}]" app components lib` returns zero hits
4. One accent system, radius 0 everywhere, zero eyebrows, no layout-family repeats, tile purity (title + year + status + at most one verb)
5. Reduced-motion verified per animation; first viewport shows featured title/year/status at 1440x900 and 390x844 with zero scroll
