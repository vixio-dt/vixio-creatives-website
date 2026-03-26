---
description: Project rules for vixio-creatives-website development
alwaysApply: true
---

# AGENTS.md

## Project Overview

This is the marketing website for Vixio Creatives (`vixiocreatives.com`). It is a Next.js 16 static-export site with 7 pages, using Mantine, Tailwind CSS v4, and Framer Motion.

## Mandatory Rules

1. **95% Confidence Rule**: Do NOT make changes until you have 95% confidence you understand what to build.
2. **Verify Before Claiming Done**: Run `npm run typecheck` and `npm run lint` before claiming work is complete.
3. **Keep It Simple**: This is a marketing site. Avoid adding unnecessary complexity, server-side features, or heavy dependencies.

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
| `npm run build` | Build static export |
| `npm run start` | Serve static build |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |
