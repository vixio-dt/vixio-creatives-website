---
description: Project rules for vixio-creatives-website development
alwaysApply: true
---

# AGENTS.md

## Project Overview

This is the marketing website for Vixio Creatives (`vixiocreatives.com`). It is a Next.js 16 site with 7 pages (all statically prerendered), using Mantine, Tailwind CSS v4, and Framer Motion. Deployed on Hostinger Node.js hosting.

## Mandatory Rules

1. **95% Confidence Rule**: Do NOT make changes until you have 95% confidence you understand what to build.
2. **Verify Before Claiming Done**: Run `npm run typecheck` and `npm run lint` before claiming work is complete.
3. **Keep It Simple**: This is a marketing site. Avoid adding unnecessary complexity, server-side features, or heavy dependencies.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, SSR with static prerender) |
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
| `npm run build` | Production build |
| `npm run start` | Start production server (`next start`) |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |

## Cursor Cloud specific instructions

- **Single service**: This is a front-end site with no backend, database, or external services. The only service to run is `npm run dev` (Next.js dev server on port 3000).
- **Hosting**: Deployed on Hostinger Node.js hosting. Hostinger runs `npm run build` then `npm run start -- -p $PORT`. Do NOT use `output: 'export'` — Hostinger requires `next start` (server mode).
- **Lint warning**: `npm run lint` produces one expected warning (`@next/next/no-page-custom-font` in `app/layout.tsx`) about custom fonts not in `pages/_document.js`. This is harmless for App Router projects and can be ignored.
- **No test framework**: There are no automated test suites (no Jest, Vitest, etc.). Verification is done via `npm run typecheck` and `npm run lint`.
