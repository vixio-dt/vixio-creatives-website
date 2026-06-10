# ADR-11: Motion lives inside media; chrome is static

Motion budget (MOTION_INTENSITY 4): tiles and section content enter with a single whileInView fade-and-rise (24px, 0.6s, ease [0.16, 1, 0.3, 1], once: true); tile media scales to 1.02 on hover inside the tile's overflow-hidden bounds; the featured viewport's text block fades up on mount. That is the complete motion inventory. Nav and footer never animate. No marquees, no parallax, no scroll-driven choreography, no GSAP.

Every animation collapses under prefers-reduced-motion: framer-motion paths gate `initial` on `useReducedMotion()`, CSS transitions sit behind the global reduced-motion override, and `scroll-behavior: smooth` moves behind a `prefers-reduced-motion: no-preference` media query (fixing a gap in the previous system). Scroll observation is IntersectionObserver or whileInView only; `window.addEventListener('scroll')` remains banned.

## Consequences

Motivations on file (taste-skill rule, one sentence each): in-view reveals communicate reading order on a long slate; hover scale signals that a tile is interactive media; the hero fade marks page arrival. Anything beyond this inventory needs a new ADR.
