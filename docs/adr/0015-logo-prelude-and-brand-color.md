# ADR-15: Logo prelude returns (founder revision), brand gradient in media geometry

On 10 June 2026 the founder reviewed the shipped white catalog and asked for two revisions: the opening logo scroll back, leading into the white system, and more brand color. This supersedes ADR-02's verdict in part: the verdict changes from "retire" to "adapt to white as a prelude". The original animation math (preserved in git history at c487b87) is adapted, not rewritten.

Decisions:

1. **LogoPrelude**: a 300vh scroll-scrubbed section above the Featured Work on `/` only. Paper background throughout (seamless handoff). Phases: emergence (logo deblurs and fades in), light pass (soft cyan glow plus a cyan anamorphic streak, the dark system's white streak restyled for paper), a centered hold in full brand colors, pull-back, handoff. The prelude contains NO text and no duplicated hero: the existing FeaturedWork section remains the hero and follows it.
2. **Nav hold**: the site nav hides while the prelude is active and fades in as it completes (founder preference from the dark era, carried forward). Other routes unaffected.
3. **Honest fallbacks**: under prefers-reduced-motion the prelude renders nothing, so reduced-motion users, crawlers, and criterion-1 audits keep the featured work in the first viewport. The cinematic costs one scroll for everyone else; the founder chose that trade knowingly.
4. **Brand gradient in media geometry**: the logo's cyan-to-gold gradient (`--vixio-gradient`, restored) may fill logo-derived geometry inside media treatments (the hero and film-tile triangles) and the prelude's light effects. It remains banned as a UI color: no gradient text, buttons, borders, or chrome. ADR-01's accent system for interactive states is unchanged; gold still never carries text or UI meaning.
5. The hero cyan light rises from 0.12 to 0.16 peak alpha; nav and footer link hovers shift from ink to `--accent` (#15718F, 5.30:1, passes non-text and text thresholds).

## Consequences

Success criterion 1 ("featured title visible with zero scroll") now holds for the reduced-motion path and for every route entry except the motion-enabled homepage first visit, where the slate is one prelude below; this is a deliberate founder override, not drift. ADR-11's motion inventory gains exactly one item: the scroll-scrubbed prelude (scroll-driven values via framer-motion useScroll on a ref target; still no raw scroll listeners, chrome itself still never animates, the nav-hold is a visibility gate rather than an animation of chrome).
