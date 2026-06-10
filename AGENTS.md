---
description: Project rules for vixio-creatives-website development
alwaysApply: true
---

# AGENTS.md

## Project Overview

This is the marketing website for Vixio Creatives (`vixiocreatives.com`). It is a Next.js 16 App Router site with 3 pages plus a contact API route, using Tailwind CSS v4 and Framer Motion. Production uses `next build` and `next start` (not static export). The contact form is handled by `app/api/contact` (Resend); set `RESEND_API_KEY` in the deployment environment or `.env.local` for local testing.

## Mandatory Rules

1. **95% Confidence Rule**: Do NOT make changes until you have 95% confidence you understand what to build.
2. **Verify Before Claiming Done**: Run `npm run typecheck` and `npm run lint` before claiming work is complete.
3. **Keep It Simple**: This is a marketing site. Avoid adding unnecessary complexity, extra server surface, or heavy dependencies.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animation | Framer Motion |
| Icons | @phosphor-icons/react (sparingly) |
| Fonts | Space Grotesk (display) + Manrope (body) via next/font |

## Site Architecture

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/studio` | Studio |
| `/contact` | Contact |

## Key Directories

- `app/` -- Pages (App Router)
- `components/layout/` -- SiteNav, SiteFooter
- `components/ui/` -- Shared components (buttons, inputs, etc.)
- `components/home/` -- Homepage sections
- `components/studio/` -- Studio page sections
- `components/contact/` -- Contact page sections

## Design System

- Tokens live in `app/globals.css`
- Dark cinematic system
- One accent color: `#3AAED8`
- Radius: pill for interactive elements, 16px for containers
- Zero em-dashes in visible copy
- Copy bans per REDESIGN-PLAN.md section 1

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production Next.js build |
| `npm run start` | Run production server (`next start`) |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |

## Cursor Cloud specific instructions

- **Local dev**: Run `npm run dev` (Next.js dev server on port 3000). For a production-like check locally, run `npm run build` then `npm run start` -- do not run `dev` and `start` on the same port simultaneously.
- **Lint warning**: `npm run lint` produces one expected warning (`@next/next/no-page-custom-font` in `app/layout.tsx`) about custom fonts not in `pages/_document.js`. This is harmless for App Router projects and can be ignored.
- **API route**: The site includes a server route for the contact form (`/api/contact`). It needs `RESEND_API_KEY` where the server runs; it is not a purely static HTML export.
- **No test framework**: There are no automated test suites (no Jest, Vitest, etc.). Verification is done via `npm run typecheck` and `npm run lint`.
- **Offline builds**: Normal deployments fetch Google Fonts at build time and ignore the mock file. For offline/CI builds set `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js` before `npm run build`.

## Learned User Preferences

- For planning open-ended or creative UI work, use the superpowers brainstorming skill instead of the deprecated `/brainstorm` Cursor command.
- For the homepage logo moment, prefer scroll-scrubbed (Apple-style) reveals over autoplay video or timer-only sequences.
- After the scroll-driven logo reveal settles, hold the logo centered in its original brand colors briefly before the following section (e.g. hero) slides or transitions in.
- On the homepage, keep the SiteNav hidden until the scroll logo-reveal sequence has finished, then show it.

## Design Skills (Taste Skill)

The following Claude Code skills are installed in `.agents/skills/` and should be loaded for all design work:

| Skill | Use When |
|-------|----------|
| `design-taste-frontend` | Default frontend design -- anti-slop, high-agency |
| `high-end-visual-design` | Premium visual effects, liquid glass, micro-interactions |
| `minimalist-ui` | Clean, reduced interfaces |
| `industrial-brutalist-ui` | Raw, utilitarian aesthetics |
| `redesign-existing-projects` | Auditing and upgrading current UI |
| `image-to-code` | Converting reference images to code |
| `stitch-design-taste` | Combining multiple design systems |
| `full-output-enforcement` | Ensuring complete implementation |
| `gpt-taste` | GPT-specific taste rules |

**Key parameters:**
- `DESIGN_VARIANCE: 8` (1=symmetry, 10=chaos)
- `MOTION_INTENSITY: 6` (1=static, 10=cinematic)
- `VISUAL_DENSITY: 4` (1=airy, 10=packed)

**Critical rules:**
- NO emojis in code or markup
- NO "AI Purple/Blue" -- use neutral bases + 1 accent
- NO `h-screen` -- use `min-h-[100dvh]`
- Use `grid` over flex-math for layouts
- Animate only `transform` and `opacity`

## Learned Workspace Facts

- When present, homepage design review notes live at `.kombai/resources/design-review-homepage.md`.
- The wordmark logo (`/vixio-wordmark.svg`) is used in SiteNav and SiteFooter. ScrollLogoReveal on the homepage correctly uses the square `/vixio-logo.svg`.

## Agent skills

### Issue tracker

Issues live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` at the repo root plus `docs/adr/`. See `docs/agents/domain.md`.
