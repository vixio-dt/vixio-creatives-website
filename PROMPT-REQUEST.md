# Prompt Request: Author a Claude Code Orchestration Prompt for the Vixio Website Restructure

You are a senior prompt engineer and design director. Your task is NOT to redesign anything yourself. Your task is to WRITE A PROMPT: a single, self-contained message that I will paste into Claude Code (running Fable 5 at max effort) to automate a complete website restructure end to end. Everything you need is in this brief. Return only the finished prompt, ready to paste, with no commentary around it.

## What the prompt you write must make Claude Code do

- Act as Fable 5: orchestrator, design lead, brand guardian, final reviewer. It plans, decides, and reviews; it delegates ALL implementation to Sonnet subagents (Task tool, model: sonnet) in small verifiable slices, and it owns git (feature branch `restructure/white-catalog`, conventional commits per slice, no-ff merge to main after final review, never push to remotes).
- Install and obey two skill frameworks before any work:
  - `npx skills@latest add Leonxlnx/taste-skill` (the anti-slop frontend framework; its SKILL.md rules and Section 14 Pre-Flight Check govern all frontend output; its redesign protocol applies: overhaul visuals, preserve content contracts)
  - `npx skills@latest add mattpocock/skills` (engineering harness; configure for local-file issue tracking, then pipeline: audit, /grill-with-docs in self-answer mode to build CONTEXT.md and ADRs, plan, /to-prd, /to-issues, execute slices, /diagnose for bugs, /zoom-out for lost context, /improve-codebase-architecture once before merge)
- Run fully unattended: answer its own questions from the canon below, log every decision; at most ONE question to the founder, only if existential.
- Verify every slice with `npm run typecheck && npm run lint && npm run build` (offline builds need `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js`).
- End with: restructured site on main, `RESTRUCTURE-PLAN-V2.md`, `CONTEXT.md` + ADRs, regenerated `DESIGN.md`/`README.md`/`AGENTS.md`, and a closing report listing decisions taken and asset slots still waiting on media (by `PLACEHOLDER-ASSETS.md` ID).

## The project (embed all of this in the prompt you write)

Vixio Creatives Limited, Hong Kong. Founder & Executive Producer: Denis Tam. Canon: Company Compass v2.0 (9 June 2026) wins all conflicts. Public identity, locked: descriptor "A creative label for story-rich worlds."; hero promise "Worlds worth entering."; publicly Vixio makes visual studies (short cinematic pieces, AI-assisted under human direction), films, and gallery-grade physical objects in small runs. Honest stage: first release, Signal Reel No.001, in production for 2026; no shipped catalog; never fake a portfolio, clients, testimonials, press, or social proof.

Hard copy bans (zero tolerance in visible strings): underserved, deserve(s), overlooked, forgotten, rescue, revive; adapt/adaptation, "best expression", "the worlds we love", "partner with existing IP", world-first; any real IP or franchise name; em-dashes and en-dashes; innovate, disrupt, transform, cutting-edge, elevate, seamless, unleash, next-gen, revolutionize; fake enthusiasm; deficit framing (momentum framing only: "In production, 2026"). Voice: restrained label copy, short declaratives, specifics over adjectives.

Repo: Next.js 16 App Router, TypeScript, Tailwind v4 + CSS custom properties, Framer Motion, next/font (Space Grotesk display + Manrope body). Routes `/`, `/studio`, `/contact`, `/api/contact`. FROZEN: the contact API contract, POST `{type:'creator', name, portfolio, idea, contact}` or `{type:'buyer', contact}`; never rename fields, never touch `app/api/` or `lib/supabase.ts`. A rejected June 2026 redesign shipped a DARK cinematic system with a 400vh scroll-driven logo intro (`components/home/ScrollLogoReveal.tsx`); history is in `DESIGN.md`, `REDESIGN-PLAN.md`, and git log.

## Design direction (embed this too)

White background. Structure and styling in the family of a24films.com (chrome recedes, the slate IS the homepage, full-bleed media tiles with title + year, one editorial feed, quiet utilitarian type, newsletter first-class), neonrated.com (white, status-driven catalog sections, large 16:9 stills, plain sitemap footer), and 88rising.com (label-roster energy, motion inside the media not the chrome, Asian-rooted confidence). One accent max. The central design problem the prompt must pose: those are deep-catalog sites and Vixio has 1 to 3 unreleased works, so demand a slate architecture honest at N=1 that scales to N=50 (status taxonomy like In production / Next / Released, typed slate data in `lib/slate.ts`, empty-slate behavior reading as momentum). Known trap to call out: brand cyan #3AAED8 fails WCAG AA as text on white (~2.5:1), so the prompt must require an explicit accent decision with contrast math; gold #D4A843 stays logo-only. Require a verdict on the dark ScrollLogoReveal (adapt to white, retire, or relocate) with the first viewport defaulting to featured work, full bleed, per the references. Placeholders must key to the repo's `PLACEHOLDER-ASSETS.md` IDs, with interim treatments as designed objects (typographic tiles, flat fields, logo geometry), never gray boxes, stock photos, or fake renders.

Non-negotiable guardrails to carry through: WCAG 2.1 AA on white, visible focus states, 44px targets, prefers-reduced-motion everywhere; min-h-[100dvh] never h-screen; no window scroll listeners; no custom cursors; zero em-dashes; eyebrows rationed (prefer zero); no 3-equal-cards; no split-headers; one radius system; hero max 4 text elements and fits the viewport; the contact CTA is one string used identically everywhere; English now with Chinese (Traditional + Simplified) planned, so do not block i18n.

## Quality bar for the prompt you return

- Single message, ready to paste into Claude Code, organized with clear sections and an explicit pipeline order.
- Specific enough that the Sonnet subagents never make a design, copy, or architecture decision the prompt did not anticipate; every requirement testable (the reviewer can check it mechanically).
- It must instruct Fable 5 to write exact final copy for every visible string in its plan (each string checked against the ban list) rather than letting implementers improvise.
- It must require a closing self-review (the three weakest decisions and why they stand).
- No em-dashes anywhere in the prompt itself.
