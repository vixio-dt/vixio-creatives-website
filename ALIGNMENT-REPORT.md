# V4 Language Alignment Report

**Date:** 2026-04-28
**Scope:** Language swap only — no redesign, no structural changes
**Status:** ✅ Complete

## Build Verification

| Check | Result |
|-------|--------|
| `npm run typecheck` | ✅ Pass |
| `npm run lint` | ✅ Pass (1 expected warning) |
| `npm run build` | ✅ Pass |

## Files Changed (7 files, 25 insertions, 25 deletions)

### Metadata & Layout
- `app/layout.tsx` — Title/description updated to v4 language
- `app/experiences/page.tsx` — OG description updated
- `app/services/page.tsx` — OG description updated
- `app/journal/page.tsx` — Description updated

### Homepage Components
- `components/home/HeroSection.tsx` — Hero text aligned to v4
- `components/home/ScrollLogoReveal.tsx` — Logo reveal text aligned to v4
- `components/home/AboutTeaser.tsx` — Bio text aligned to v4

## Language Mapping Applied

| Banned (v3) | v4 Replacement |
|-------------|----------------|
| transmedia | creative studio |
| phygital | physical + digital |
| collectible / proof / merch | artifact |
| drop | run |
| format engine | cooperative system |
| immersive experience | cooperative experience |
| projection-mapped | spatial |
| NFC-driven | removed / rephrased |
| Stories across worlds. | Stories Across Worlds. |

## Remaining Files Scanned

All `.tsx`, `.ts`, `.css`, and `.md` files were searched for banned words. No remaining instances found. The alignment is complete across the entire site.

## Notes

- The `RESEND_API_KEY` was mocked for build verification (`re_mock_key_for_build`). Production deployments will need the real key.
- No structural changes were made — this is a pure language swap.
- The site tagline is now consistently "Stories Across Worlds" (title case, locked v4).
