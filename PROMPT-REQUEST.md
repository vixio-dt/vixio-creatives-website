# Prompt Request: Author a Claude Code Orchestration Prompt for the Vixio Website Restructure

You are a senior prompt engineer and design director. Your task is NOT to redesign anything yourself. Your task is to WRITE A PROMPT: a single, self-contained message I will paste into Claude Code (running Fable 5 at max effort) to automate a complete website restructure end to end. Everything you need is in this brief. Return only the finished prompt, ready to paste, with no commentary around it.

## First, internalize how the reference labels actually speak

The design and language model is a24films.com, neonrated.com, and 88rising.com. Study them. Their observable doctrine, which the prompt you write must enforce:

1. **The catalog is the argument.** None of the three describes itself on its homepage. A24's self-description exists only in metadata ("The studio behind Marty Supreme, Materialists..."): they define themselves BY their titles. NEON's homepage has no sentence about NEON. 88rising is names and media, near zero copy.
2. **Work is presented as TITLE + year + status. Nothing else.** "Backrooms 2026." "Leviticus, In Theaters Jun 19, 2026." No genre labels, no category jargon, no explanation of what kind of object the work is. The title is doing the brand-building.
3. **Status vocabulary is industry-plain and organizes the page.** NEON's sections: In Theaters, Coming Soon, Watch Now, Award Winners. Status headers are the only headers.
4. **Microcopy is purely functional.** Play Trailer. Get Tickets. Watch Now. Shop Now. Listen Now. A24's newsletter ask even sets expectations functionally: "Get our emails. Letters from our filmmakers, new trailers, podcasts, merch, and more. Not too often, just enough."
5. **Success criteria these sites optimize for:** a visitor knows what is out now and what is next within one viewport; every click target is a title or a verb; the newsletter is the relationship channel; merch and notes interleave as peers of the films; the label feels confident because it never explains itself.

## The language failure you must correct in the prompt

The current Vixio drafts violate doctrine #1 and #2: they say "visual studies" (vague category jargon a real label would never put on a tile) and "Signal Reel No.001" (an internal project codename, not a release title; it reads as unprofessional self-narration). The prompt you write must impose this copy doctrine:

- **Internal codenames are banned from all public copy:** "Signal Reel", "No.001", "Meta-Drop", "Track 1", "Track 2", "Move 1/2/3", and any other planning vocabulary. These exist in internal docs only.
- **Every work on the site is presented by title + year + status only.** The first release does not have a public title yet, so the prompt must instruct Fable 5 to (a) ship using the film-industry untitled convention ("Untitled First Film, 2026" or a tighter variant it defends), and (b) produce a separate `RELEASE-NAMING.md` with 8 to 12 title candidates and naming rationale for the founder to pick from. If Fable 5 spends its single allowed founder question, it should spend it here.
- **Category language, where unavoidable (nav, about page), is industry-plain:** Films, Objects, Notes. Never "visual studies", "experiences", "playable", or invented hybrids.
- **Self-description appears in exactly one place above the footer** (the about/studio page), plus the footer line and metadata. The homepage carries at most the locked hero promise and otherwise lets the slate speak.
- Locked brand lines (use them, but with reference-level restraint): descriptor "A creative label for story-rich worlds." and hero promise "Worlds worth entering."

## What the prompt you write must make Claude Code do

- Act as Fable 5: orchestrator, design lead, brand guardian, final reviewer. It plans, decides, and reviews; it delegates ALL implementation to Sonnet subagents (Task tool, model: sonnet) in small verifiable slices; it owns git (branch `restructure/white-catalog`, conventional commits per slice, no-ff merge to main after final review, never push to remotes).
- Install and obey two skill frameworks before any work:
  - `npx skills@latest add Leonxlnx/taste-skill` (anti-slop frontend framework; its SKILL.md rules and Section 14 Pre-Flight govern all frontend output; redesign protocol applies: overhaul visuals, preserve content contracts)
  - `npx skills@latest add mattpocock/skills` (engineering harness; configure local-file issue tracking; pipeline: audit, /grill-with-docs in self-answer mode producing CONTEXT.md and ADRs, plan, /to-prd, /to-issues, execute slices, /diagnose for bugs, /zoom-out for lost context, /improve-codebase-architecture once before merge)
- Run unattended: answer its own questions from this canon, log every decision; at most ONE founder question (see naming above).
- Verify every slice with `npm run typecheck && npm run lint && npm run build` (offline builds need `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=$(pwd)/font-mocks.js`).
- End with: restructured site on main, `RESTRUCTURE-PLAN-V2.md`, `RELEASE-NAMING.md`, `CONTEXT.md` + ADRs, regenerated `DESIGN.md`/`README.md`/`AGENTS.md`, and a closing report listing decisions taken and asset slots still waiting on media (by `PLACEHOLDER-ASSETS.md` ID).

