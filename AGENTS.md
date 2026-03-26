---
description: Project rules for vixio-creatives-website development
alwaysApply: true
---

# AGENTS.md

## Project Overview

This is the marketing landing page for Vixio Creatives (`vixiocreatives.com`). It is a Next.js 16 static-export site with Mantine, Tailwind CSS v4, and Framer Motion.

## Mandatory Rules

1. **95% Confidence Rule**: Do NOT make changes until you have 95% confidence you understand what to build.
2. **Verify Before Claiming Done**: Run `npm run typecheck` and `npm run lint` before claiming work is complete.
3. **Keep It Simple**: This is a landing page. Avoid adding unnecessary complexity, server-side features, or heavy dependencies.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| UI Library | Mantine |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |

## Key Files

- `app/page.tsx` — The landing page (single route)
- `app/layout.tsx` — Root layout with Mantine provider
- `components/marketing/` — The 6 landing page sections
- `lib/theme/mantine-theme.ts` — Mantine theme configuration

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build static export |
| `npm run start` | Serve static build |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |
