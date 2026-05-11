# Design System: Vixio Creatives Website
**Register:** Brand
**Personality:** Craft. Tension. Play.

---

## Configuration

| Dial | Level | Rationale |
|------|-------|-----------|
| **Creativity** | `9` | A game-design studio's site should feel interactive and surprising. Not generic, not chaotic. |
| **Density** | `4` | Gallery-airy. Let the work breathe. Content earns its space through specificity. |
| **Variance** | `8` | No two sections should feel identical. Asymmetry signals intentionality. |
| **Motion Intent** | `8` | The site is playable. Physics-based responses, scroll-driven animation, spatial relationships. Motion is a design material, not decoration. |

---

## 1. Visual Theme & Atmosphere

Warm, tactile, cinematic. The atmosphere is a lit workshop, not a dark screening room and not a sterile agency grid. Cream surfaces with moments of dark contrast. The site feels physical: elements respond to interaction with weight and friction, like objects on a table. Tension lives in the contrast between warm analog textures and precise digital craft.

**Reference DNA:**
- **Tearable Cloth** — physics-driven interaction where emergent behavior IS the aesthetic. Zero chrome.
- **makemepulse "Nomadic Tribe"** — illustrated world-building where every interaction serves a narrative, unusual navigation, coherence of style + tech + story
- **Moment Factory** — dark-mode confidence, cinematic full-bleed imagery, work speaks for itself, restrained motion
- **Playable patterns** — mouse/scroll as gameplay input, progression structures, audio-visual feedback that rewards exploration

**Anti-references (banned aesthetics):**
- Generic agency grid (logos, "we're passionate about...")
- Escape room dark/neon/countdown
- Corporate consulting blue-gradient/stock-photo

---

## 2. Color Palette & Roles

Warm cream base with cyan energy and gold accent. The palette is already defined in CSS custom properties and must not change.

| Token | Value | Role |
|-------|-------|------|
| `--surface` | #FAFAF8 | Primary background. Warm cream, never clinical white |
| `--surface-container-low` | #F5F3F0 | Card fills, secondary surfaces |
| `--surface-container-high` | #EDEAE6 | Elevated containers, hover states |
| `--surface-container-highest` | #E5E2DD | Active states, strong contrast |
| `--primary` | #3AAED8 | Primary accent. Cyan energy. CTAs, links, active states |
| `--primary-soft` | #8FE1FF | Glow effects, light accents |
| `--primary-container` | #E8F7FC | Hover backgrounds, selected states |
| `--tertiary` | #D4A843 | Gold accent. Sparingly. Badges, highlights, premium moments |
| `--tertiary-container` | #FDF5E6 | Gold hover backgrounds |
| `--on-surface` | #1A1A1A | Primary text. Near-black, never pure black |
| `--on-surface-variant` | #555555 | Secondary text, body copy |
| `--ink` | #0E0F12 | Dark sections, capability tiles, cinematic moments |
| `--ink-soft` | #1E2128 | Dark section secondary |

**Brand gradient:** `linear-gradient(45deg, #3AAED8, #D4A843)` — use for the primary CTA button and select accent moments. Never for large surfaces.

