# ADR-10: Placeholder treatments, per slot, keyed to PLACEHOLDER-ASSETS.md

Every media slot renders a designed object until its real asset lands, keyed by PLACEHOLDER-ASSETS.md ID. Treatments are built from three permitted materials only: paper fields, ink typography, and the logo's own geometry (triangle, bar, circle), with brand cyan allowed as light (never as text, never as paint over text). No gray boxes, no stock, no generated imagery presented as real work.

Per-slot spec for the slots this restructure ships:

- **HOME-HERO-01** (featured viewport): flat paper field with one oversized, cropped ink rendering of the logo's triangle geometry bleeding off-frame; a single soft cyan light gradient may cross it; the text block (promise, title, status, verb) sits on paper, in ink.
- **HOME-SLATE-TILE-01** (film tile, reserved while the film is featured): ink-on-paper typographic tile, title set in Space Grotesk, hairline border.
- **HOME-SLATE-TILE-02** (object tile): paper tile with a hairline-drawn plinth glyph (simple geometric line drawing) above the tile's standard title and status lines. The asset doc's interim caption "Object No.001 / In development" is superseded by ADR-04's "Untitled Edition".
- **STUDIO-HERO-01, STUDIO-FOUNDER-01, STUDIO-PROCESS-01**: typographic sections, no image, per the asset doc's interim treatments (founder portrait is never generated).
- **META-OG-01**: regenerated white card, wordmark on paper; if offline generation is impossible during the run, the slot is listed as pending in the closing report rather than shipping a mismatched dark card silently.
- **META-FAVICON-01**: `app/icon.svg`, the logo's triangle mark with the brand gradient, vector-only; raster sizes listed as pending assets.

## Consequences

Treatments live in one component keyed by PlaceholderId, so a landed asset replaces a treatment by changing the slate entry, not the components. The simple-geometric-mark exception of the taste skill covers these treatments; nothing more illustrative may be hand-rolled.
