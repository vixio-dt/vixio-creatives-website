# Codebase Assessment: Vixio Creatives Landing Page

**Date:** 2026-03-26  
**Branch:** `main` (HEAD: `e3b2601`)  
**Repository:** `vixio-dt/vixio-creatives-website`

---

## Executive Summary

This repository is intended to be a **landing page** for Vixio Creatives (`vixiocreatives.com`), a creative production studio. It is a Next.js 16 static-export site that renders a single marketing page with six sections: Hero, Studio, Boundary Showcase, Capabilities, Founder, and Contact.

However, the repo contains a large amount of **foreign code from another project** (the Vixio Worldbuilder/Studio app). Only **11 source files** out of ~170 are actually used by the landing page. The rest — 60+ components, 15 server action modules, database schemas, AI integrations, a Slack dev-bot, and extensive product planning docs — are dead weight that should be removed.

---

## What Actually Powers the Landing Page

### Files in the dependency tree (11 source files + 1 asset)

| # | File | Purpose |
|---|------|---------|
| 1 | `app/layout.tsx` | Root layout — HTML shell, fonts, MantineProvider |
| 2 | `app/page.tsx` | Home route — renders 6 marketing sections |
| 3 | `app/globals.css` | Tailwind + Mantine CSS, custom marketing styles |
| 4 | `components/marketing/HeroSection.tsx` | Hero with logo, tagline, framer-motion animations |
| 5 | `components/marketing/StudioSection.tsx` | Studio overview section |
| 6 | `components/marketing/BoundaryShowcase.tsx` | Creative boundaries showcase |
| 7 | `components/marketing/CapabilitiesSection.tsx` | Capabilities grid |
| 8 | `components/marketing/FounderSection.tsx` | Founder bio section |
| 9 | `components/marketing/ContactSection.tsx` | Contact/CTA section |
| 10 | `components/providers/MantineClientProvider.tsx` | Mantine + Notifications wrapper |
| 11 | `lib/theme/mantine-theme.ts` | Custom Mantine theme config |
| — | `public/vixio-logo.svg` | Logo asset used by HeroSection |

### npm dependencies actually used

| Package | Used By |
|---------|---------|
| `next` | Framework, `<Image>` in Hero |
| `react`, `react-dom` | Core |
| `@mantine/core` | UI provider, theme, ColorSchemeScript |
| `@mantine/notifications` | Notifications provider (wired but no toasts on landing) |
| `framer-motion` | All 6 marketing sections (scroll animations) |
| `tailwindcss`, `@tailwindcss/postcss` | Utility styling |
| `lucide-react` | Icons in HeroSection |
| `serve` | Static file server for `npm run start` |

### Technology stack (landing page)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| UI Library | Mantine (theme + provider only) |
| Styling | Tailwind CSS v4 + custom CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk (headings) + Inter (body) via Google Fonts |
| Deployment | Static export (`out/`) served via `serve` |

---

## Foreign Code (from Vixio Worldbuilder repo)

The following directories and files are **not used** by the landing page and appear to be from a separate Vixio Worldbuilder/Studio application:

### Components (~57 unused files)

| Directory | Contents | Landing page usage |
|-----------|----------|-------------------|
| `components/characters/` | CharacterCard, CharacterForm | **None** |
| `components/locations/` | LocationCard, LocationForm | **None** |
| `components/organizations/` | OrganizationCard, OrganizationForm | **None** |
| `components/items/` | ItemCard, ItemForm | **None** |
| `components/stories/` | StoryCard, StoryForm | **None** |
| `components/rules/` | RuleCard, RuleForm | **None** |
| `components/timeline/` | EventCard, EventForm | **None** |
| `components/chat/` | ChatMessage, ChatInput, QuickActions | **None** |
| `components/content-blocks/` | ContentBlocksDisplay, ContentBlocksEditor | **None** |
| `components/graph/` | RelationshipGraph, GraphControls | **None** |
| `components/mentions/` | MentionInput, MentionDropdown | **None** |
| `components/models/` | ModelEmbed, AddModelButton | **None** |
| `components/search/` | CommandPalette | **None** |
| `components/shell/` | DashboardShell, Sidebar, Header, WorldSwitcher, WorldOnboarding | **None** |
| `components/ui/` | Button, Card, Input, Select, Textarea, Toast, etc. | **None** |

### Library code (~29 unused files)

