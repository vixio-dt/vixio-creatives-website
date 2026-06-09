# Design System: Vixio Creatives Website
**Register:** Brand, Layer 3 (public-safe) per Company Compass v2.0
**Identity:** A creative label for story-rich worlds. Hero promise: Worlds worth entering.
**Framework:** taste-skill v2 (design-taste-frontend). Redesigned 10 June 2026.

---

## 0. Design Read

> A creative-production-label site for rights holders and industry contacts first, story-world fans second, with a cinematic-editorial dark language: native CSS + Tailwind v4, Space Grotesk display, restrained scroll-driven motion.

| Dial | Value | Rationale |
|---|---|---|
| DESIGN_VARIANCE | 8 | No two sections share a layout family. Asymmetry signals intent. |
| MOTION_INTENSITY | 7 | The ScrollLogoReveal is the signature moment; everything else is restrained whileInView reveals. |
| VISUAL_DENSITY | 3 | Screening-room airy. Few things, held to a high bar, with space around them. |

---

## 1. Visual Theme

Dark cinematic. One locked theme, no light mode, no section inversions. The atmosphere is a screening room before the picture starts: near-black warm ink, off-white type, a single cyan presence taken from the logo. Gold exists only inside the logo and the one brand-gradient treatment. The site must feel like a label that makes films, not an agency that talks about them.

**Anti-references (banned):** generic agency grid, AI-purple gradients, stock photography, AI-generated mockup imagery, escape-room neon, corporate blue gradients, fake portfolios or invented social proof.

## 2. Tokens (app/globals.css)

| Token | Value | Role |
|---|---|---|
| `--surface` | #0C0D10 | Page background. Warm ink, never pure black |
| `--surface-raised` | #14161B | Alternating bands, cells |
| `--surface-high` | #1C1F26 | Hover and elevated states |
| `--text` | #F2F0EC | Primary text, warm off-white |
| `--text-secondary` | rgba(242,240,236,.68) | Body copy |
| `--text-muted` | rgba(242,240,236,.45) | Captions, footer meta |
| `--accent` | #3AAED8 | THE one accent. CTAs, focus rings, links, glow |
| `--accent-soft` | #8FE1FF | Glow effects only |
| `--gold` | #D4A843 | Logo and brand-gradient treatment ONLY. Never UI |
| `--line` | rgba(242,240,236,.10) | Hairlines |
| `--vixio-gradient` | linear-gradient(45deg, #3AAED8, #D4A843) | One large-cell treatment per page max |

**Color locks:** one accent (cyan) across every section. Gold never appears as a UI color. No pure #000000 or #FFFFFF.

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Display | Space Grotesk 700 | tracking -0.02 to -0.03em, headlines ≤ 8 words, hero ≤ 2 lines |
| Body | Manrope 400/500 | max-width 65ch, 1.6 leading |
| Mono | system stack | code-level only, not decorative |

Loaded via `next/font/google` with CSS variables (`--font-space-grotesk`, `--font-manrope`). Banned: Inter, decorative serifs, any third family.

## 4. Radius and Shape

ONE system: interactive elements are pills (9999px), containers are 16px. No exceptions, no mixed scales.

## 5. Motion

- Signature: ScrollLogoReveal (400vh scroll-driven logo cinematic, 6 phases, ends on `--surface` dark). PRESERVE the animation math; only copy and token colors may change.
- Everything else: framer-motion `whileInView`, `once: true`, spring-flavored ease `[0.16, 1, 0.3, 1]`, stagger ≤ 0.2s.
- `useReducedMotion` honored in every animated component; ScrollLogoReveal collapses to two static sections.
- Banned: window scroll listeners, custom cursors, infinite loops on informational content, more than one marquee per page (currently zero), animation without a one-sentence justification.

## 6. Layout

- Max width 1280px, padding 1.5rem mobile scaling up.
- `min-h-[100dvh]`, never `h-screen`.
- One layout family per page section, no repeats: editorial statement, asymmetric 2+1 grid, split band, stacked statements, centered CTA (one centered moment per page max).
- No 3-equal-cards. No split-headers. Zero eyebrows site-wide (headlines carry hierarchy).
- Every multi-column grid collapses to one column below 768px with class-based media queries.

## 7. Components

- **Primary button:** cyan fill, ink text, pill, 44px min target, hover translateY(-1px) + cyan-tinted shadow, visible focus ring.
- **Secondary button:** 1px `--line` border pill, `--text` label.
- **Forms:** native inputs, label above input, 2px accent focus-visible ring with offset, inline error below input, loading = disabled + "Sending...", no spinners. Payload keys for /api/contact are frozen: `{type:'creator', name, portfolio, idea, contact}` and `{type:'buyer', contact}`.
- **Nav:** fixed translucent bar, 64px, one line, wordmark left (vixio-wordmark.svg), Studio + Contact right.
- **Footer:** wordmark, descriptor line, nav links, mailto, copyright. No invented social links.

## 8. IA

| Route | Job |
|---|---|
| `/` | Reveal, label statement, what we make, now in production, the bar, conversation CTA |
| `/studio` | Positioning, how we work, AI stance, founder |
| `/contact` | Industry form + follow-by-email + direct mailto |

CTA intent discipline: the contact intent is labeled exactly "Start a conversation" everywhere it appears.

## 9. Copy Rules (Layer 3, Compass v2 Public Copy Kit)

Banned in any visible string:
- underserved, deserve/deserves, overlooked, forgotten, rescue, revive
- adapt/adaptation, "best expression", "the worlds we love", "partner with existing IP", world-first
- Any IP title or franchise name
- Em-dash and en-dash characters. Zero. Use periods, commas, colons.
- innovate, disrupt, transform, cutting-edge, elevate, seamless, unleash, next-gen, revolutionize
- Fake enthusiasm ("We're thrilled"), deficit framing ("no portfolio yet", bare "coming soon")

Voice: restrained label copy. Short declaratives. Specifics over adjectives. Honest about stage with momentum framing ("In production, 2026").

## 10. Imagery

- The logo system (square lockup for hero, wordmark crop for chrome) is the primary visual.
- No stock photos, no AI-mockup renders, no div-built fake screenshots.
- Future reel stills replace the labeled placeholder in NowInProduction after release; until then the slot stays an abstract dark gradient with the caption "Stills publish after release."
- OG: public/og.png (1200x630, wordmark on ink with cyan glow).

## 11. Accessibility

WCAG 2.1 AA. Skip link, semantic landmarks, focus-visible on all interactive elements, 44px touch targets, contrast verified on ink surfaces, reduced-motion fallbacks everywhere, alt text on all images.

## 12. Pre-Flight (run before any merge)

1. `npm run typecheck && npm run lint && npm run build`
2. `grep -rn "—|–" app components --include=*.tsx -E` returns nothing in visible strings
3. Banned-word grep (section 9 list) returns nothing in visible strings
4. One accent, one radius system, zero eyebrows, no layout-family repeats
5. Mobile collapse verified per section, reduced-motion verified per animation
