# ADR-03: Status taxonomy, industry-plain, the only catalog headers

The Slate uses a four-state status vocabulary: `in-production` (displays "In Production"), `in-development` (displays "In Development"), `coming` (displays "Coming {year}"), `released` (displays "Watch" for films, "Shop" for objects; exact released-state wording confirmed at first release). Only the first two render today. Within the catalog, these display strings are the only section headers; on tiles the status renders as a single quiet line, fused with the year when one is public ("In Production, 2026").

## Considered options

- "Now Playing / Coming Soon" (theatrical vocabulary): rejected; nothing is playing, and "coming soon" is banned deficit framing. "In Production" and "In Development" are what production companies and sales agents actually print for unreleased slates, which is the honest precedent at N=1.
- Year-based headers ("2026"): rejected; a year is not a status and collapses when two works share one.

## Consequences

The homepage at N=1 renders the Featured Work (status on the tile, no duplicate header above it) and one "In Development" section. No status section ever renders empty: sections are derived from the slate data, so a status with zero works produces no header. Status display strings live in the copy module, keeping zh-Hant and zh-Hans unblocked.