| Directory | Contents | Landing page usage |
|-----------|----------|-------------------|
| `lib/actions/` | 15 server action modules (auth, CRUD for all entities, chat, import/export, search) | **None** |
| `lib/ai/` | OpenRouter client, entity extraction, AI types | **None** |
| `lib/supabase/` | Supabase client, server, middleware | **None** |
| `lib/hooks/` | useToast, useKeyboardShortcuts | **None** |
| `lib/types/` | database.ts (422-line type definitions) | **None** |
| `lib/utils/` | world-context, model-url, ai-context | **None** |
| `lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) | **None** |

### Infrastructure files (unused)

| File/Directory | Purpose | Landing page usage |
|----------------|---------|-------------------|
| `proxy.ts` | Next.js middleware for Supabase auth | **None** (static export ignores middleware) |
| `supabase/` | Database schema + migrations (725 LOC SQL) | **None** |
| `dev-bot/` | Slack dev-bot for task automation (~1,047 LOC) | **None** |
| `.dev-tasks/` | Dev-bot task storage | **None** |
| `tests/` | Unit, integration, e2e, visual tests | **None** (tests reference worldbuilder components) |
| `product-plan/` | 61 files of product strategy docs + prototype components | **None** |
| `docs/plans/` | Implementation plans for worldbuilder features | **None** |
| `scripts/` | Remote dev scripts | **None** |
| `.env.example` | Supabase + OpenRouter + Slack env vars | **None** (landing page needs no env vars) |
| `vitest.config.ts` | Test config | **None** |
| `playwright.config.ts` | E2E test config | **None** |
| `tsconfig.test.json` | Test TypeScript config | **None** |

### Unused npm dependencies

These packages are installed but not used by the landing page:

| Package | Why it exists |
|---------|---------------|
| `@supabase/ssr`, `@supabase/supabase-js` | Worldbuilder auth/database |
| `@mantine/spotlight` | Worldbuilder command palette |
| `@react-pdf/renderer` | Worldbuilder PDF export |
| `openai` | Worldbuilder AI features (via OpenRouter) |
| `react-force-graph-2d` | Worldbuilder relationship graph |
| `react-markdown` | Worldbuilder content rendering |
| `jszip` | Worldbuilder export |
| `clsx`, `tailwind-merge` | Worldbuilder `cn()` utility |
| `@testing-library/*`, `vitest`, `jsdom`, `@vitejs/plugin-react` | Test infrastructure |
| `@playwright/test` | E2E test infrastructure |
| `lightningcss` | CSS minification (may be used by build) |

### Unused static asset

| File | Note |
|------|------|
| `public/vixio creatives logo.svg.svg` | Not referenced anywhere (likely a duplicate with a typo in the filename) |

---

## Codebase Health (as-is)

### TypeScript Compilation
- **PASS** — `tsc --noEmit` exits cleanly

### ESLint
- **8 errors** — all in `dev-bot/src/index.ts` (`no-explicit-any`), which is foreign code
- **7 warnings** — mix of foreign code issues + 1 valid landing page warning (custom font in layout)
- **Core landing page code: zero errors, 1 warning**

### Tests
- **8 failures** in `button.test.tsx` — tests a foreign component (`components/ui/Button`) missing MantineProvider
- **16 passing** — test foreign worldbuilder features (world context, navigation, world switcher, onboarding, dark mode)
- **No tests exist for the actual landing page**

### npm Audit
- 7 vulnerabilities (2 moderate, 5 high) — largely from unused dependencies

---

## Quantified Impact of Foreign Code

| Metric | Landing Page | Foreign Code | Foreign % |
|--------|-------------|-------------|-----------|
| Source files (TS/TSX) | 11 | ~94 | **90%** |
| Lines of code | ~550 | ~8,350 | **94%** |
| npm dependencies | 8 used | 14 unused | **64%** |
| npm devDependencies | 3 used | 8 unused | **73%** |
| SQL schema lines | 0 | 725 | **100%** |
| Test files | 0 | 10 | **100%** |

---

## Recommendations

### 1. Remove foreign code (high priority)

Remove all directories and files that belong to the worldbuilder repo:

**Directories to remove:**
- `components/characters/`, `locations/`, `organizations/`, `items/`, `stories/`, `rules/`, `timeline/`
- `components/chat/`, `content-blocks/`, `graph/`, `mentions/`, `models/`, `search/`, `shell/`, `ui/`
- `lib/actions/`, `lib/ai/`, `lib/supabase/`, `lib/hooks/`, `lib/types/`, `lib/utils/`
- `supabase/`
- `dev-bot/`
- `.dev-tasks/`
- `tests/`
- `product-plan/`
- `docs/plans/`
- `scripts/`

**Files to remove:**
- `lib/utils.ts`
- `proxy.ts`
- `.env.example`
- `vitest.config.ts`, `tsconfig.test.json`, `playwright.config.ts`
- `public/vixio creatives logo.svg.svg`

### 2. Slim down package.json

Remove unused dependencies after foreign code is removed. The landing page only needs:

```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "@mantine/core": "^7.17.4",
    "framer-motion": "^12.4.10",
    "lucide-react": "^0.474.0",
    "serve": "^14.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.9",
    "tailwindcss": "^4.0.9",
    "typescript": "^5",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "^16.1.6"
  }
}
```

Consider also removing `@mantine/notifications` and `@mantine/spotlight` from `globals.css` imports since no landing page component uses them.

### 3. Clean up globals.css

Remove unused Mantine CSS imports:
- `@mantine/spotlight/styles.css` — not used
- `@mantine/notifications/styles.css` — provider exists but no toasts fire on landing page
- Dark mode scrollbar/variant CSS — forced light mode

### 4. Add landing page tests

Currently zero tests exist for the actual landing page. Consider adding:
- Smoke test that the page renders without errors
- Visual regression test for the marketing page

### 5. Clean up AGENTS.md and docs

The `AGENTS.md` and `docs/current-sprint.md` reference worldbuilder features, skills, and workflows that don't apply to a landing page repo. Either simplify or remove.

### 6. Fix the font warning

The Google Fonts `<link>` in `layout.tsx` triggers `@next/next/no-page-custom-font`. Consider using `next/font/google` instead for better performance.

---

## Files to Keep (complete list)

If cleaning the repo down to just the landing page:

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  marketing/
    HeroSection.tsx
    StudioSection.tsx
    BoundaryShowcase.tsx
    CapabilitiesSection.tsx
    FounderSection.tsx
    ContactSection.tsx
  providers/
    MantineClientProvider.tsx
lib/
  theme/
    mantine-theme.ts
public/
  vixio-logo.svg
.gitignore
eslint.config.mjs
next.config.ts
next-env.d.ts
package.json (slimmed)
package-lock.json (regenerated)
postcss.config.mjs
tsconfig.json
README.md (updated)
```
