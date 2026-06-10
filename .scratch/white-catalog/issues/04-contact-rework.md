# 04: Contact rework on the frozen contract

Status: ready-for-agent
Type: AFK

## Parent

.scratch/white-catalog/PRD.md

## What to build

Rework `/contact` to the plan's section map with the FROZEN creator payload and the deck's strings. The API route and lib/supabase.ts are untouchable; payload field names (`type`, `name`, `portfolio`, `idea`, `contact`) never change.

- `app/contact/page.tsx`: metadata from `copy.meta.contact`; h1 `copy.contact.heading`; intro line `copy.contact.intro`; then the industry form; then the direct line `copy.contact.directPrefix` + mailto `copy.contact.directEmail`. Delete `components/contact/ContactHero.tsx` (folded into the page lead).
- `components/contact/ContactForms.tsx`: becomes the single industry form (the buyer/follow form moved to the homepage newsletter in slice 02; remove it here). Fields with labels above inputs, from `copy.contact.form`: Name (text, required, autoComplete name), Email (email, required, autoComplete email), Link to your work + "(optional)" (url, optional, autoComplete url), What are you working on? (textarea, required). Submit Button primary labeled `copy.contact.form.submit`; pending state label `copy.contact.form.submitting` with `aria-busy` and disabled.
- POST EXACTLY `{ type: 'creator', name, portfolio, idea, contact }` to `/api/contact` (email input maps to `contact`, link input maps to `portfolio`, textarea maps to `idea`).
- Client validation before POST: required fields show `copy.contact.form.requiredError` inline below the input; invalid email shows `copy.contact.form.emailInvalidError`. Errors linked via `aria-describedby`, colored `var(--error)`.
- On 200: replace the form with `copy.contact.form.success` in a `role="status"` live region. On failure: `copy.contact.form.error` in a `role="alert"`. No simulated success.
- Inputs: white system, sharp corners, 44px min-height, 2px `--accent` focus ring; move any inline `<style>` blocks into globals.css.

Do not touch: `app/api/**`, `lib/supabase.ts`, home and studio surfaces.

## Acceptance criteria

- [ ] "npm run typecheck && npm run lint && npm run build" passes; output reported verbatim
- [ ] Scan 1 and Scan 2 (plan Section 9) return zero hits
- [ ] `git diff` shows zero changes under app/api/ and lib/supabase.ts; the POSTed JSON keys are exactly type, name, portfolio, idea, contact
- [ ] Every visible string comes from lib/copy.ts
- [ ] Labels above inputs; errors below inputs with aria-describedby; success/error in live regions; aria-busy while pending
- [ ] The only contact-intent string is "Contact" (the h1); the submit verb is "Send"
- [ ] Focus rings visible; 44px targets; no h-screen; no scroll listeners
- [ ] ContactHero.tsx deleted; no dangling imports

## Blocked by

- 01-white-foundation-copy-module-chrome.md
- 02-homepage-as-the-slate.md (the follow form moves home before it is removed here)
