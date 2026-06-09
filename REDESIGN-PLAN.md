# Redesign Plan: Worlds Worth Entering
**Planned by:** Fable 5 (orchestrator) · Executed by: Sonnet agents · 10 June 2026
**Framework:** taste-skill v2 (design-taste-frontend), redesign mode: OVERHAUL (visuals) + content repositioning
**Canon authority:** Company Compass v2.0 (9 June 2026). Where this plan conflicts with old PRODUCT.md / DESIGN.md, the Compass wins.

---

## 0. Design Read (taste-skill §0.B)

> Reading this as: a creative-production-label site for two audiences (rights holders / industry contacts first, story-world fans second), with a cinematic-editorial dark language, leaning toward native CSS + Tailwind v4 + Space Grotesk display + restrained scroll-driven motion.

**Dials:** DESIGN_VARIANCE: 8 · MOTION_INTENSITY: 7 · VISUAL_DENSITY: 3

**Mode:** Redesign - Overhaul. New visual language + repositioned content. Preserve: brand logo, Space Grotesk + Manrope, the ScrollLogoReveal signature animation (adapted), contact/subscribe form field names, route slug `/` (new routes added).

---

## 1. Repositioning (THE reason for this redesign)

The site currently sells "premium physical products and playable experiences." Compass v2 supersedes this. New public (Layer 3) identity:

- **One-liner / descriptor:** "A creative label for story-rich worlds."
- **Hero promise:** "Worlds worth entering."
- **What we publicly do:** visual studies, films, and crafted physical artifacts for story-rich worlds. AI-assisted production under human direction. Hong Kong based. Founder & Executive Producer: Denis Tam.
- **Honest stage:** Signal Reel No.001 is in production (2026). NO fake portfolio, NO fake client logos, NO testimonials, NO products for sale, NO waitlist-with-urgency.

### HARD COPY BANS (Compass Public Copy Kit + DESIGN.md + taste-skill §9.G)
Never in any visible string:
- "underserved", "deserves better" / "deserve", "overlooked", "forgotten", "rescue", "revive"
- "adapt" / "adaptation", "best expression", "the worlds we love", "partner with existing IP", "world-first"
- Do NOT name any IP (no Vagabond, no Erlang Shen, no titles) anywhere
- Em-dashes (—) and en-dashes (–): ZERO instances in any visible string. Use periods, commas, colons.
- Buzzwords: innovate, disrupt, transform, cutting-edge, elevate, seamless, unleash, next-gen, revolutionize
- Fake enthusiasm: "We're thrilled", "Excited to share"
- No "coming soon" deficit framing. Momentum framing only ("In production", "Ships 2026").

---

## 2. Visual System

**Theme:** ONE locked dark theme. Cinematic screening-room. (Brand decision overriding dual-mode default: a film label site; the gradient logo is designed for dark; documented here per taste-skill §8.C.)

### Tokens (rework globals.css)
- `--surface`: #0C0D10 (ink, NOT pure black) · `--surface-raised`: #14161B · `--surface-high`: #1C1F26
- `--text`: #F2F0EC (warm off-white) · `--text-secondary`: rgba(242,240,236,0.68) · `--text-muted`: rgba(242,240,236,0.45)
- `--accent`: #3AAED8 (brand cyan, the ONE accent) · `--accent-soft`: #8FE1FF (glow only) · gold #D4A843 appears ONLY inside the logo asset and the hero gradient treatment, never as UI accent
- `--line`: rgba(242,240,236,0.10)
- Radius system: ONE scale. Interactive elements: 9999px (pill). Containers: 16px. Documented rule, applied everywhere.
- Shadows tinted to ink, never pure black on light (page is dark; use cyan-tinted glow sparingly on primary CTA hover only)

### Typography
- Display: Space Grotesk 700, tracking -0.02 to -0.03em (keep, brand-distinctive)
- Body: Manrope 400/500, max-w-[65ch]
- Load BOTH via `next/font/google` (remove any <link> Google Fonts). Mono: ui-monospace stack.
- Hero headline ≤ 2 lines, subtext ≤ 20 words.

### Motion (MOTION_INTENSITY 7)
- Keep + adapt ScrollLogoReveal: phases stay, but final background transition goes dark #0A0A0A → `--surface` #0C0D10 (NOT cream). Text colors in final hero phase become dark-theme tokens. Do not rewrite the animation math.
- Below fold: Motion (framer-motion) `whileInView` reveals (taste-skill §5.C pattern), spring physics, `useReducedMotion` honored everywhere.
- NO window scroll listeners. NO custom cursor (DELETE components/ui/CustomCursor.tsx and its usage). Max ONE marquee on the whole site (optional, home only).

---

## 3. IA Restructure (3 routes, lean and honest)

| Route | Purpose |
|---|---|
| `/` | Cinematic intro, label statement, what we make, now-in-production, contact CTA |
| `/studio` | Philosophy, how we work, the craft bar, AI stance, founder |
| `/contact` | Two paths: industry conversation (form) + follow the label (email subscribe) |

Navigation: minimal fixed top bar, ONE line, height 64px, logo left, links right (Studio, Contact). Mobile: same bar, links fit (only 2). DELETE OrbitalNav + FullScreenMenu. Footer: logo mark, one-line descriptor, social placeholders only if real URLs exist (none known: so just © 2026 Vixio Creatives Limited, Hong Kong + nav links + email link hello@vixiocreatives.com... NO invented social links).

Sections per page, layout families (taste-skill: no family repeats):

