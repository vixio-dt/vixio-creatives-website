# Restructure Plan V2: White Catalog

**Planned by:** Fable 5 (orchestrator, design lead, brand guardian) · Executed by Sonnet subagents · 10 June 2026
**Canon authority:** Company Compass v2.0 (9 June 2026) wins all conflicts, then the restructure brief, then taste-skill doctrine, then repo docs.
**Decisions:** CONTEXT.md (glossary) and docs/adr/0001 through 0014. This plan implements those decisions; it does not reopen them.
**Design read (taste-skill 0.B):** Reading this as: a catalog-first label site for industry contacts first and story-world fans second, with a white gallery-utilitarian language, leaning toward CSS custom properties + Tailwind v4 + Space Grotesk display + restrained in-media motion.
**Dials:** DESIGN_VARIANCE 6 · MOTION_INTENSITY 4 · VISUAL_DENSITY 2 (design-read override of the redesign-overhaul default, documented in ADR-12). Theme locked light-only per taste-skill single-theme override clause.

---

## 1. Route map

| Route | Job | Change |
|---|---|---|
| `/` | The slate. Featured viewport, status sections, newsletter, footer | Rebuild |
| `/studio` | The only self-description above the footer | Rebuild |
| `/contact` | Industry form (frozen creator payload) + direct email | Rework |
| `/api/contact` | Frozen contract | UNTOUCHED |
| `app/not-found.tsx` | 404 | New |
| `app/icon.svg` | Favicon (META-FAVICON-01) | New |

No new content routes. Films/Objects/Notes have no routes at current N (ADR-07). Labs deferred (ADR-08).

## 2. Per-page section maps

### Home `/`
1. **FeaturedWork** (first viewport, full bleed, the slate lead): HOME-HERO-01 treatment behind/beside an ink text block of exactly 4 text elements: promise line (small), h1 title, status-year line, one verb. Fits 1440x900 and 390x844 with zero scroll to title+year+status.
2. **SlateSection "In Development"**: status header + object tile (HOME-SLATE-TILE-02 treatment). Sections derive from `lib/slate.ts` grouping; empty statuses render nothing.
3. **Newsletter** (`id="newsletter"`): h2 + expectation line + email form (frozen buyer payload, ADR-09). Real success/error only.
4. **SiteFooter** (chrome): sitemap links, descriptor, legal line.

Layout families: full-bleed hero / tile grid section / centered narrow form / footer. No family repeats. Zero eyebrows (status headers are sentence-case headers, ADR-12).

### Studio `/studio`
1. **Lead**: h1 "Studio" + descriptor as display statement.
2. **Facts**: four short declaratives, stacked with hairlines (company, what it makes, objects, honest stage).
3. **AI stance**: single display statement (h2-led for outline continuity).
4. **Founder**: name, role, one bio line. Typographic (STUDIO-FOUNDER-01 stays imageless).
5. **Contact CTA**: one "Contact" button (ADR-13).

### Contact `/contact`
1. **Lead**: h1 "Contact" + one intro line.
2. **Industry form**: frozen creator payload, labels above inputs, inline validation, real states.
3. **Direct line**: "Or write to hello@vixiocreatives.com".

### 404
Heading, one body line, one link home.

## 3. THE COPY DECK (complete, final, verbatim)

Subagents implement these strings exactly as written, via `lib/copy.ts` and `lib/slate.ts` only. No component defines a visible string. Apostrophes are typographic (U+2019). Zero em/en dashes anywhere.

### 3.1 lib/copy.ts contents (every string on the site)

