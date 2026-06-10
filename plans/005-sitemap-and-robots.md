# Plan 005: Add sitemap.xml and robots.txt via App Router metadata routes

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report. When done, update the status row for this plan in `plans/README.md`
> unless a reviewer dispatched you and told you they maintain the index.
>
> **Drift check (run first)**: `git diff --stat 3ea5bbf..HEAD -- app/ lib/slate.ts`
> New files from other plans are fine; if `app/sitemap.ts` or `app/robots.ts`
> already exist, STOP (someone did this already).

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW (purely additive routes)
- **Depends on**: none
- **Category**: direction (SEO surface)
- **Planned at**: commit `3ea5bbf`, 2026-06-10

## Why this matters

The site has full OG/Twitter metadata (`app/layout.tsx:22-50`,
`metadataBase: https://vixiocreatives.com`) but no `sitemap.xml` and no
`robots.txt` — crawlers get no index of the three routes and nothing forbids
or permits anything explicitly. As the slate grows (per-work detail pages are
typed into `lib/slate.ts`'s `PlaceholderId` union already), a generated
sitemap becomes the discovery surface for shared/press links. Next.js App
Router generates both from `app/sitemap.ts` and `app/robots.ts` at build time.

## Current state

- `app/` contains: `layout.tsx`, `page.tsx`, `not-found.tsx`, `globals.css`,
  `icon.svg`, `contact/page.tsx`, `studio/page.tsx`, `api/contact/route.ts`.
  No `sitemap.ts`, no `robots.ts`, and no `public/robots.txt`.
- Public routes: `/` , `/studio`, `/contact`. (`/api/contact` is POST-only and
  must NOT be in the sitemap.)
- The canonical origin string `https://vixiocreatives.com` appears in
  `app/layout.tsx:23` and `:32`.
- Convention: zero em/en dashes anywhere including comments; visible copy
  lives in `lib/copy.ts` (sitemap/robots emit no visible copy, so plain code
  is fine).

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Typecheck | `npm run typecheck` | exit 0 |
| Lint | `npm run lint` | exit 0 |
| Build (hermetic) | `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js npm run build` | exit 0; route table now also lists `/sitemap.xml` and `/robots.txt` |
| Inspect output | `cat dist/server/app/sitemap.xml.body 2>/dev/null \|\| grep -r "vixiocreatives" dist --include="*sitemap*" -l` | sitemap content present in build output |

## Scope

**In scope**:
- `app/sitemap.ts` (create)
- `app/robots.ts` (create)

**Out of scope** (do NOT touch):
- `app/layout.tsx`, `lib/slate.ts`, `lib/copy.ts`, anything under `app/api/`.
- No per-work detail routes (a separate, owner-gated decision).
- No `public/robots.txt` (the metadata route replaces it; both would conflict).

## Git workflow

- Work on the current checked-out branch.
- One commit, e.g.: `feat: sitemap and robots metadata routes`

## Steps

### Step 1: app/sitemap.ts

```ts
import type { MetadataRoute } from 'next'

const BASE = 'https://vixiocreatives.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/studio`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
```

**Verify**: `npm run typecheck` → exit 0

### Step 2: app/robots.ts

```ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://vixiocreatives.com/sitemap.xml',
  }
}
```

**Verify**: `npm run typecheck` → exit 0

### Step 3: Full gate

Run lint and the hermetic build; confirm the route table includes
`/sitemap.xml` and `/robots.txt`.

**Verify**: build output route list contains both new routes; lint exit 0

## Test plan

Build-time verification (route table + output inspection) is sufficient; these
are static config functions with no branching. If plan 003 landed, no test
additions are required.

## Done criteria

- [ ] `npm run typecheck` and `npm run lint` exit 0
- [ ] Hermetic build exits 0 and lists `/sitemap.xml` and `/robots.txt`
- [ ] Sitemap contains exactly 3 URLs, none under `/api/`
- [ ] `git status` shows only the two new files

## STOP conditions

Stop and report back (do not improvise) if:

- `app/sitemap.ts` or `app/robots.ts` already exists.
- The Next version in the tree rejects the `MetadataRoute` types (would mean
  plan 001 regressed something — report, do not work around).

## Maintenance notes

- When per-work detail pages land (see plans/README.md direction notes), the
  sitemap should switch to mapping over `slate` entries from `lib/slate.ts`;
  the static 3-URL list is correct until those routes exist.
- If a staging domain is ever deployed, robots must disallow it — that is a
  deployment-config concern, not this file.
