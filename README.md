# Vixio Creatives Website

A creative label for story-rich worlds.

Marketing website for [vixiocreatives.com](https://vixiocreatives.com): a white, catalog-first label site where the slate is the homepage. Next.js 16 App Router, TypeScript, server-side rendering.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties (white token system, `app/globals.css`) |
| Animation | Framer Motion (in-media only, reduced-motion safe) |
| Fonts | Space Grotesk (display) + Manrope (body) via next/font |

## Routes

| Route | Page |
|-------|------|
| `/` | The slate: featured work, status sections, newsletter |
| `/studio` | Studio (the one self-description) |
| `/contact` | Contact (industry form + direct email) |
| `/api/contact` | Contact form API (Supabase + Resend), frozen contract |

## Content model

- Every visible string lives in `lib/copy.ts` (typed). Components never define copy.
- The slate lives in `lib/slate.ts`. Adding a work, changing a status, or titling the film is a data-only change; sections, headers, and ordering derive from the data.
- Placeholder media slots are keyed to `PLACEHOLDER-ASSETS.md` IDs and render as designed treatments until real assets land.

Design decisions: `DESIGN.md`, `CONTEXT.md`, and `docs/adr/`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and Serve

```bash
npm run build     # Production build
npm run start     # Run production server
npm run lint      # ESLint check
npm run typecheck # TypeScript check
```

### Offline / CI builds

Normal deployments fetch Google Fonts at build time and the mock file is ignored. To build without network access:

```bash
NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build
```

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `RESEND_API_KEY` | Resend API key for contact form emails |

Set these in `.env.local` for local development or in your deployment environment.
