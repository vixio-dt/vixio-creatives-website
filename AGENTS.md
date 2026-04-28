---
description: Project rules for vixio-creatives-website development
alwaysApply: true
---

# AGENTS.md

## Project Overview

This is the marketing website for Vixio Creatives (`vixiocreatives.com`). It is a Next.js 16 App Router site with 7 pages, using Mantine, Tailwind CSS v4, and Framer Motion. Production uses `next build` and `next start` (not static export). The homepage email form is handled by `app/api/subscribe` (Resend); set `RESEND_API_KEY` in the deployment environment or `.env.local` for local testing.

## Mandatory Rules

1. **95% Confidence Rule**: Do NOT make changes until you have 95% confidence you understand what to build.
2. **Verify Before Claiming Done**: Run `npm run typecheck` and `npm run lint` before claiming work is complete.
3. **Keep It Simple**: This is a marketing site. Avoid adding unnecessary complexity, extra server surface, or heavy dependencies beyond the existing needs (e.g. the Resend subscribe route).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| UI Library | Mantine |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk (headlines/labels) + Manrope (body) |

## Site Architecture

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/experiences` | Original Experiences |
| `/services` | Studio Services |
| `/lab` | The Lab (R&D) |
| `/about` | About / Manifesto |
| `/journal` | Journal |
| `/contact` | Contact |

## Key Directories

- `app/` — Pages (App Router)
- `components/layout/` — OrbitalNav, FullScreenMenu, Footer
- `components/ui/` — Shared components (buttons, inputs, placeholders)
- `components/home/` — Homepage sections
- `components/experiences/` — Experiences page sections
- `components/services/` — Services page sections
- `components/lab/` — Lab page sections
- `components/about/` — About page sections
- `components/journal/` — Journal page sections
- `components/contact/` — Contact page sections
- `lib/theme/` — Mantine theme configuration

## Design System

- CSS custom properties defined in `app/globals.css`
- "Morning Light" aesthetic: warm off-whites, no pure #FFFFFF
- No 1px borders — use tonal layering
- Gradient placeholders instead of images

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production Next.js build |
| `npm run start` | Run production server (`next start`) |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |

## Cursor Cloud specific instructions

- **Local dev**: Run `npm run dev` (Next.js dev server on port 3000). For a production-like check locally, run `npm run build` then `npm run start` — do not run `dev` and `start` on the same port simultaneously.
- **Lint warning**: `npm run lint` produces one expected warning (`@next/next/no-page-custom-font` in `app/layout.tsx`) about custom fonts not in `pages/_document.js`. This is harmless for App Router projects and can be ignored.
- **API route**: The site includes a server route for email signup (`/api/subscribe`). It needs `RESEND_API_KEY` where the server runs; it is not a purely static HTML export.
- **No test framework**: There are no automated test suites (no Jest, Vitest, etc.). Verification is done via `npm run typecheck` and `npm run lint`.

## Learned User Preferences

- For planning open-ended or creative UI work, use the superpowers brainstorming skill instead of the deprecated `/brainstorm` Cursor command.
- For the homepage logo moment, prefer scroll-scrubbed (Apple-style) reveals over autoplay video or timer-only sequences.
- After the scroll-driven logo reveal settles, hold the logo centered in its original brand colors briefly before the following section (e.g. hero) slides or transitions in.
- On the homepage, keep the OrbitalNav menu trigger and header wordmark hidden until the scroll logo-reveal sequence has finished, then show them.

## Design Skills (Taste Skill)

The following Claude Code skills are installed in `.agents/skills/` and should be loaded for all design work:

| Skill | Use When |
|-------|----------|
| `design-taste-frontend` | Default frontend design — anti-slop, high-agency |
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
- NO "AI Purple/Blue" — use neutral bases + 1 accent
- NO `h-screen` — use `min-h-[100dvh]`
- Use `grid` over flex-math for layouts
- Animate only `transform` and `opacity`

## Learned Workspace Facts

- When present, homepage design review notes live at `.kombai/resources/design-review-homepage.md`.
- The logo animation video (`vixio logo animation.mp4`) was created with Google Whisk; no source project exists for re-export or transparency-enabled rendering.
- Frame-sequence Lottie/JSON from that asset is very large and looks poor when scaled to hero logo width; matching the cinematic look is better pursued with `/vixio-logo.svg` plus scroll-driven CSS/Framer effects than with a small raster canvas.
