# PRD: White-Catalog Restructure

Status: ready-for-agent
Source: RESTRUCTURE-PLAN-V2.md (the plan), CONTEXT.md (glossary), docs/adr/0001..0014 (decisions). The plan's copy deck is final; this PRD does not restate strings.

## Problem Statement

A visitor landing on vixiocreatives.com today meets a four-viewport dark logo cinematic, a manifesto, category-explainer cards, and internal codenames ("Signal Reel No.001", "visual studies") before any work. An industry contact cannot tell within one viewport what is out now and what is next; a fan has no relationship channel on the homepage; and the copy violates the label's own public-copy doctrine.

## Solution

A white, catalog-first site in the structural family of the reference labels: the Slate is the homepage, every Work reads as title + year + status, status terms are the only catalog headers, the newsletter is a first-class object with a real capture path, and self-description exists only on the studio page, the footer descriptor, and metadata. Architecture honest at a slate of one and scaling to fifty by data changes alone (lib/slate.ts).

## User Stories

1. As an industry contact, I want to see the lead work's title, year, and status in the first viewport, so that I know the label's state within one glance.
2. As an industry contact, I want a plain Contact path from any page, so that I can open a conversation without hunting.
3. As an industry contact, I want the studio page to state what the label is, who runs it, and its honest stage in a few declaratives, so that I can qualify it quickly.
4. As a story-world fan, I want a newsletter signup that tells me what I will get and how often, so that I can follow releases without spam anxiety.
5. As a fan who subscribes, I want real success and error feedback, so that I know whether I am actually on the list.
6. As a returning visitor, I want the slate organized by production status, so that I can see what moved since my last visit.
7. As a keyboard user, I want a skip link, visible focus rings, and a sane heading outline, so that I can navigate without a pointer.
8. As a reduced-motion user, I want every animation to collapse, so that the site is still under my settings.
9. As a screen-reader user, I want form errors announced via live regions and tied to inputs, so that failures are not silent.
10. As a mobile visitor, I want the featured work legible at 390x844 with zero scroll, so that the slate works on a phone.
11. As the founder, I want every visible string in one typed module, so that copy audits and future Chinese locales are mechanical.
12. As the founder, I want adding a work to be a data-only change, so that the site grows without redesign.
13. As the founder, I want internal codenames impossible to leak, so that public copy stays Layer 3 safe.
14. As a rights holder reading the site, I want no claims of partnerships, portfolios, or social proof that do not exist, so that the label reads honest.
15. As a visitor who mistypes a URL, I want a branded 404 with a way home, so that dead ends recover.
16. As a future maintainer, I want the rejected dark system gone (not commented out), so that the codebase has one design language.
17. As a future maintainer, I want placeholder media slots keyed to PLACEHOLDER-ASSETS.md IDs, so that landing a real asset is a data swap.
18. As a visitor on a slow connection, I want the site static-first with motion as enhancement, so that content renders before JavaScript.
19. As an SEO crawler, I want per-route metadata and an OG card consistent with the white system, so that link previews match the brand.
20. As a visitor using the contact form, I want labels above inputs and inline validation, so that I can complete it without guesswork.

## Implementation Decisions

- All visible strings come from the typed copy module; all slate content from the typed slate module (ADR-05, ADR-14). Components never define strings.
- Ink-primary UI on paper white; accent is darkened brand cyan #15718F for interactive states; raw cyan and gold confined to media/logo (ADR-01, full token table in the plan).
- ScrollLogoReveal and the five old home sections are deleted, with their legacy tokens (ADR-02).
- Status taxonomy and display strings per ADR-03; sections derived from data; empty statuses render nothing.
- Navigation is wordmark + Studio + Contact; no category routes at current N (ADR-07); Labs and Notes deferred (ADR-08).
- Newsletter posts the FROZEN `{type:'buyer', contact}` payload; industry form posts the FROZEN creator payload; `app/api/` and `lib/supabase.ts` are untouched and field names never change (ADR-09).
- One all-sharp radius system, sentence-case status headers, zero eyebrows (ADR-12). Motion inventory fixed by ADR-11.
- The single contact CTA string is "Contact" everywhere (ADR-13).

## Testing Decisions

- No test framework exists in this repo; the verification gate is `npm run typecheck && npm run lint && npm run build` (offline builds set NEXT_FONT_GOOGLE_MOCKED_RESPONSES), run by the implementing agent per slice and by the orchestrator on the merge commit.
- Two mechanical scans gate every copy-touching commit: the ban-list grep over lib/copy.ts and lib/slate.ts, and the em/en-dash grep over app, components, lib (commands in the plan, Section 9).
- The orchestrator runs the taste-skill Section 14 Pre-Flight and the plan's accessibility checklist as a structured review on every slice diff.
- Behavioral seams: the frozen API contract is the only external seam and is exercised by diff inspection (field names, payload shapes), not by live POSTs.

## Out of Scope

- Any change to `app/api/contact/route.ts`, `lib/supabase.ts`, or payload field names.
- New routes for Films / Objects / Notes / Labs; slate detail pages.
- i18n runtime; only the copy-module shape that keeps locales unblocked.
- New dependencies of any kind.
- Real media assets (tracked as pending slots by PLACEHOLDER-ASSETS.md ID in the closing report).

## Further Notes

Issues 01 through 05 in this directory are the ordered vertical slices from the plan's Section 10. Subagents must read the issue file plus the plan sections it references before touching code, and must report verification-gate output verbatim.
