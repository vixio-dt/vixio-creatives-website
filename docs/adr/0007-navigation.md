# ADR-07: Navigation is wordmark plus Studio plus Contact; category nav waits for a catalog

The nav renders the wordmark (home link) left and two text links right: "Studio" and "Contact". Films / Objects / Notes appear in navigation only when a category has released or substantial entries to show; at the current N every category page would be empty or one tile, and an empty category page is banned. Slate sections live on `/` as in-page sections (anchors where linked), not routes.

## Considered options

- "Films / Objects" nav pointing at homepage anchors now: rejected; nav items that scroll the same page masquerade as a catalog the label does not yet have. The honest nav is small.
- A "Newsletter" nav item: rejected; the newsletter is a homepage object and the hero verb already routes to it.

## Consequences

Notes is deferred entirely until real label-voice content exists (no route, no nav item, no empty feed). When the first category earns a page, it enters the nav as the plain category word (Films, Objects, Notes) and never as an invented hybrid.