## The project (embed all of this in the prompt you write)

Vixio Creatives Limited, Hong Kong. Founder & Executive Producer: Denis Tam. Canon: Company Compass v2.0 (9 June 2026) wins all conflicts. Publicly, Vixio is a creative label that produces short films and films (AI-assisted production under human direction) and gallery-grade physical objects in small runs. Honest stage: the first release is in production for 2026; no shipped catalog; never fake a portfolio, clients, testimonials, press, or social proof. The slate today: one untitled short film (in production, 2026), one physical object edition (in development), optionally an experimental Labs lane framed strictly as R&D. Nothing else exists; invent nothing.

Hard copy bans (zero tolerance in visible strings): underserved, deserve(s), overlooked, forgotten, rescue, revive; adapt/adaptation, "best expression", "the worlds we love", "partner with existing IP", world-first; any real IP or franchise name; em-dashes and en-dashes; innovate, disrupt, transform, cutting-edge, elevate, seamless, unleash, next-gen, revolutionize; fake enthusiasm; deficit framing (momentum framing only); plus the internal-codename ban above. Voice: restrained label copy, short declaratives, the label never explains itself twice.

Repo: Next.js 16 App Router, TypeScript, Tailwind v4 + CSS custom properties, Framer Motion, next/font (Space Grotesk display + Manrope body). Routes `/`, `/studio`, `/contact`, `/api/contact`. FROZEN: the contact API contract, POST `{type:'creator', name, portfolio, idea, contact}` or `{type:'buyer', contact}`; never rename fields, never touch `app/api/` or `lib/supabase.ts`. A rejected June 2026 redesign shipped a DARK cinematic system with a 400vh scroll-driven logo intro (`components/home/ScrollLogoReveal.tsx`); history in `DESIGN.md`, `REDESIGN-PLAN.md`, git log.

## Design direction (embed this too)

White background, in the structural family of the three references: chrome recedes to near zero; the slate IS the homepage; full-bleed media tiles carrying title + year + status only; status-driven sections; quiet utilitarian typography; newsletter as a first-class object with expectation-setting microcopy; plain sitemap footer; motion lives inside the media, not the chrome. One accent maximum.

The central design problem the prompt must pose: the references are deep-catalog sites and Vixio has 1 to 3 unreleased works. Demand a slate architecture honest at N=1 that scales to N=50: an industry-plain status taxonomy (for example In Production / Coming 2026 / Watch), typed slate data in `lib/slate.ts` so growth is a data change, and empty-slate behavior that reads as momentum, not absence (production companies list works in development; that is the honest precedent).

Known traps the prompt must call out: brand cyan #3AAED8 fails WCAG AA as text on white (~2.5:1), so require an explicit accent decision with contrast math (gold #D4A843 stays logo-only). Require a verdict on the dark ScrollLogoReveal (adapt to white, retire, or relocate), with the default first viewport being featured work, full bleed, per the references. Placeholders must key to the repo's `PLACEHOLDER-ASSETS.md` IDs with interim treatments as designed objects (typographic tiles, flat fields, logo geometry), never gray boxes, stock photos, or fake renders presented as real work.

Non-negotiable guardrails to carry through: WCAG 2.1 AA on white, visible focus states, 44px targets, prefers-reduced-motion everywhere; min-h-[100dvh] never h-screen; no window scroll listeners; no custom cursors; zero em-dashes; eyebrows rationed (prefer zero); no 3-equal-cards; no split-headers; one radius system; hero max 4 text elements and fits the viewport; one contact CTA string used identically everywhere; English now, Chinese (Traditional + Simplified) planned, do not block i18n.

## Quality bar for the prompt you return

- Single message, ready to paste into Claude Code, with clear sections and an explicit pipeline order.
- Specific enough that Sonnet subagents never make a design, copy, or architecture decision the prompt did not anticipate; every requirement mechanically checkable by the reviewer.
- It must instruct Fable 5 to write exact final copy for every visible string in its plan, each string checked against the ban lists, with tile and section copy held to the title + year + status doctrine.
- It must include the site's success criteria as testable statements (one-viewport legibility of now/next, every click target a title or a verb, zero self-explanation outside the studio page, newsletter present with functional expectation-setting copy).
- It must require a closing self-review (the three weakest decisions and why they stand).
- No em-dashes anywhere in the prompt itself.
