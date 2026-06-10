# Claude Code Prompt: Vixio Website Restructure v2 (White Catalog Edition)

**How to run:** open Claude Code in the `vixio-creatives-website` repo root with the model set to Fable 5 (max effort). Paste everything below the line as the first message. The session is expected to run the full pipeline unattended: setup, alignment, plan, build, review, merge.

---

## ROLE AND ORCHESTRATION MODEL

You are Fable 5 at maximum effort. You are the orchestrator, design lead, brand guardian, and final reviewer for a complete restructure of this website. You do not write production code yourself. You:

1. Plan and decide everything (design, IA, copy, architecture).
2. Delegate ALL implementation to Sonnet subagents via the Task tool (`model: sonnet`), in small, verifiable slices.
3. Review every slice yourself against the checklists in this prompt before it merges.
4. Own the git history: feature branch, conventional commits per slice, merge to main only after your final review passes.

Autonomy rule: answer your own questions, always in line with the Company Compass and this brief. You may ask the founder at most ONE question in the entire run, and only if a decision is genuinely existential. Otherwise zero questions; decide and log the decision in the plan.

## STEP 0: INSTALL THE TWO SKILL FRAMEWORKS

Before anything else:

```
npx skills@latest add Leonxlnx/taste-skill        # frontend taste framework (design-taste-frontend v2)
npx skills@latest add mattpocock/skills            # engineering harness and pipeline
```

- **taste-skill (`design-taste-frontend`)** governs ALL frontend design output: read its SKILL.md fully before planning, run its Section 14 Pre-Flight Check on every page before any slice merges. Its redesign protocol (Section 11) applies: this is Redesign - Overhaul with content preservation rules.
- **mattpocock/skills** is the engineering process. Run `/setup-matt-pocock-skills` configured for: issue tracker = local files (`docs/issues/`), docs location = `docs/`. Then use the pipeline below. Where a skill normally interviews the human (`/grill-with-docs`, `/grill-me`), run it in self-answer mode: generate the grilling questions, answer them yourself from the canon in this prompt, and record the Q&A in the doc it produces.

## PIPELINE (run in this order)

1. **Audit.** Read `DESIGN.md`, `REDESIGN-PLAN.md`, `PLACEHOLDER-ASSETS.md`, `AGENTS.md`, `git log`, and every file in `app/` and `components/`. Produce the taste-skill Section 11.B audit (brand tokens, IA, content blocks, patterns to preserve/retire, dial reading, SEO baseline).
2. **Shared language.** Run `/grill-with-docs` (self-answer mode) to create `CONTEXT.md`: define the project's ubiquitous language (slate, world, visual study, drop, label voice, Layer 3, the bar, etc.) and record irreversible decisions as ADRs in `docs/adr/`.
3. **Plan.** Write `RESTRUCTURE-PLAN-V2.md` per the PLAN REQUIREMENTS section below. This is your max-effort deliverable; everything downstream executes it.
4. **PRD and issues.** Run `/to-prd` on the plan, then `/to-issues` to break it into vertical slices in `docs/issues/`. Each issue must be independently buildable and verifiable (typecheck + lint + build green).
5. **Execute.** For each issue, spawn a Sonnet subagent with: the issue, the relevant plan sections, the taste-skill rules, and the copy ban list. Frontend slices follow taste-skill; logic slices (forms, slate data model) follow `/tdd` where a test target exists (Playwright is already a devDependency). One conventional commit per issue.
6. **Review loop.** After each slice: you (Fable 5) review the diff against the plan, the taste-skill Pre-Flight, the copy bans, and WCAG AA. Reject and re-dispatch with specific findings until clean. Use `/diagnose` for any stubborn bug, `/zoom-out` when a subagent loses architectural context.
7. **Architecture pass.** Before final merge, run `/improve-codebase-architecture` once; apply only changes that reduce complexity.
8. **Finalize.** Full-site Pre-Flight, regenerate `DESIGN.md` to match the shipped system, update `README.md` and `AGENTS.md`, merge the branch to main with a no-ff merge commit, leave the working tree clean.

## COMPANY CONTEXT (canon, non-negotiable)

Vixio Creatives Limited, Hong Kong. Founder & Executive Producer: Denis Tam. Governed by Company Compass v2.0 (9 June 2026). Where anything conflicts with the Compass, the Compass wins.

Public (Layer 3) identity, locked:
- Descriptor: "A creative label for story-rich worlds."
- Hero promise: "Worlds worth entering."
- Publicly, Vixio makes: visual studies (short cinematic pieces, AI-assisted production under human direction), films, and gallery-grade physical objects in small runs.
- Stage honesty: the first release, Signal Reel No.001, is in production for 2026. There is no shipped catalog. The site may show a slate of work in progress but must never fake a portfolio or invent clients, testimonials, press quotes, or social proof.

HARD COPY BANS, zero tolerance in any visible string:
- underserved, deserve, deserves, overlooked, forgotten, rescue, revive
- adapt, adaptation, "best expression", "the worlds we love", "partner with existing IP", world-first
- Any real IP, franchise, or title name. Ever.
- Em-dash and en-dash characters anywhere visible. Use periods, commas, colons, hyphens.
- innovate, disrupt, transform, cutting-edge, elevate, seamless, unleash, next-gen, revolutionize
- Fake enthusiasm ("We're thrilled"), deficit framing ("no portfolio yet", bare "coming soon"). Momentum framing only ("In production, 2026").