```ts
export interface SiteCopy { /* shape mirrors the object below, typed exactly */ }

export const copy = {
  meta: {
    siteName: 'Vixio Creatives',
    titleTemplate: '%s · Vixio Creatives',
    home: {
      title: 'Vixio Creatives',
      description: 'A creative label for story-rich worlds. Hong Kong. First release in production for 2026.',
    },
    studio: {
      title: 'Studio',
      description: 'Vixio Creatives Limited, Hong Kong. A creative label for story-rich worlds. Founded by Denis Tam.',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Vixio Creatives. For studios, rights holders, and collaborators.',
    },
    notFound: { title: 'Page not found' },
    ogImageAlt: 'Vixio Creatives wordmark',
  },
  nav: {
    ariaLabel: 'Main navigation',
    homeAriaLabel: 'Vixio Creatives, home',
    logoAlt: 'Vixio Creatives',
    studio: 'Studio',
    contact: 'Contact',
  },
  skipLink: 'Skip to main content',
  hero: {
    promise: 'Worlds worth entering.',
  },
  statusLabels: {
    'in-production': 'In Production',
    'in-development': 'In Development',
    coming: 'Coming',          // rendered as `Coming ${year}`
    'released-film': 'Watch',  // reserved, confirmed at first release
    'released-object': 'Shop', // reserved, confirmed at first release
  },
  newsletter: {
    heading: 'Releases, by email.',
    body: 'One email when something ships: a film, an edition, a screening date. A few times a year.',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    submit: 'Subscribe',
    submitting: 'Subscribing...',
    success: 'You’re on the list.',
    error: 'Something went wrong. Try again, or write to hello@vixiocreatives.com.',
  },
  footer: {
    ariaLabel: 'Footer navigation',
    homeAriaLabel: 'Vixio Creatives, home',
    logoAlt: 'Vixio Creatives',
    studio: 'Studio',
    contact: 'Contact',
    newsletter: 'Newsletter',
    email: 'hello@vixiocreatives.com',
    descriptor: 'A creative label for story-rich worlds.',
    legal: '© 2026 Vixio Creatives Limited, Hong Kong',
  },
  studio: {
    heading: 'Studio',
    lead: 'A creative label for story-rich worlds.',
    facts: [
      'Vixio Creatives Limited, Hong Kong.',
      'Vixio produces short films and films, AI-assisted under human direction.',
      'Alongside the films: physical objects in gallery-grade small runs.',
      'The first release is in production for 2026.',
    ],
    aiStanceHeading: 'On AI',
    aiStance: 'AI is a tool in our pipeline, never the director. Every frame answers to a human eye.',
    founder: {
      name: 'Denis Tam',
      role: 'Founder & Executive Producer',
      bio: 'Denis leads every production at Vixio. Based in Hong Kong, working with collaborators across animation, film, and physical craft.',
    },
    cta: 'Contact',
  },
  contact: {
    heading: 'Contact',
    intro: 'For studios, rights holders, and collaborators.',
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      portfolioLabel: 'Link to your work',
      portfolioOptional: '(optional)',
      ideaLabel: 'What are you working on?',
      submit: 'Send',
      submitting: 'Sending...',
      success: 'Received. We reply within a few days.',
      error: 'Something went wrong. Write to hello@vixiocreatives.com directly.',
      requiredError: 'Required.',
      emailInvalidError: 'Enter a valid email.',
    },
    directPrefix: 'Or write to',
    directEmail: 'hello@vixiocreatives.com',
  },
  notFound: {
    heading: 'Page not found.',
    body: 'Nothing lives at this address.',
    link: 'Back to the homepage',
  },
} as const;
```

Notes binding the implementation:
- `’` is the typographic apostrophe; `©` is the copyright sign. "Subscribing..." and "Sending..." use three ASCII periods.
- The single contact CTA string is `Contact` (ADR-13): nav, footer, studio CTA, contact h1.
- Empty-state strings: none exist by design; status sections with no works render no markup (ADR-03/05).

### 3.2 lib/slate.ts contents (initial slate data, complete)

```ts
export const slate: SlateEntry[] = [
  {
    slug: 'untitled-vixio-film',
    title: 'Untitled Vixio Film',
    year: 2026,
    status: 'in-production',
    kind: 'film',
    featured: true,
    media: { hero: 'HOME-HERO-01', tile: 'HOME-SLATE-TILE-01' },
    action: { label: 'Notify Me', href: '#newsletter' },
  },
  {
    slug: 'untitled-edition',
    title: 'Untitled Edition',
    status: 'in-development',
    kind: 'object',
    media: { tile: 'HOME-SLATE-TILE-02' },
  },
];
```

Type shape per ADR-05. Status-year rendering rule: tile status line is `${statusLabel}, ${year}` when a year exists ("In Production, 2026"), else `${statusLabel}` ("In Development").

## 4. Component inventory

### Build (new)
| Component | Job |
|---|---|
| `lib/copy.ts` | All visible strings (deck 3.1), typed `SiteCopy` |
| `lib/slate.ts` | Slate types + data (deck 3.2), status grouping helper |
| `components/ui/Button.tsx` | Sharp ink button, primary (ink fill) + secondary (ink border), link or button, 44px min, focus ring |
| `components/slate/FeaturedWork.tsx` | First viewport, full bleed, 4 text elements, HOME-HERO-01 treatment |
| `components/slate/SlateSection.tsx` | Status header + tile grid, derived from data |
| `components/slate/SlateTile.tsx` | title + status-year + at most one verb; treatment by PlaceholderId |
| `components/slate/PlaceholderTreatment.tsx` | The designed interims keyed by PlaceholderId (ADR-10) |
| `components/home/Newsletter.tsx` | First-class newsletter object, frozen buyer payload |
| `app/not-found.tsx` | 404 |
| `app/icon.svg` | Triangle mark favicon, brand gradient |

