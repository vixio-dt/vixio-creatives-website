# Placeholder Asset Map: Vixio Website (White Catalog Edition)

Every image/video slot on the restructured site, keyed by ID. Use this document to brief future image/video generation (or shoots). Until an asset lands, the site renders the listed interim treatment: a designed object, never a gray box, never stock, never a fake render presented as real work.

**Global art direction for ALL generated media:**
- Cinematic, restrained, gallery-grade. Paper-white and ink-black world with the brand cyan (#3AAED8) as light, not paint. Gold only where the logo itself appears.
- No text inside generated images. No watermarks. No recognizable IP, characters, or franchise references. No faces presented as real people. Film grain welcome, plastic AI sheen banned.
- Stills: shallow depth, motivated light, one subject per frame. Video: slow, deliberate camera moves (push-in, drift), 24fps feel, loopable.
- Legal gate: any frame from Signal Reel No.001 ships only after the lawyer read and release. Until then its slots use the abstract treatments below.

---

## Home

### HOME-HERO-01 · Featured work hero
- **Placement:** first viewport, full-bleed, the A24/NEON move: the current slate lead with title + status only.
- **Format:** video loop 6 to 10 s, 16:9 (2560x1440 master), under 8 MB web encode (AV1/H.265 + poster JPG fallback 2560x1440).
- **Represents:** Signal Reel No.001 before release; later, whatever leads the slate.
- **Generation prompt (video):** "Abstract cinematic loop: a dark doorway of light opening in a field of soft paper-white haze, volumetric cyan light bleeding through, slow push-in, film grain, anamorphic flare hinted, no text, no characters, loopable, 8 seconds."
- **Interim treatment:** flat paper field with the logo geometry (triangle, hourglass, circle) as oversized cropped shapes in ink, title set in Space Grotesk.

### HOME-SLATE-TILE-01 · First film tile (public title per ADR-04: "Untitled Vixio Film")
- **Format:** still, 16:9 (1920x1080) plus 4:5 crop (1080x1350) for mobile/social reuse.
- **Represents:** the first film, pre-release. Post-release: a real still replaces it.
- **Generation prompt:** "Single empty cinema seat in a white void studio, one blade of cyan light across the floor, photographic, 35mm grain, quiet and monumental, no text."
- **Interim treatment (as shipped):** ink-on-paper tile, hairline border, brand triangle glyph in solid ink; the tile's title and status lines ("Untitled Vixio Film" / "In Production, 2026") render from lib/slate.ts outside the treatment. Internal codenames never appear in rendered copy.

### HOME-SLATE-TILE-02 · Artifact drop tile
- **Format:** still, 4:5 (1600x2000), object-photography register.
- **Represents:** the small-run physical artifact (in development). Replace with REAL product photography when the object exists; do not fake the object itself before then.
- **Generation prompt (mood only, not the product):** "Empty museum display plinth under a soft spotlight, paper-white seamless backdrop, faint cyan rim light, medium format product photography mood, no object, no text."
- **Interim treatment (as shipped):** paper tile with a hairline-drawn plinth glyph; the tile's title and status lines ("Untitled Edition" / "In Development", per ADR-04) render from lib/slate.ts outside the treatment.

### HOME-SLATE-TILE-03 · Vixio Labs tile (optional lane)
- **Format:** still, 16:9 (1920x1080).
- **Represents:** the experimental R&D lane. Only ships if the Labs lane is on the site, always labeled R&D.
- **Generation prompt:** "Macro shot of light refracting through glass prisms on a white table, cyan spectral edge, experimental laboratory mood, photographic grain, no text."
- **Interim treatment:** paper tile, ink wordmark "Labs" with the logo hourglass glyph.

### HOME-NOTES-CARD-01 · Notes/journal feed card (if notes route ships)
- **Format:** still, 3:2 (1800x1200), one per note; this entry defines the TEMPLATE.
- **Represents:** label-voice writing (production notes, release notes). Never the personal Scout Notes voice.
- **Generation prompt template:** "Editorial still life for an essay about <note subject>: <one concrete object> on white paper, directional daylight, ink shadow, photographic, no text."
- **Interim treatment:** white card, ink headline, hairline rule.

## Studio

### STUDIO-HERO-01 · Studio atmosphere
- **Format:** still, 21:9 (2560x1097).
- **Represents:** the working studio. STRONG PREFERENCE: real photography of the actual Hong Kong workspace or city texture shot by/for Denis. Generate only as a stopgap.
- **Generation prompt (stopgap):** "Hong Kong rooftop at dawn, white sky, soft haze over the harbour, quiet and cinematic, muted palette with one cyan accent in signage distance, photographic, no text, no people."
- **Interim treatment:** typographic band, no image.

### STUDIO-FOUNDER-01 · Founder portrait
- **Format:** still, 4:5 (1600x2000), B&W or muted color.
- **Represents:** Denis Tam. DO NOT GENERATE. Real portrait only (phone + window light is acceptable; B&W hides a lot). Until supplied, the section stays typographic.
- **Interim treatment:** name + role typographic block (current design).

### STUDIO-PROCESS-01 · Craft/process visual
- **Format:** still, 16:9 (1920x1080).
- **Represents:** the human-directed, AI-assisted pipeline, abstractly. Never a fake screenshot of tools.
- **Generation prompt:** "Storyboard sheets and a single pencil on a white drafting table, overhead shot, hard daylight shadow, one sheet catching faint cyan screen-glow from off-frame, photographic, no readable text or drawings."
- **Interim treatment:** omit; the AI-stance statement carries the section.

## Contact

### CONTACT-NONE
No imagery. The contact page stays typographic by design. Forms and the mailto line are the content.

## Site chrome and meta

### META-OG-01 · Open Graph card
- **Format:** still, 1200x630 PNG.
- **Represents:** the label. White version: wordmark in ink/brand gradient centered on paper-white, faint cyan glow.
- **Production:** regenerate from `public/vixio-wordmark.svg` (script precedent exists; previous dark og.png was generated the same way).

### META-FAVICON-01 · Favicon/app icons
- **Format:** 512, 192, 64, 32 px PNG + ICO from the logo's circle-and-triangle geometry (square lockup crops poorly at 16px; use the "o" circle mark or the "v" triangle alone).

## Slate detail pages (template, applies to every future entry)

### SLATE-DETAIL-HERO-XX · Per-entry hero, 21:9, real still/key art once released; pre-release uses the entry's tile treatment scaled up.
### SLATE-DETAIL-STILLS-XX · 3 to 6 stills, 16:9, real frames only, post-release.
### SLATE-DETAIL-LOOP-XX · Optional 5 s hover/ambient loop per entry, 16:9, under 4 MB.

---

**Workflow when an asset lands:** drop the file in `public/media/<slot-id>/`, reference it from the slate data (`lib/slate.ts`) or component, delete the interim treatment, run the taste-skill pre-flight on the affected page, commit as `content: <SLOT-ID> live asset`.