### Banned Colors
- Pure black (#000000) — always use --ink or --on-surface
- Neon green, neon purple, or any escape-room palette
- Blue corporate gradients
- Oversaturated accents above 80%

---

## 3. Typography Rules

| Role | Family | Weight | Size | Tracking | Leading |
|------|--------|--------|------|----------|---------|
| Display XL | Space Grotesk | 700 | clamp(3.5rem, 8vw, 7.5rem) | -0.03em | 0.94 |
| Display LG | Space Grotesk | 700 | 3.5rem (2.5rem mobile) | -0.02em | 1.1 |
| Display MD | Space Grotesk | 700 | 2.75rem (2rem mobile) | -0.015em | 1.15 |
| Headline LG | Space Grotesk | 600 | 2rem (1.625rem mobile) | -0.01em | 1.2 |
| Headline MD | Space Grotesk | 600 | 1.5rem | -0.005em | 1.25 |
| Body LG | Manrope | 400 | 1rem | 0 | 1.6 |
| Body MD | Manrope | 400 | 0.9375rem | 0 | 1.6 |
| Label MD | Space Grotesk | 500 | 0.8125rem | 0.1em | 1.4 (uppercase) |
| Mono tag | System mono | 500 | 0.6875rem | 0.18em | uppercase |

### Banned Fonts
- Inter — not distinctive enough for brand register
- Generic serifs (Times, Georgia, Garamond)
- Any font not Space Grotesk or Manrope in production code

---

## 4. Component Stylings

**Buttons:**
- Primary (GradientButton): Brand gradient fill, white text, rounded-full. Hover: translateY(-1px) scale(1.02), cyan glow shadow. No outer glow at rest.
- Secondary (GhostButton): Transparent with subtle border. Hover: primary-container fill, inset border.
- Touch targets: minimum 44px. Full-width on mobile.

**Cards/Containers:**
- Rounded corners (--radius-lg to --radius-xl). Surface-container-low fill. 
- Hover: translateY(-3px) scale(1.01), ambient shadow deepens.
- Dark variant (cap-tile): --ink background, flips to --primary on hover.

**Section Labels:**
- Mono-tag style: uppercase, tracked, small, --on-surface-variant.
- Used above section headlines to categorize content ("THE PROBLEM", "WHO THIS IS FOR").

**Navigation (OrbitalNav):**
- Floating pill, not sticky bar. Minimal chrome.
- Full-screen menu overlay for all pages.

**Forms:**
- Label above input. No floating labels.
- Focus: 2px primary outline, 2px offset.
- Error: inline, contextual.

---

## 5. Hero Section (ScrollLogoReveal)

**PRESERVE EXACTLY.** The ScrollLogoReveal is a 424-line cinematic scroll-driven animation with 6 phases:
1. Emergence (0.00-0.15): Logo fades in, deblurs from dark
2. Peak glow (0.15-0.40): Brightness peaks, cyan glow + anamorphic streak
3. Effects fade (0.40-0.50): All effects dissolve
4. Bg transition (0.48-0.58): Dark (#0A0A0A) → cream (#FAFAF8)
5. Logo pull-back (0.70-0.85): Logo scales down + fades (camera pulls back)
6. Hero entrance (0.85-1.00): Headline + body + CTAs stagger in

**Required updates to hero content (not animation):**
- Headline: "Game-designed experiences for physical spaces."
- Body: "Cooperative game experiences that turn visitors into players and spaces into stories. 4-6 players. 60-90 minutes. Your venue."
- CTAs: "See the Experience" (primary) + "Bring This to Your Venue" (secondary)
- Tagline above/below logo: "Stories Across Worlds"

The animation code, timing, and physics must not change. Only the text content and CTA labels.

---

## 6. Layout Principles

- **Grid-first:** CSS Grid for structural layouts. No flexbox percentage math.
- **Containment:** max-width 1200px centered, generous padding (1rem mobile, 2rem tablet, 4rem desktop).
- **Full-height sections:** min-height: 100dvh where appropriate. Never height: 100vh.
- **Asymmetric layouts:** Avoid centered-everything. Use split layouts, offset grids, asymmetric whitespace.
- **No 3-equal-cards:** Use 2-column zig-zag, bento grids, or horizontal arrangements.
- **Section rhythm:** Alternate between cream sections and dark (--ink) sections for contrast.
- **Dual-path content:** Players and venue operators see different content blocks but share layout patterns and design quality.

---

## 7. Responsive Rules

- **Mobile-first collapse (<768px):** Single column. width: 100%, padding: 1rem.
- **No horizontal scroll.** This is a critical failure.
- **Typography scales** via clamp() — body never below 14px.
- **Touch targets:** 44px minimum. Buttons full-width on mobile.
- **Testing viewports:** 375px, 390px, 768px, 1024px, 1440px.
- **ScrollLogoReveal:** Already responsive (uses vw units for glow, CSS var for logo width).

---

## 8. Motion & Interaction

The site is playable. Motion is a design material.

**Physics-first:**
- Spring-based transitions via Framer Motion. No linear easing.
- Scroll-driven animations (ScrollLogoReveal pattern) for key moments.
- Elements respond to interaction with weight and momentum.

**Scroll behaviors:**
- ScrollReveal component for below-fold entrance animations (CSS-based, no JS = visible).
- Staggered orchestration: lists mount with cascaded delays.
- Parallax on select hero/section images.

**Interactive moments (aspirational, per design principles):**
- Physics-based hover responses on capability tiles
- Cursor-reactive elements that demonstrate cooperative mechanics
- Micro-interactions that reward exploration

**Performance rules:**
- Animate ONLY transform and opacity. Never layout properties.
- Grain/texture on fixed pseudo-elements, pointer-events: none.
- 60fps minimum. Heavy animations isolated in leaf components.
- prefers-reduced-motion: all animations disabled, content visible.

---

## 9. Page Structure (from copy deck)

### Homepage
1. ScrollLogoReveal (cinematic intro → hero)
2. The Problem ("Events end. Systems compound.")
3. Who This Is For (Players | Venue Operators — two-column)
4. What We Do (cooperative mechanics, cinematic direction, measurable outcomes)
5. How It Works B2B (3-step: Tell us → We design → Deploy and measure)
6. The Approach (Build → Prove → Scale)
7. The Structural Gap (inline narrative, not comparison table)
8. Follow the Build (journal/process link)
9. Final CTA ("Play it. Or bring it to your venue.")

### Services
- Page header → 5 service cards (What it is / What it delivers / Best for)
- CTA section

### About
- Studio → Director → 6 Mechanics table → Building in Public → CTA

### Experiences
- "Play it." hero → Debut Experience details → What to Expect → What it is/isn't → CTA

### Contact
- "Two paths. Pick yours." → Players form | Venue Operators form

---

## 10. Anti-Patterns (Banned)

- No emojis in UI
- No pure black (#000000)
- No escape-room aesthetics (dark + neon + countdown)
- No stock photography
- No "Scroll to explore" or scroll arrows (let content pull)
- No buzzwords: "innovate," "disrupt," "transform," "cutting-edge"
- No deficit framing: "no portfolio yet," "coming soon" without momentum
- No em dashes in copy (use commas, colons, semicolons, periods)
- No fake enthusiasm: "Excited to share," "We're thrilled"
- No Inter font
- No circular loading spinners
- No overlapping text on images
- No 3-equal-card layouts
- No h-screen (use min-h-[100dvh])

---

## 11. Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + CSS custom properties (globals.css)
- **Components:** Mantine v8 (for forms, overlays)
- **Animation:** Framer Motion v12
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Space Grotesk + Manrope)
- **Testing:** Playwright

All design tokens live in globals.css as CSS custom properties. Tailwind is used for utility classes alongside the custom property system. Mantine provides form inputs and overlay components with light customization.
