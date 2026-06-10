# ADR-12: Type, spacing, and a single all-sharp radius system

Typography: Space Grotesk 700 for display (tracking -0.02em; featured title clamp(2.5rem, 7vw, 5.5rem); tile titles clamp(1.5rem, 3vw, 2.25rem)); Manrope 400/500 for body (1rem, line-height 1.6, max 65ch). Status Headers are sentence case Space Grotesk 700 at clamp(1.125rem, 2vw, 1.375rem) in ink: deliberately NOT the uppercase-tracked eyebrow signature, which keeps the mechanical eyebrow count at zero site-wide. Tile status lines are Manrope 500, 0.9375rem, `--text-muted` (5.98:1, passes AA at small sizes). Casing is sentence case everywhere; no all-caps headers.

Radius: ONE system, all-sharp (0px) on every element: tiles, buttons, inputs, cards. The catalog reference family is sharp-edged; the previous pill system reads consumer-app on white. Focus rings are 2px `--accent` with 2px offset.

Spacing: gallery density (VISUAL_DENSITY 2): section padding clamp(4rem, 10vw, 8rem) vertical; content max-width 1280px with 1.5rem gutters; the featured viewport is full-bleed (no max-width). Buttons: minimum 44px height, ink fill with paper text (primary) or 1px ink border (secondary), hover translateY(-1px), active scale(0.98).

## Consequences

Dials declared per the taste skill: DESIGN_VARIANCE 6, MOTION_INTENSITY 4, VISUAL_DENSITY 2; the redesign-overhaul "+2 variance" default is overridden by the design read (catalog sites are structurally calm; the variance lives inside tile media, not in layout chaos). Theme is locked light-only per the taste skill's single-theme override clause, mirroring (and replacing) the dark system's documented one-theme decision.
