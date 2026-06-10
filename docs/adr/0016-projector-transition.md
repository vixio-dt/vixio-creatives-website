# ADR-16: The logo animation becomes a projector transition between hero and slate

Second founder revision, 10 June 2026, superseding ADR-15's placement: the opening prelude's fade-out read as unprofessional. The logo animation moves to the seam between the Featured Work and the first slate section and plays as a projector turning on: the show is starting. There is NO fade-out: the logo flickers on (lamp ignition), the light beam sweeps once, the mark holds at full brand color with a low ambient glow, and then the section simply scrolls away under the incoming slate. The scroll itself is the exit.

Decisions:

1. The component is `LogoTransition` (LogoPrelude deleted), 200vh (an interstitial, not an opening), rendered between FeaturedWork and the slate sections on `/` only. Decorative, `aria-hidden`, no text.
2. Timeline over the scrub: ignition flicker (opacity stutters up like a lamp striking, deblur, settle by ~0.30), beam sweep (the cyan streak crosses once mid-scrub), hold (full opacity, glow settled to a low ambient level, until the sticky releases). No opacity, scale, or y exit ramps.
3. The nav-hold from ADR-15 is removed entirely (CSS and machinery): the transition is mid-page, the featured work is back in the first viewport, and criterion 1 holds again for every visitor.
4. Reduced motion: renders nothing, as before.

## Consequences

The homepage first viewport is the featured work again for all users; the cinematic costs nothing at page entry. The projector metaphor binds the brand mark to the act of showing work rather than to a self-introduction, which is the most label-faithful job a logo animation can have.
