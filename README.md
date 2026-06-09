# Vixio Creatives Website

A creative label for story-rich worlds.

Marketing website for [vixiocreatives.com](https://vixiocreatives.com) -- Next.js 16 App Router, TypeScript, server-side rendering.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animation | Framer Motion |
| Fonts | Space Grotesk (display) + Manrope (body) via next/font |

## Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/studio` | Studio |
| `/contact` | Contact |
| `/api/contact` | Contact form API (Resend) |

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

Normal deployments fetch Google Fonts at build time and the mock file is ignored. If you need to build without network access (e.g. offline CI), set the env var before building:

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