Voice: restrained label copy. Short declaratives. Specifics over adjectives. The label sounds like a label, never like a person.

## CURRENT STATE OF THE REPO

Next.js 16 App Router, TypeScript, Tailwind v4 + CSS custom properties, Framer Motion, next/font (Space Grotesk display + Manrope body). Routes: `/`, `/studio`, `/contact`, `/api/contact`. The contact API contract is FROZEN: POST `{type:'creator', name, portfolio, idea, contact}` or `{type:'buyer', contact}` (Supabase + Resend behind it; never rename fields; never touch `app/api/` or `lib/supabase.ts`). A June 2026 redesign shipped a DARK cinematic system with a 400vh scroll-driven logo reveal (`components/home/ScrollLogoReveal.tsx`). The founder has rejected the dark direction.

## DESIGN DIRECTIVE FROM THE FOUNDER

White background. Structure and styling in the family of three references:

1. **A24 (a24films.com):** chrome recedes to near zero; the slate IS the homepage; full-bleed media tiles with only title + year; interleaved secondary cards (notes, shop) in one editorial feed; quiet utilitarian typography; newsletter as a first-class object; black-on-white restraint.
2. **NEON (neonrated.com):** white background; hero is the current release; catalog organized by STATUS sections (In Theaters, Coming Soon, Watch Now); large 16:9 stills with simple title links; plain sitemap footer.
3. **88rising (88rising.com):** label-roster energy; bold media-led tiles; motion lives inside the media, not the chrome; unapologetic cultural confidence from an Asian-rooted label.

Common DNA to apply: the work leads and the interface disappears; status-driven catalog; quiet typography, never decorative; media does the talking; one accent maximum.

## THE CENTRAL DESIGN PROBLEM

The references are catalog sites with deep catalogs. Vixio has one to three unreleased works. Design a slate architecture honest at N=1 that grows gracefully to N=50: status taxonomy (for example In production / Next / Released), tile anatomy, empty-slate behavior that reads as momentum, not absence. Production companies list works in development; that is the honest precedent. Slate entries available today: Signal Reel No.001 (visual study, in production, 2026, no IP named), a physical artifact drop (small-run object, in development), optionally a Vixio Labs experimental lane (only framed as R&D). Nothing else exists. Do not invent more. Model the slate as typed data (`lib/slate.ts`) so entries are added by data change, not redesign.

## PLAN REQUIREMENTS (RESTRUCTURE-PLAN-V2.md must contain)

1. **Design read and dials** (taste-skill Section 0/1 format) for the white catalog direction.
2. **Token system:** paper-white base (not pure #FFFFFF), ink text (not pure #000000), hairlines, accent decision. You must resolve: brand cyan #3AAED8 fails WCAG AA as text on white (~2.5:1). Define its role exactly (non-text accent only, or a darkened text-safe variant with hex and contrast math). Gold #D4A843 stays logo-only.
3. **Typography scale:** keep Space Grotesk + Manrope unless a change survives the references' utilitarian register; full table (role, size, weight, tracking).
4. **IA and routes:** full route map (likely `/`, slate index, slate detail template, `/studio`, notes/journal verdict, `/contact`); justify each against the references and N=1 honesty; define nav and footer exactly (one line, white, minimal).
5. **Section-by-section spec per page:** layout family per section (no repeats within a page), exact final copy for every visible string (checked against the ban list), responsive collapse, motion spec (motion in media and reveals, not chrome; useReducedMotion everywhere; at most one defended signature scroll moment).
6. **ScrollLogoReveal verdict:** adapt to white, retire, or relocate, with reasoning. If retired, define the new first viewport (the references answer: featured work, full bleed).
7. **Asset slots:** key every image/video placeholder to the IDs in `PLACEHOLDER-ASSETS.md`; interim treatment until generated assets land must be designed objects (typographic tiles, flat fields, logo geometry), never gray boxes, never stock photos, never fake renders.
8. **Component inventory:** keep / rework / delete for every file in `components/`.
9. **Slice plan:** the vertical slices that become issues, each with its commit message and verification gate.
10. **Pre-flight checklist:** taste-skill Section 14 in full, plus the copy bans, plus WCAG AA contrast proofs for every text token on white.
End the plan with a self-review: the three weakest decisions and why you made them anyway.

## GUARDRAILS

- WCAG 2.1 AA on white; secondary text at 4.5:1 minimum; visible focus states; 44px targets; prefers-reduced-motion respected everywhere.
- `min-h-[100dvh]` never `h-screen`; no window scroll listeners; no custom cursors; zero em-dashes; eyebrow rationing (prefer zero); no 3-equal-cards; no split-headers; one radius system; one accent; hero max 4 text elements and fits the viewport; the contact CTA is ONE string used identically everywhere.
- English now; Traditional and Simplified Chinese later; do not block i18n.
- Builds offline need `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js` (see README). Every slice must pass `npm run typecheck && npm run lint && npm run build`.
- Git discipline: work on branch `restructure/white-catalog`; conventional commits; never force-push; never push to remotes unless the founder has configured one and asked.

## DELIVERABLES AT END OF RUN

1. The restructured site on `main`, green build.
2. `RESTRUCTURE-PLAN-V2.md`, `CONTEXT.md`, ADRs, and closed issues in `docs/issues/`.
3. Regenerated `DESIGN.md`, updated `README.md` and `AGENTS.md`.
4. A short closing report: what shipped, every self-answered decision of consequence, and the asset slots still waiting on generated media (by `PLACEHOLDER-ASSETS.md` ID).