### Home
1. **ScrollLogoReveal hero** (adapted to dark end-state). Hero text after reveal: headline "Worlds worth entering.", subtext "Vixio is a creative label for story-rich worlds. Hong Kong based, craft obsessed." CTAs: primary "Start a conversation" (→/contact), secondary "Inside the studio" (→/studio). Max 4 text elements. No tagline strip.
2. **Label statement** (editorial manifesto, full-width type, no card): "A great story does not end when the screen goes dark. It waits for someone to build the next room. Vixio makes visual studies, films, and crafted objects that take story-rich worlds seriously." (3 sentences, large display setting, asymmetric left placement, generous space)
3. **What we make** (asymmetric 2+1 grid, NOT 3 equal cards; one cell carries the brand-gradient visual treatment for bento diversity): Visual studies / Films / Objects. Each: name + ≤25-word description. Public-safe wording.
4. **Now in production** (full-width dark-raised band, split layout): "Signal Reel No.001" + "A non-commercial visual study. In production, 2026." + one labeled placeholder slot for a future still (`<!-- TODO: reel still, 16:9, publishes after release -->` rendered as a quiet abstract gradient block with the caption "Stills publish after release.").
5. **The bar** (short principle block, different family: stacked vertical, numbered NO, plain headlines): "Craft over speed. Story over spectacle. The work ships when it clears the bar, or it does not ship."
6. **Contact CTA** (centered, the one allowed centered moment): "Start a conversation." + button. (Same contact intent label as hero primary: "Start a conversation" used for BOTH per no-duplicate-intent rule: same label everywhere.)

Section count: 6 → max 2 eyebrows total on home. Use ZERO eyebrows; headlines carry it.

### Studio
1. Page hero (split, left-aligned display headline): "The studio." + one paragraph positioning.
2. How we work (3 principles, vertical stack with hairline rhythm, ≤5 items so list form OK): content leads, the craft bar, small by design.
3. AI stance (full-width statement): "AI is a tool in our pipeline, never the director. Every frame answers to a human eye." (credibility-critical)
4. Founder (split layout, no photo available: typographic treatment + role): Denis Tam, Founder & Executive Producer, Hong Kong. 2-3 sentences, no bio padding.

### Contact
1. Page hero: "Two doors." (or "Start a conversation.") + one line.
2. Split: **Industry** (form: name, email, message; PRESERVE existing field names + API routes app/api/contact) and **Follow** (email subscribe, preserve subscribe flow if present; otherwise reuse contact API with type field as-is. DO NOT rename form fields.)
3. Direct email line: hello@vixiocreatives.com (mailto link).

Check actual form/API field names in ContactSection.tsx + app/api/contact/route.ts before building; reuse them exactly.

---

## 4. Tech Cleanup

- REMOVE: Mantine (@mantine/core, @mantine/hooks, MantineClientProvider, mantine-theme.ts, mantine CSS import). Forms become native styled inputs (label above input, visible focus ring 2px accent, inline errors below input).
- REMOVE: lucide-react. ADD: @phosphor-icons/react (only where icons genuinely needed; this design needs almost none: maybe ArrowRight on CTAs, strokeWidth consistent).
- REMOVE: CustomCursor, TiltCard if unused after redesign, FloatingInput (replaced), OrbitalNav, FullScreenMenu, all old home sections being replaced.
- KEEP: framer-motion (motion lib), supabase + resend wiring, next.config.ts, static export config as-is.
- Fonts via next/font/google (Space_Grotesk, Manrope) with display:swap, CSS vars.
- Metadata: per-page title/description. Title template "Vixio Creatives". Description: "A creative label for story-rich worlds. Hong Kong." OG tags. NO fake OG image reference; generate a simple og strategy: reuse logo PNG copied to public/ as og image (public/vixio-logo.svg exists; copy Branding PNG to public/og.png... if file unavailable in repo, skip og:image).
- Accessibility: WCAG AA contrast on dark (verify all text tokens ≥ 4.5:1 on #0C0D10: #F2F0EC passes, secondary 0.68 alpha passes large, verify), focus-visible states, reduced-motion fallbacks, semantic landmarks, alt text.
- `min-h-[100dvh]` never h-screen. Mobile collapse explicit per section.

## 5. Execution Phases (each = one commit, conventional messages)

1. `chore: strip product-era UI shell (mantine, custom cursor, orbital nav)` + token/font/layout foundation, new Nav + Footer
2. `feat: home page, repositioned to creative label canon` (hero adaptation + 5 sections)
3. `feat: studio and contact pages`
4. `docs: regenerate DESIGN.md + PRODUCT alignment` (orchestrator does this)
5. `fix:` review findings (after Fable 5 review)

Verify each phase: `npm run typecheck` + `npm run lint` + `npm run build` must pass before commit.

## 6. Pre-Flight (taste-skill §14) deltas to watch
- Zero em/en-dashes in visible strings (grep check: `grep -rn "—\|–" app components`)
- Eyebrow count ≤ 2 site-wide (target 0)
- One accent (cyan) everywhere; gold only in logo/hero gradient
- One radius system (pill interactive / 16px containers)
- No duplicate CTA intent: contact intent label is exactly "Start a conversation" everywhere
- Quotes: none (no testimonials, honest stage)
- No section-numbering eyebrows, no scroll cues, no locale strips (Hong Kong appears ONLY in footer line and studio founder block as factual address-level info, not atmospheric strip)
- Copy self-audit against §1 ban list before every commit
