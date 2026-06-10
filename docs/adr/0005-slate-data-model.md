# ADR-05: Typed slate data in lib/slate.ts, growth is a data change

All Slate content lives in `lib/slate.ts` as typed entries; components render whatever the data declares and never hardcode a work. Adding a work, changing a status, or titling the film is a data-only change.

The shape (from the prototype for this restructure; the decision-rich part):

```ts
type SlateStatus = 'in-production' | 'in-development' | 'coming' | 'released';
type SlateKind = 'film' | 'object' | 'labs';
type PlaceholderId =
  | 'HOME-HERO-01' | 'HOME-SLATE-TILE-01' | 'HOME-SLATE-TILE-02' | 'HOME-SLATE-TILE-03'
  | 'SLATE-DETAIL-HERO-XX' | 'SLATE-DETAIL-STILLS-XX' | 'SLATE-DETAIL-LOOP-XX';

interface SlateEntry {
  slug: string;
  title: string;            // public title or untitled-convention string (ADR-04)
  year?: number;            // only when publicly promised
  status: SlateStatus;      // display strings via the copy module (ADR-03)
  kind: SlateKind;
  featured?: boolean;       // exactly one entry; owns the homepage first viewport
  media: { hero?: PlaceholderId; tile: PlaceholderId };  // keyed to PLACEHOLDER-ASSETS.md
  action?: { label: string; href: string };  // the one functional verb, optional
}
```

Current entries, the complete public slate: the film (slug `untitled-vixio-film`, year 2026, status `in-production`, kind `film`, featured, action "Notify Me" anchoring the newsletter) and the object (slug `untitled-edition`, status `in-development`, kind `object`, no action). Nothing else may be added without a Compass-level decision.

## Consequences

Status sections are derived by grouping the slate, so empty statuses produce no markup (no empty sections, ever). Media slots reference PLACEHOLDER-ASSETS.md IDs; when a real asset lands, the entry points at the file and the interim treatment is deleted. The `labs` kind exists in the type so ADR-08's deferral is reversible by data alone.
