# Design Review Results: Homepage (`/`)

**Review Date**: 2026-03-28
**Route**: `/`
**Focus Areas**: Visual Design · UX/Usability · Responsive/Mobile · Accessibility · Micro-interactions/Motion · Consistency · Performance

> **Note**: This review was conducted through static code analysis only (browser is off). Visual inspection via browser would provide additional insights into layout rendering, interactive behaviours, and actual appearance.

---

## Summary

The homepage has a well-considered design system — strong typography scale, a cohesive "Morning Light" token palette, and polished micro-interactions like staggered scroll reveals and the video intro overlay. However, several **critical accessibility failures** exist (broken label associations, missing focus trap, severe contrast failures) that must be fixed before launch. There are also meaningful UX gaps: the email form doesn't capture email, interactive-looking elements that aren't interactive, and placeholder social links. The planned video → scroll-pinned logo feature currently has no implementation path in `LogoReveal`.

---

## Issues

| # | Issue | Criticality | Category | Location |
|---|-------|-------------|----------|----------|
| 1 | `FloatingInput` label has no `htmlFor` / input has no `id` — screen readers cannot associate the label with its field | 🔴 Critical | Accessibility | `components/ui/FloatingInput.tsx:63-76`, `103-115` |
| 2 | `FullScreenMenu` has no focus trap — Tab key escapes behind the modal overlay while it is open | 🔴 Critical | Accessibility | `components/layout/FullScreenMenu.tsx:23-114` |
| 3 | `EmailCaptureSection` uses `action="mailto:"` — this opens the user's local email client, not a real capture flow; no emails are ever collected | 🔴 Critical | UX/Usability | `components/home/EmailCaptureSection.tsx:21-25` |
| 4 | `TrustSignalsBar` text uses `--outline-variant` (#C8C4BF) on `--surface-container-low` (#F5F3F0) — estimated contrast ~1.5:1, far below WCAG AA minimum of 4.5:1 for normal text | 🔴 Critical | Accessibility | `components/home/TrustSignalsBar.tsx:22-23` |
| 5 | `GradientButton` and `GhostButton` have no visible keyboard focus indicator — fails WCAG 2.4.7 (Focus Visible) | 🟠 High | Accessibility | `components/ui/GradientButton.tsx:12-31`, `components/ui/GhostButton.tsx:12-30` |
| 6 | `FullScreenMenu` overlay is missing `role="dialog"` and `aria-modal="true"` — screen readers treat it as regular page content, not a modal | 🟠 High | Accessibility | `components/layout/FullScreenMenu.tsx:29-44` |
| 7 | Scroll progress ring SVG in `OrbitalNav` has no `aria-hidden="true"` — announced as meaningless empty content to screen readers | 🟠 High | Accessibility | `components/layout/OrbitalNav.tsx:133-157` |
| 8 | `LabPreviewSection` cards have `cursor: pointer` but have no link, `onClick`, or interactive behaviour — false affordance that confuses users | 🟠 High | UX/Usability | `components/home/LabPreviewSection.tsx:29-49` |
| 9 | HeroSection CTA "Our Vision" links to `/experiences` (a product page) — semantically it should link to `/about` (the studio manifesto); mismatches user expectation | 🟠 High | UX/Usability | `components/home/HeroSection.tsx:46` |
| 10 | All social links in `OrbitalNav` and `Footer` point to `#` — non-functional placeholders that actively mislead users and degrade trust | 🟠 High | UX/Usability | `components/layout/OrbitalNav.tsx:106-121`, `components/layout/Footer.tsx:68-80` |
| 11 | `GhostButton` uses `1px solid` border; `AboutTeaser` founder avatar uses `1px solid` border — both violate the design system rule "No 1px borders — use tonal layering" | 🟠 High | Visual Design | `components/ui/GhostButton.tsx:13`, `components/home/AboutTeaser.tsx:19` |
| 12 | `LogoReveal` feature gap: after the video fades out, the logo disappears. The planned "scroll-pinned logo" experience (logo stays centred, user scrolls away from it) has no implementation path in the current component | 🟠 High | Micro-interactions | `components/ui/LogoReveal.tsx:1-45` |
| 13 | No skip-to-main-content link in layout — keyboard users must Tab through the entire fixed nav on every page load | 🟡 Medium | Accessibility | `app/layout.tsx:36-43` |
| 14 | `GradientPlaceholder` hardcodes hex values (#3AAED8, #D4A843) instead of referencing `var(--primary)` and `var(--tertiary)` CSS tokens | 🟡 Medium | Consistency | `components/ui/GradientPlaceholder.tsx:7-10` |
| 15 | `TwoTrackSection` cards are visually asymmetric on mobile: left card has `--surface-container-low` background, right card has none — they look detached on single-column layout | 🟡 Medium | Responsive/Visual Design | `components/home/TwoTrackSection.tsx:13-50` |
| 16 | `OrbitalNav` social links use `onMouseEnter`/`onMouseLeave` inline JS handlers for colour change — no keyboard focus state, and inconsistent with other hover patterns (`.text-link` CSS class) | 🟡 Medium | Consistency / Accessibility | `components/layout/OrbitalNav.tsx:115-117` |
| 17 | `LogoReveal` video has no `poster` attribute — users see a black screen while the video buffers on slow connections with no indication of what is loading | 🟡 Medium | Performance / UX | `components/ui/LogoReveal.tsx:29-42` |
| 18 | `mantine-theme.ts` sets `primaryColor: 'blue'` — Mantine's default blue does not match `--primary: #3AAED8`. Any Mantine component using `color="primary"` will render the wrong brand colour | 🟡 Medium | Consistency | `lib/theme/mantine-theme.ts:4` |
| 19 | `HeroSection` top padding is `var(--spacing-20)` (8rem) with no `paddingTop` offset for the 80px fixed nav — on short viewports the hero headline could sit behind the nav bar | 🟡 Medium | Responsive | `components/home/HeroSection.tsx:15` |
| 20 | Footer nav links have no hover state — unlike body links that use `.text-link` with underline expansion | ⚪ Low | Visual Design | `components/layout/Footer.tsx:49-62` |
| 21 | `OrbitalNav` logo specifies both `width={140}` (HTML attribute) and Tailwind `w-[100px] md:w-[130px]` (CSS) — Tailwind wins but the HTML attribute is misleading and redundant | ⚪ Low | Consistency | `components/layout/OrbitalNav.tsx:62-64` |

---

## Criticality Legend

- 🔴 **Critical** — Breaks functionality or violates accessibility standards (WCAG A/AA). Fix before launch.
- 🟠 **High** — Significantly impacts user experience, trust, or design quality.
- 🟡 **Medium** — Noticeable issue worth addressing before go-live.
- ⚪ **Low** — Polish improvement, low priority.

---

## Planned Feature: Scroll-Pinned Logo (Video → White BG → Scroll Away)

The engineer intends to implement this flow:

```
[Full-screen black bg + logo video plays]
         ↓
[Black bg fades → white bg revealed]
         ↓
[Logo stays centred — user must scroll down to leave it]
         ↓
[Normal page content scrolls in from below]
```

**Current state of `LogoReveal`**: The overlay fades out (`opacity: 0`) and is unmounted (`phase === 'done'`). Nothing persists.

**Recommended implementation approach**:

```
Phase 1 — Video plays (current: ✅)
Phase 2 — Black bg fades out, revealing white surface (current: partially ✅, but also hides logo)
Phase 3 — Logo extracted from video frame OR static SVG fades in at centre of screen
Phase 4 — Full-viewport "logo hero" section uses `position: sticky` + `height: 100vh` so
           the logo stays pinned as the user scrolls into content below
Phase 5 — OrbitalNav logo cross-fades in as user scrolls past the hero logo section
```

**Key files to create/modify**:

| File | Change |
|------|--------|
| `components/ui/LogoReveal.tsx` | Add Phase 3: after fade, keep logo SVG visible centred |
| `components/home/LogoHero.tsx` | New: a `position: sticky` full-viewport section with centred logo |
| `app/page.tsx` | Wrap `LogoHero` before `HeroSection` |
| `components/layout/OrbitalNav.tsx` | Hide/show nav logo based on scroll position past `LogoHero` |

---

## Next Steps (Prioritised)

1. **🔴 Fix label/input association** in `FloatingInput` — add `id` to inputs and `htmlFor` to labels (Issue #1)
2. **🔴 Add focus trap** to `FullScreenMenu` — use Mantine's `FocusTrap` component which is already in the library (Issue #2)
3. **🔴 Replace mailto form** — integrate a real email service (Resend, Mailchimp, ConvertKit) or at minimum a fetch-based handler (Issue #3)
4. **🔴 Fix contrast** on `TrustSignalsBar` — change text colour to `var(--on-surface-variant)` (#555) or darken the label (Issue #4)
5. **🟠 Add focus rings** to `GradientButton` and `GhostButton` via CSS `:focus-visible` (Issue #5)
6. **🟠 Add `role="dialog"` and `aria-modal`** to `FullScreenMenu` overlay (Issue #6)
7. **🟠 Add `aria-hidden`** to scroll progress SVG (Issue #7)
8. **🟠 Make lab cards clickable** — wrap in `<Link href="/lab">` or add per-item links (Issue #8)
9. **🟠 Plan and implement scroll-pinned logo feature** (Issue #12)
10. **🟡 Replace social link `#` hrefs** with real URLs or remove them (Issue #10)
