# ADR-01: Ink-primary UI on paper white, brand cyan as a dual-value accent

Brand cyan #3AAED8 measures 2.44:1 against the paper surface and 2.32:1 against pure white: it fails WCAG AA for text (4.5:1) and even for non-text UI (3:1). We ship an ink-primary UI (near-black text, buttons, and links) with the brand cyan expressed as ONE accent in two values: an accessible darkened variant `--accent` #15718F (same ~196 degree hue) for interactive states that must pass contrast (focus rings, form focus borders, inline links), and the true brand value #3AAED8 confined to non-text moments inside media treatments and the logo, where contrast rules do not apply. Gold #D4A843 (2.12:1) remains logo-only and has no UI token.

## Token table (computed WCAG 2.1 relative-luminance ratios, 10 June 2026)

| Token | Value | Against | Ratio | Requirement | Verdict |
|---|---|---|---|---|---|
| `--surface` | #FAFAF8 | n/a | n/a | page background | paper |
| `--surface-raised` | #F4F4F2 | n/a | n/a | bands, cells | paper-raised |
| `--text` | #121417 | #FAFAF8 | 17.66:1 | 4.5:1 body | PASS (AAA) |
| `--text` on raised | #121417 | #F4F4F2 | 16.75:1 | 4.5:1 | PASS (AAA) |
| `--text-secondary` | rgba(18,20,23,0.72) | #FAFAF8 | 7.25:1 (effective #535456) | 4.5:1 | PASS (AAA) |
| `--text-muted` | #5C6167 | #FAFAF8 | 5.98:1 | 4.5:1 (used at small sizes) | PASS |
| `--accent` | #15718F | #FAFAF8 | 5.30:1 | 4.5:1 text, 3:1 non-text | PASS |
| `--accent` | #15718F | #FFFFFF | 5.54:1 | 4.5:1 | PASS |
| `--error` | #A8231B | #FAFAF8 | 6.88:1 | 4.5:1 | PASS |
| button: paper on ink | #FAFAF8 | #121417 | 17.66:1 | 4.5:1 | PASS (AAA) |
| `--line` | rgba(18,20,23,0.14) | #FAFAF8 | 1.34:1 | none (decorative hairline) | n/a |
| `--accent-media` | #3AAED8 | #FAFAF8 | 2.44:1 | none (non-text, inside media only) | CONFINED |
| gold (logo asset only) | #D4A843 | #FAFAF8 | 2.12:1 | none (logo artwork) | CONFINED |

## Considered options

- Darkened cyan as the primary interactive color (cyan buttons, cyan links everywhere): rejected. The reference family (a24films.com, neonrated.com) is ink-on-white; a saturated blue-cyan button system would read as SaaS, not label, and would make the accent the loudest thing on a page whose argument is the slate.
- Raw brand cyan with large-text-only usage: rejected; 2.44:1 fails even the 3:1 large-text floor.

## Consequences

`--error` is a functional state color, not a second accent (form validation only). The one-accent audit counts `--accent` and `--accent-media` as a single brand-cyan system. Cyan may appear as light inside placeholder treatments (per PLACEHOLDER-ASSETS.md art direction "cyan as light, not paint") without contrast obligations because it never carries text or interactive meaning there.