### Rework (keep file, replace internals)
| Component | Change |
|---|---|
| `app/globals.css` | White token system (ADR-01/12 tables below), remove legacy ink tokens, gate smooth scroll behind no-preference, sharp radius, white form/button/nav/footer styles |
| `app/layout.tsx` | Metadata from copy module, fonts kept, skip link kept |
| `app/page.tsx` | Compose FeaturedWork + SlateSections + Newsletter from data |
| `app/studio/page.tsx` + `components/studio/*` | Rebuild to section map, copy module |
| `app/contact/page.tsx` + `components/contact/ContactForms.tsx` | Creator form only, copy module, label-above-input, aria-describedby errors, role=status live regions; ContactDirect folded into page or kept minimal |
| `components/layout/SiteNav.tsx` | White bar, token background (no hardcoded rgba), Studio + Contact |
| `components/layout/SiteFooter.tsx` | Sitemap + descriptor + legal + Newsletter link |

### Retire (delete, with all imports)
| Component | Reason |
|---|---|
| `components/home/ScrollLogoReveal.tsx` | ADR-02 verdict: retired. Dead code removed, including the legacy `--ink*` and `--logo-width` tokens that exist only for it |
| `components/home/LabelStatement.tsx` | Self-description on the homepage (doctrine 1); contains banned "visual studies" |
| `components/home/WhatWeMake.tsx` | Category explainer cards; banned "Visual studies" tile |
| `components/home/NowInProduction.tsx` | Banned codename heading; replaced by the slate |
| `components/home/TheBar.tsx` | Manifesto on the homepage (doctrine 1) |
| `components/home/HomeCTA.tsx` | Contact CTA section retired (ADR-06) |
| `components/contact/ContactHero.tsx` | Folded into contact page lead |
| `components/ui/SectionLabel.tsx` | Dead: references token vocabulary that does not exist |
| `components/ui/GradientButton.tsx`, `components/ui/GhostButton.tsx` | Replaced by Button.tsx (pill system retired, ADR-12) |
| `components/ui/ScrollReveal.tsx` | Replaced by whileInView; delete if unreferenced after rebuild (verify) |

### Untouched (frozen)
`app/api/contact/route.ts`, `lib/supabase.ts`, payload field names, `public/vixio-logo.svg`, `public/vixio-wordmark.svg`, `font-mocks.js`.

## 5. Placeholder map by ID (ADR-10)

| Slot | Where | Interim treatment |
|---|---|---|
| HOME-HERO-01 | FeaturedWork | Paper field, one oversized cropped ink triangle (logo geometry) bleeding off-frame, optional single cyan light gradient (non-text), text block in ink on paper |
| HOME-SLATE-TILE-01 | Film tile (reserved while film is featured) | Ink-on-paper typographic tile, hairline border |
| HOME-SLATE-TILE-02 | Object tile | Paper tile, hairline plinth glyph (simple geometric line drawing), then standard title/status lines |
| HOME-SLATE-TILE-03 | Labs tile | NOT RENDERED (ADR-08) |
| HOME-NOTES-CARD-01 | Notes | NOT RENDERED (ADR-07) |
| STUDIO-HERO-01 / STUDIO-FOUNDER-01 / STUDIO-PROCESS-01 | Studio | Typographic, no imagery |
| CONTACT-NONE | Contact | Typographic by design |
| META-OG-01 | public/og.png | Regenerate white: wordmark on paper. If offline generation fails during Phase 4, keep current file and list slot as pending in the closing report |
| META-FAVICON-01 | app/icon.svg | Triangle mark, brand gradient, vector only; raster sizes pending |
| SLATE-DETAIL-* | Future detail pages | Not built at current N |

## 6. Token table (ADR-01, computed ratios)

```css
:root {
  --surface: #FAFAF8;             /* paper */
  --surface-raised: #F4F4F2;      /* bands, cells */
  --text: #121417;                /* ink: 17.66:1 on paper */
  --text-secondary: rgba(18, 20, 23, 0.72);  /* 7.25:1 effective */
  --text-muted: #5C6167;          /* 5.98:1, safe at small sizes */
  --accent: #15718F;              /* darkened brand cyan: 5.30:1 paper, 5.54:1 white */
  --accent-media: #3AAED8;        /* true brand cyan: NON-TEXT, inside media + logo only */
  --error: #A8231B;               /* 6.88:1 */
  --line: rgba(18, 20, 23, 0.14); /* hairlines, decorative */
  --font-display / --font-body: kept (Space Grotesk / Manrope via next/font);
  --radius: 0;                    /* one system, all-sharp (ADR-12) */
}
```

