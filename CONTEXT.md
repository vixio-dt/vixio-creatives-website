# Vixio Creatives Website

The public, Layer 3 surface of Vixio Creatives Limited: a white, catalog-first label site where the slate of work is the homepage and the label never describes itself outside the studio page, the footer descriptor, and metadata. Governed by Company Compass v2.0 (9 June 2026).

## Language

### The catalog

**Slate**:
The complete list of works the label publicly acknowledges. At present: one provisional work ("Untitled work", 2026, in development). Nothing else exists publicly (ADR-17).
_Avoid_: portfolio, projects, pipeline, roadmap

**Work**:
A single entry on the Slate, presented publicly as title, year, and status only.
_Avoid_: piece, drop, asset, product

**Status**:
The industry-plain production state of a Work. Statuses are the only section headers inside the catalog. Current vocabulary: In Production, In Development; reserved for later: Coming (year), Watch, Shop.
_Avoid_: stage, phase, "coming soon"

**Kind**:
The internal category of a Work: film, object, or labs. Kinds organize data and future navigation, never tile copy. Public category words, used only in navigation and on the studio page when unavoidable: Films, Objects, Notes.
_Avoid_: "visual studies", "experiences", "playable", any invented hybrid

**Featured Work**:
The Slate entry that owns the homepage first viewport, full bleed. Exactly one entry is featured.
_Avoid_: hero project, flagship

**Untitled Convention**:
The film-industry naming pattern for unreleased, unnamed works. Current string: "Untitled work" (ADR-17); "Untitled collaboration" becomes permitted once a collaboration is agreed; the real title appears once written public permission exists. Internal codenames never appear in public copy.
_Avoid_: Signal Reel, No.001, Meta-Drop, Track 1/2, Move 1/2/3

### The page

**Catalog**:
The portion of the homepage that renders the Slate: the featured viewport plus status-headed sections.
_Avoid_: gallery, showcase

**Chrome**:
Everything that is not catalog, newsletter, or page content: navigation bar, footer. Chrome recedes to near zero and never animates.
_Avoid_: shell, frame

**Functional Verb**:
The register for every interactive label: Notify me, Subscribe, Send, Contact (reserved: Watch, Shop). Never decorative, never enthusiastic. Every click target on the site is a Work title or a Functional Verb.
_Avoid_: CTA copy, marketing verbs ("Discover", "Explore", "Dive in", "Learn more")

**Newsletter**:
The relationship channel: a first-class homepage object with expectation-setting copy and a real capture path (the frozen buyer payload). Success and error states are real, never simulated.
_Avoid_: waitlist, drop list, mailing blast

**Status Header**:
A Status term used as a catalog section heading. Inside the catalog, Status Headers are the only headers.
_Avoid_: section eyebrow, category header

**Placeholder Treatment**:
The designed interim rendering of a media slot before a real asset lands, keyed to a PLACEHOLDER-ASSETS.md ID: typographic tiles, flat paper fields, logo geometry. Never gray boxes, stock photos, or fake renders presented as real work.
_Avoid_: placeholder image, mockup

### The brand

**Slogan**:
The brand slogan, canonical wording "Stories Across Worlds" (ADR-17). Rendered on-site in sentence case, "Stories across worlds", in the featured viewport's quiet promise line; at most once on the homepage, never styled as an eyebrow, never all caps.
_Avoid_: mission statement, all-caps rendering

**Descriptor**:
The locked public one-liner: "Vixio develops new expressions of selected story worlds with creators and rights holders." Lives in the footer and metadata; the studio page carries the fuller positioning (ADR-17).
_Avoid_: tagline

### The grammar (ADR-17)

**Gateway**:
One of four forms a new expression of a world may take: Signal (Discovery), Episode (Continuation), Edition (Ownership), Encounter (Presence). Creative grammar, not four compulsory packages; a project may take one form or several. Appears only on `/studio` and future work detail pages, never on the homepage. There is no fifth gateway: Artifact is a possible element within Edition, distribution is infrastructure, continuation is a broader objective.
_Avoid_: service, package, tier, offering; gateway names as CTAs

**Paper**:
The white surface family of the design system (#FAFAF8 base). The site has one locked light theme.
_Avoid_: cream, beige, bone

**Ink**:
The near-black text and UI color family (#121417 base), derived from the retired dark system's surface color.
_Avoid_: black (pure #000000 is banned)

### Deferred lanes

**Labs**:
The experimental R&D lane (Compass Track 2). Deferred from the public site until a Labs release clears the craft bar; the Slate data model already carries the kind so adding it is a data change.
_Avoid_: experiments page, sandbox, R&D showcase (in public copy)

**Notes**:
Label-voice writing (production notes, release notes). Deferred until real content exists. Never the personal Scout Notes voice.
_Avoid_: blog, journal, articles
