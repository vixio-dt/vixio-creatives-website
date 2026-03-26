# Codebase Assessment: Vixio Worldbuilder

**Date:** 2026-03-26
**Branch:** `main` (HEAD: `e3b2601`)
**Repository:** `vixio-dt/vixio-world`

---

## Executive Summary

Vixio Worldbuilder is an early-stage Next.js 16 web application for filmmakers and creative teams to build, organize, and visualize fictional worlds during preproduction. The codebase contains ~8,900 lines of TypeScript/TSX across app, components, and lib directories, plus ~725 lines of SQL schema. It is undergoing a strategic pivot from a "worldbuilder-first" product into **Vixio Studio** — a project-first, visualization-first preproduction workspace.

**Current state:** The codebase has a comprehensive set of components and server actions built, but the Next.js app router only exposes a single marketing landing page (`/`). All dashboard and entity routes referenced in the sprint docs and components are **not present in `app/`**, meaning the bulk of the application UI is unreachable. TypeScript compiles cleanly, but unit tests have 8 failures and lint has 8 errors.

---

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | ^16.1.6 |
| Language | TypeScript | ^5 |
| UI Library | Mantine | @mantine/core + hooks + notifications + spotlight |
| Styling | Tailwind CSS v4 | via @tailwindcss/postcss |
| Database | Supabase (PostgreSQL) | @supabase/supabase-js, @supabase/ssr |
| AI | OpenRouter (OpenAI SDK) | deepseek/deepseek-v3.2 |
| Build | Turbopack (default in Next.js 16) | — |
| Testing | Vitest + Testing Library (unit/integration), Playwright (e2e/visual) | vitest 4.x, @playwright/test |
| Motion | Framer Motion | — |
| Icons | Lucide React | — |
| Graph | react-force-graph-2d | — |
| Export | @react-pdf/renderer, jszip | — |
| Deployment | Static export (`output: 'export'`) via `serve` | — |

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│  Next.js 16 App Router (Static Export)                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  app/                                                  │  │
│  │  ├── layout.tsx  (MantineProvider, global CSS)         │  │
│  │  ├── page.tsx    (Marketing landing - only live route) │  │
│  │  └── globals.css                                       │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  components/ (63 files, ~4,400 LOC)                    │  │
│  │  ├── marketing/     (6 landing page sections)          │  │
│  │  ├── shell/         (DashboardShell, Sidebar, Header)  │  │
│  │  ├── ui/            (9 shared primitives)              │  │
│  │  ├── characters/    (Card + Form)                      │  │
│  │  ├── locations/     (Card + Form)                      │  │
│  │  ├── organizations/ (Card + Form)                      │  │
│  │  ├── items/         (Card + Form)                      │  │
│  │  ├── stories/       (Card + Form)                      │  │
│  │  ├── rules/         (Card + Form)                      │  │
│  │  ├── timeline/      (EventCard + EventForm)            │  │
│  │  ├── chat/          (ChatMessage, ChatInput, Actions)  │  │
│  │  ├── content-blocks/(Display + Editor)                 │  │
│  │  ├── graph/         (RelationshipGraph + Controls)     │  │
│  │  ├── mentions/      (MentionInput + Dropdown)          │  │
│  │  ├── models/        (ModelEmbed + AddModelButton)      │  │
│  │  ├── search/        (CommandPalette)                   │  │
│  │  └── providers/     (MantineClientProvider)            │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  lib/ (29 files, ~3,500 LOC)                           │  │
│  │  ├── actions/       (15 server action modules)         │  │
│  │  ├── ai/            (OpenRouter, entity extraction)    │  │
│  │  ├── supabase/      (client, server, middleware)       │  │
│  │  ├── hooks/         (useToast, useKeyboardShortcuts)   │  │
│  │  ├── theme/         (Mantine theme config)             │  │
│  │  ├── types/         (database.ts - all types)          │  │
│  │  └── utils/         (cn, world-context, model-url, ai) │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  supabase/ (~725 LOC SQL)                              │  │
│  │  ├── schema.sql           (full DDL, RLS, triggers)    │  │
│  │  ├── migration-2026-01-29 (content blocks, mentions)   │  │
│  │  └── migrations/2026-02-05-chat.sql (chat feature)     │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Data Model

The database schema is well-structured with 10 core entity tables, 8 junction tables, and 2 chat tables:

**Core Entities:** `worlds`, `characters`, `locations`, `organizations`, `events`, `items`, `rules`, `stories`, `scenes`, `shots`

**Junction Tables:** `character_relationships`, `character_organizations`, `character_locations`, `event_characters`, `scene_characters`, `shot_characters`, `story_characters`, `item_owners`

**Support Tables:** `entity_mentions`, `chat_sessions`, `chat_messages`

All tables use UUID primary keys, have RLS policies (owner-based via `auth.uid()`), `updated_at` triggers, and appropriate indexes.

---

## Codebase Health

### TypeScript Compilation
- **Status: PASS** — `tsc --noEmit` exits cleanly with zero errors

### Lint (ESLint)
- **Status: 8 errors, 7 warnings**
- All 8 errors are `@typescript-eslint/no-explicit-any` in `dev-bot/src/index.ts` (separate Slack bot package)
- Warnings include: missing `alt` prop, `<img>` instead of `<Image>`, unused imports in `product-plan/` demo components, custom font placement
- **Core app code has zero lint errors**

### Unit/Integration Tests (Vitest)
- **Status: 8 failed, 16 passed (24 total)**
- 8 failures in `button.test.tsx` — all due to missing `MantineProvider` wrapper in test setup
- 1 suite error: `ui-regression.spec.ts` (Playwright test accidentally included in Vitest config scope)
- Passing suites: `world-context.test.ts` (6), `studio-navigation.test.ts` (2), `world-switcher.test.tsx` (4, with `act()` warnings), `world-onboarding.test.tsx` (2), `dark-mode-disable.test.tsx` (2)

