# ADR-02: ScrollLogoReveal is retired, dead code removed

The 400vh scroll-driven logo intro (components/home/ScrollLogoReveal.tsx) is retired and deleted, together with its legacy support tokens (--ink family, --logo-width) and the rejected dark system it was tuned for. The white-catalog doctrine puts the Featured Work in the first viewport, full bleed, with zero scroll; a four-screen logo cinematic before any work appears is chrome-as-hero and self-description, the two things the reference family never does.

## Considered options

- Adapt to white: rejected. The animation's value was its glow-and-streak physics on near-black; on paper white the same math reads as a watermark fading in, and it would still cost the visitor four viewports before the slate.
- Relocate to /studio: rejected. The studio page is the factual page; a cinematic intro there inverts its job.

## Consequences

The AGENTS.md "Learned User Preferences" entries favoring a scroll-scrubbed logo reveal describe the rejected June 2026 dark direction and are superseded by this decision (Compass v2.0 and the white-catalog brief outrank them). The square logo remains available as brand geometry for placeholder treatments. If a logo moment is ever wanted again, it must live inside a media tile, not in chrome.
