# Vixio Creatives Website

Marketing landing page for [vixiocreatives.com](https://vixiocreatives.com) — a creative production studio that develops and produces original story IP using AI-assisted production.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| UI Library | Mantine |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk + Inter (Google Fonts) |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Serve

```bash
npm run build     # Static export to out/
npm run start     # Serve out/ on port 3000
```

## Project Structure

```
vixio-creatives-website/
├── app/
│   ├── layout.tsx                  # Root layout (Mantine, fonts, CSS)
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Tailwind + marketing styles
├── components/
│   ├── marketing/                  # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── StudioSection.tsx
│   │   ├── BoundaryShowcase.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── FounderSection.tsx
│   │   └── ContactSection.tsx
│   └── providers/
│       └── MantineClientProvider.tsx
├── lib/
│   └── theme/
│       └── mantine-theme.ts        # Mantine theme config
├── public/
│   └── vixio-logo.svg
└── docs/
    └── codebase-assessment.md
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build static export |
| `npm run start` | Serve static build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript check |
