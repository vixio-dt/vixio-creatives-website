---
template: cc-task-spec
version: 0.2
created: 2026-04-28
status: active
---

# Claude Code Task Specification

## Metadata

- **task-id:** `vixio-website-align-v4-2026-04-28`
- **issued-by:** Aizo
- **issued-to:** claude-code-instance
- **created:** 2026-04-28
- **task-type:** refactoring

## Goal

Align all website copy, page titles, meta descriptions, and component text to the locked Vixio v4 brand positioning. Replace all v3 terminology with v4 language. Preserve all existing design, animation, and component structure — this is a language swap only, not a redesign.

## Deliverable

Updated source files in `/tmp/vixio-creatives-website/` with all v3 terminology replaced by v4 equivalents. A summary report at `/tmp/vixio-creatives-website/ALIGNMENT-REPORT.md` listing every file touched and every replacement made.

## Constraints

- **DO NOT change design, layout, animations, or component structure.** Only text content.
- **DO NOT touch `node_modules/`, `.next/`, `dist/`.**
- **Preserve all existing TypeScript types, imports, and component logic.** Only change string literals that are user-facing copy.
- **Banned words (v3) → v4 replacements:**
  - "transmedia" → "creative studio" or remove entirely
  - "phygital" → "physical + digital" or rephrase
  - "collectible" → "artifact" (when referring to physical items)
  - "proof" → "artifact"
  - "merch" → "artifact"
  - "drop" → "run" (when referring to releases)
  - "format engine" → "cooperative system"
  - "immersive experience" → "cooperative experience" or "experience"
  - "interactive" → "cooperative" (when describing the format)
  - "NFC-driven" → "artifact-driven" or remove tech jargon
  - "projection-mapped" → remove or rephrase as "spatial"
- **Service tiers must be named exactly:**
  1. "Full Vixio Experience"
  2. "Format Licensing"
  3. "Creative Direction Consulting"
- **Tagline everywhere:** "Stories Across Worlds"
- **Run references:** Run #1 = "Steel Crate Games", Run #2 = "Sanrio HK / McDull" (hedge, pre-announced)
- **Keep the scroll logo reveal animation intact.** Only change the text that appears in the hero section after the logo handoff.
- **Do not add new pages or components.** Work within existing structure.

## Applicable Disciplines

```yaml
applicable-disciplines:
  - /srv/vixio-vault/disciplines/karpathy.md
  - /srv/vixio-vault/disciplines/shanraisshan.md
```

## Review Criteria

- [ ] Every `.tsx`, `.ts`, `.css` file in `app/` and `components/` scanned for banned words
- [ ] `grep -ri "transmedia\|phygital\|collectible\|proof\|merch\|drop\|format engine\|immersive experience\|NFC-driven\|projection-mapped" app/ components/` returns zero matches (except in comments if clearly marked as legacy)
- [ ] `grep -ri "Stories Across Worlds" app/ components/` returns at least one match (tagline present)
- [ ] `grep -ri "Full Vixio Experience\|Format Licensing\|Creative Direction Consulting" app/ components/` returns matches (service tiers named)
- [ ] `grep -ri "Steel Crate Games" app/ components/` returns at least one match
- [ ] `grep -ri "cooperative system" app/ components/` returns at least one match
- [ ] `grep -ri "artifact" app/ components/` returns matches (replacing "collectible"/"proof"/"merch")
- [ ] `ALIGNMENT-REPORT.md` exists and lists all files touched with before/after examples
- [ ] `npm run build` succeeds (or `next build` if no npm script) — no TypeScript errors from text changes
- [ ] No new dependencies added
- [ ] No design tokens, CSS variables, or animation values changed

## Escalation

- If any file contains banned words in a context where replacement would break TypeScript syntax or component logic (e.g., variable names, function names, API endpoints), halt and list the file in the report for manual review.
- If `npm run build` fails due to text changes, halt and report the error.
- If the number of files needing changes exceeds 30, report the scope before proceeding (operator may want to split into waves).

## Notes

- The site has a complex scroll-driven logo reveal (`components/home/ScrollLogoReveal.tsx`) with hero text that slides in after the logo. The hero text is the primary v3 → v4 target.
- The `PillarsSection` has three pillars (Original, Services, Lab) with descriptions that need updating.
- The `AboutTeaser`, `CapabilitiesAtlas`, `FeaturedStat`, `MarqueeStrip`, and `EmailCaptureCTA` all likely contain v3 language.
- Footer (`components/layout/Footer.tsx`) likely has old positioning text.
- Page-level components in `app/about/`, `app/experiences/`, `app/services/`, `app/lab/`, `app/contact/` need review.
- The `layout.tsx` metadata (title, description, OG tags) needs updating.
- The site uses `lucide-react` for icons — do not change icon names, only text labels.

## Protocol Reference

When CC begins this task:
1. Read this entire spec file.
2. Read both applicable discipline files.
3. Apply `## Universal` sections from each discipline.
4. Apply `## When refactoring` sections if they exist.
5. Scan all source files for banned words using grep.
6. Make replacements surgically — preserve all syntax, types, imports.
7. Run `npm run build` to verify no breakage.
8. Write `ALIGNMENT-REPORT.md` with file-by-file changelog.
9. Self-check against all Review Criteria.
10. Report completion with declaration footer.