Removed tokens: the entire dark set, `--gold`, `--vixio-gradient`, `--accent-soft`, legacy `--ink*` family, `--logo-width`, pill radius aliases, Material-style `--primary/--on-surface-variant` strays. `--spacing-*` scale kept. Buttons: ink fill + paper text (17.66:1) primary; 1px ink border secondary. Focus: 2px solid `--accent`, offset 2px (5.30:1 non-text, needs 3:1). `.vx-error` recolored to `--error`.

## 7. Motion spec (ADR-11)

whileInView fade-rise 24px / 0.6s / ease [0.16, 1, 0.3, 1] / once, on tiles and section content; hover scale 1.02 on tile media inside overflow-hidden bounds; mount fade on hero text block. Chrome static. All gated on `useReducedMotion()`; `scroll-behavior: smooth` moves behind `@media (prefers-reduced-motion: no-preference)`. No other motion. No window scroll listeners. framer-motion imports stay on the `framer-motion` package (consistent with installed v12; no dependency changes).

## 8. Accessibility checklist (gate for every slice)

- [ ] All text tokens per Section 6 table (AA minimum, AAA for body ink)
- [ ] Focus visible on every interactive element (2px accent ring, offset 2px)
- [ ] 44px minimum touch targets (buttons, inputs, nav links)
- [ ] prefers-reduced-motion collapses every animation; smooth scroll gated
- [ ] `min-h-[100dvh]` only; no `h-screen`
- [ ] Skip link first in body; `main#main-content`; nav/footer aria-labels per deck
- [ ] Heading outline: home h1 = featured title, h2 = status headers + newsletter; studio h1 + h2s; contact h1
- [ ] Labels above inputs; errors below with `aria-describedby`; submit state `aria-busy`; success/error in `role="status"` / `role="alert"` live regions (fixes audit gap in current forms)
- [ ] Alt text per deck; decorative treatment shapes `aria-hidden="true"`
- [ ] No information conveyed by color alone

## 9. Verification gate and scans (every slice, and the merge commit)

```bash
npm run typecheck && npm run lint && npm run build
# offline: NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build

# Scan 1: ban list (zero hits required)
grep -rinE "underserved|deserve|overlooked|forgotten|rescue|reviv|adapt|best expression|worlds we love|existing ip|world[ -]first|innovat|disrupt|transform|cutting[ -]edge|elevat|seamless|unleash|next[ -]gen|revolutioni|signal reel|no\.? ?001|meta[ -]drop|track [0-9]|move [0-9]|visual stud|experience|playable" lib/copy.ts lib/slate.ts

# Scan 2: em/en dashes in source (zero hits required)
LC_ALL=en_US.UTF-8 grep -rnP "[\x{2013}\x{2014}]" app components lib
```

Plus the taste-skill Section 14 Pre-Flight, run by the orchestrator on every slice review.

## 10. Ordered slice list (Phase 4)

| # | Slice | Delivers | Gate |
|---|---|---|---|
| 1 | `feat: white foundation, copy module, slate data, chrome` | globals.css white tokens, lib/copy.ts, lib/slate.ts, Button.tsx, SiteNav/SiteFooter rework, layout.tsx metadata, app/not-found.tsx, app/icon.svg | typecheck+lint+build, scans, Pre-Flight on chrome |
| 2 | `feat: homepage as the slate` | FeaturedWork, SlateSection, SlateTile, PlaceholderTreatment, Newsletter; new app/page.tsx; DELETE ScrollLogoReveal + 5 home sections + legacy ink tokens | gate, scans, criteria 1 to 7 spot check |
| 3 | `feat: studio page, the one self-description` | Studio rebuild per section map | gate, scans, criterion 3 |
| 4 | `feat: contact rework on the frozen contract` | Contact page + creator form rework, a11y states, ContactHero deleted | gate, scans, frozen-field diff check |
| 5 | `chore: retire dead components and assets` | Delete unreferenced ui components, og.png regeneration attempt, dead-code sweep | gate, scans, grep for dangling imports |

Each slice: one Sonnet subagent, smallest reviewable diff, verification output reported verbatim, then orchestrator review + Pre-Flight + scans + conventional commit.

## 11. Success criteria

The 11 criteria of the brief's Section 13, tested before merge; criterion-by-criterion verification recorded in the closing report.