### E2E Tests (Playwright)
- Not runnable without a Supabase instance and env vars

### Dependency Health
- 758 packages installed
- 7 npm vulnerabilities (2 moderate, 5 high) — `npm audit fix` recommended
- All core dependencies are modern and maintained

---

## Key Findings

### 1. Missing Routes (Critical Gap)

The `app/` directory contains only 3 files (`layout.tsx`, `page.tsx`, `globals.css`), rendering a single marketing landing page. Yet the codebase contains:

- 15 server action modules in `lib/actions/` (auth, characters, locations, etc.)
- 7 entity feature folders in `components/` with Card + Form components
- Shell components (DashboardShell, Sidebar, Header, WorldSwitcher)
- Chat, graph, search, import, export components
- Navigation config referencing `/dashboard`, `/characters`, `/locations`, `/timeline`, `/items`, `/rules`, `/stories`, `/chat`, `/graph`, `/export`, `/import`

**Impact:** ~90% of the UI components and all server actions are dead code — they exist but are unreachable through the app router. The sprint docs reference routes like `app/(dashboard)/characters/page.tsx` that were apparently created and then removed (possibly during the static export pivot).

**Root cause:** The `next.config.ts` has `output: 'export'` (static site generation), which is incompatible with server-side features like `cookies()`, `headers()`, Supabase auth middleware, and server actions. The app was likely simplified to a static marketing site for initial deployment to Hostinger.

### 2. Static Export vs. Full-Stack Mismatch

The app is configured for static export but the codebase is built for a full-stack app:

| Feature | Requires Server | Compatible with Static Export? |
|---------|----------------|-------------------------------|
| Supabase Auth (cookies) | Yes | No |
| Server Actions (`lib/actions/*`) | Yes | No |
| Middleware (`proxy.ts`) | Yes | No |
| AI Chat (OpenRouter) | Yes | No |
| Entity CRUD | Yes | No |
| Marketing landing | No | Yes |

### 3. Test Quality Issues

- **Button tests broken:** Missing `MantineProvider` wrapper — easy fix
- **Playwright test in Vitest:** `ui-regression.spec.ts` uses `@playwright/test`'s `test()` but is picked up by Vitest's glob pattern (should be excluded more precisely)
- **`act()` warnings** in `world-switcher.test.tsx` — async state updates not properly wrapped
- **No test for any server action** — all 15 action modules are untested
- **Test coverage is low** — only 24 tests total for ~8,900 LOC

### 4. Code Organization Strengths

- **Clean domain separation:** Each entity type has its own `components/{entity}/` folder with Card + Form + barrel export
- **Consistent patterns:** Card/Form naming convention, barrel `index.ts` exports, shared `ui/` primitives
- **Well-typed:** Complete TypeScript types for all database entities, junction tables, and chat metadata
- **Rich schema:** The SQL schema has proper RLS, triggers, indexes, and check constraints
- **Good documentation:** Sprint history in `docs/current-sprint.md` provides excellent context

### 5. Strategic Context

The project is mid-pivot from "Vixio Worldbuilder" to "Vixio Studio" — a project-first preproduction workspace. The `product-plan/` directory (61 files) contains extensive product strategy, feature specs, and even prototype components. The current codebase represents the "Worldbuilder" implementation that will evolve into the Studio vision.

---

## Risks and Technical Debt

| Risk | Severity | Description |
|------|----------|-------------|
| Dead code | High | ~90% of components/actions unreachable — increases maintenance burden |
| Static/server mismatch | High | Architecture assumes server features that static export can't support |
| No server action tests | Medium | 15 action modules with zero test coverage |
| Broken tests | Medium | 8 failing tests (easy fix) + test infrastructure issues |
| npm vulnerabilities | Medium | 7 vulnerabilities (2 moderate, 5 high) |
| Dev-bot lint errors | Low | 8 `any` type errors in dev-bot (separate package) |
| `act()` warnings | Low | Async test patterns need cleanup |
| README version stale | Low | README says Next.js 15, actual is 16 |

---

## Recommendations

### Immediate (fix now)
1. **Fix button tests** — wrap renders in `MantineProvider`
2. **Exclude visual tests from Vitest** — add `tests/visual/**` to vitest exclude
3. **Run `npm audit fix`** — address known vulnerabilities

### Short-term (next sprint)
4. **Decide deployment model** — either commit to static export (remove server-side code) or switch to server deployment (remove `output: 'export'`)
5. **Re-add dashboard routes** — if going server-side, restore the `app/(dashboard)/` route group that the components expect
6. **Add MantineProvider to test setup** — global wrapper in `tests/setup.ts` to prevent future test failures

### Medium-term
7. **Add server action tests** — at minimum, test the core CRUD actions with mocked Supabase
8. **Clean up dead code or restore routes** — the ~4,000 LOC of unreachable components should either be wired up or removed
9. **Address the Studio pivot** — align codebase with the project-first, boards-based architecture described in `product-plan/`

---

## File Statistics

| Category | Files | Lines of Code |
|----------|-------|---------------|
| App (routes) | 3 | 60 |
| Components | 63 | 4,434 |
| Library/Utils | 29 | 3,462 |
| Tests | 10 | 721 |
| SQL Schema | 3 | 725 |
| Dev Bot | ~15 | 1,047 |
| Config files | 8 | ~200 |
| Product plan | 61 | ~5,000+ |
| **Total (app)** | **~105** | **~8,900** |
| **Total (all)** | **~170+** | **~15,000+** |
