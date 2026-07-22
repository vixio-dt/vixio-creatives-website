# ADR-17: White Catalog 2.0, positioning update and the gateway grammar

Founder-approved positioning update, 22 July 2026. White Catalog's central principle is preserved: the catalog is the argument, and the label explains itself only on `/studio`, in the footer descriptor, and in metadata. This ADR evolves the content inside that architecture; it does not reverse the doctrine. Per repo convention (ADR-15, ADR-16), historical ADR text is never edited: the clauses below supersede parts of ADR-04 and ADR-06 by record, not by rewrite.

## Decisions

1. **Positioning.** Vixio is a Hong Kong creative label working with selected creators and rights holders to develop new expressions of distinctive story worlds. Current work may include content development, specialist production, audience-facing releases and measured response. Future direction (continuing development, co-production, original worlds) is never presented as completed capability.

2. **Brand slogan.** The canonical brand wording is "Stories Across Worlds". On the site it renders in sentence case, "Stories across worlds", per the site-wide casing rule; no all-caps exception exists. It occupies the featured viewport's quiet promise line, replacing "Worlds worth entering." It is body-register copy, never styled or semantically treated as an eyebrow.

3. **Footer descriptor.** The descriptor becomes "Vixio develops new expressions of selected story worlds with creators and rights holders.", replacing "A creative label for story-rich worlds." Both this and decision 2 supersede the AGENTS.md "locked brand lines"; AGENTS.md is updated to the 2.0 lines.

4. **Slate composition.** The public slate carries exactly one provisional work: title "Untitled work", year 2026, status in-development, action "Notify me" anchoring the newsletter. This supersedes, in part, ADR-04's two public untitled strings and ADR-06's featured composition (status may be in-development at the provisional stage). The untitled convention itself is unchanged. "Untitled collaboration" becomes permitted only once a creator or rights holder has agreed to an actual collaboration; the real project title appears only once written public permission exists. The "Untitled Edition" entry is withdrawn from the public slate: it is not a separately scoped active project, and a category is never given a catalog work merely to show the category exists. Edition remains part of the creative grammar on `/studio`. Empty status sections render nothing, per the existing rule.

5. **Homepage restraint.** Unchanged doctrine, reaffirmed: no gateway preview, no studio summary, no process summary, no placeholder projects, no promotional calls to action on `/`. The sparse single-entry state is intentional and truthful. Functional actions only: Contact, Subscribe, Notify me, Watch, Shop; an action renders only where it genuinely functions.

6. **The gateway grammar on /studio.** The studio page explains the company and its creative grammar: a slogan lead with the positioning paragraph; the selection principle ("The world determines the form."); the four gateways Signal, Episode, Edition and Encounter with the editorial function labels Discovery, Continuation, Ownership and Presence; a concise method (Select, Interpret, Make, Release, Learn); the AI stance; the founder; one Contact CTA. The gateways are creative grammar, not four compulsory packages: a project may take one form or several, and not every world requires all four. There is no fifth gateway. Artifact is a possible element within Edition; distribution is infrastructure; continuation is a broader objective, not a gateway. Gateway names render in sentence case with no hardcoded uppercase.

7. **Work detail pages (future).** When they exist, a work page may carry title, gateway, year and status. Public internal numbering stays banned (ADR-04 stands). No real third-party title appears without written public permission.

8. **Word bans.** Every existing ban stands; none is weakened. Classifications made under this update: "Discovery", "Continuation", "Ownership" and "Presence" are permitted only as editorial classifications inside the gateway grammar on `/studio` and future work pages, never as CTAs or button labels. The em dash present in the previous meta home title was a live scan violation and is removed. Em and en dashes remain at zero everywhere in `app/`, `components/` and `lib/`.

9. **Metadata.** Home title is "Vixio Creatives" (the Next.js title template applies only to child pages, so the homepage never duplicates the name). Home and studio descriptions carry the 2.0 positioning, one sentence each, no keyword stuffing.

10. **Founder.** Title "Founder & Creative Producer" (supersedes "Founder & Executive Producer"; pending founder confirmation). Bio: Vixio was founded in Hong Kong by Denis Tam; he leads selection, creative direction and partnerships, assembling specialist collaborators according to each work. Vixio is never presented as a large in-house multidisciplinary studio.

11. **Contact and analytics.** The `/api/contact` contract and the creator form stay frozen and unchanged. No analytics dependency is added. Recommended future events, documented only: creator contact form submission (the primary conversion), newsletter subscribe, nav and footer Contact clicks, mailto clicks.

## Consequences

The change is copy and data plus studio sections: `lib/copy.ts` and `lib/slate.ts` carry the 2.0 strings; the studio page gains selection, gateway and method sections; StudioFacts is retired (its facts overclaimed the production state). The visual system, motion inventory (including the ADR-16 projector transition), navigation (ADR-07), accessibility contracts, ban scans and the frozen API are untouched. With zero non-featured entries the homepage renders featured work, projector transition, newsletter, footer; the first status section returns the day a second work is real.
