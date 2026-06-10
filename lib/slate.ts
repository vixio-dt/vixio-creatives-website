import { copy } from './copy'

// ADR-05 types
type SlateStatus = 'in-production' | 'in-development' | 'coming' | 'released'
type SlateKind = 'film' | 'object' | 'labs'
type PlaceholderId =
  | 'HOME-HERO-01'
  | 'HOME-SLATE-TILE-01'
  | 'HOME-SLATE-TILE-02'
  | 'HOME-SLATE-TILE-03'
  | 'SLATE-DETAIL-HERO-XX'
  | 'SLATE-DETAIL-STILLS-XX'
  | 'SLATE-DETAIL-LOOP-XX'

export interface SlateEntry {
  slug: string
  title: string
  year?: number
  status: SlateStatus
  kind: SlateKind
  featured?: boolean
  media: { hero?: PlaceholderId; tile: PlaceholderId }
  action?: { label: string; href: string }
}

export const slate: SlateEntry[] = [
  {
    slug: 'untitled-vixio-film',
    title: 'Untitled Vixio Film',
    year: 2026,
    status: 'in-production',
    kind: 'film',
    featured: true,
    media: { hero: 'HOME-HERO-01', tile: 'HOME-SLATE-TILE-01' },
    action: { label: 'Notify Me', href: '#newsletter' },
  },
  {
    slug: 'untitled-edition',
    title: 'Untitled Edition',
    status: 'in-development',
    kind: 'object',
    media: { tile: 'HOME-SLATE-TILE-02' },
  },
]

/**
 * Returns the single featured entry, or undefined if none exists.
 */
export function featuredWork(): SlateEntry | undefined {
  return slate.find((entry) => entry.featured === true)
}

/**
 * Groups non-featured entries by status, preserving slate order.
 * Returns only statuses that have entries.
 * Status display strings resolve through copy.statusLabels;
 * renders `${label}, ${year}` when the entry has a year.
 */
export function slateByStatus(): Map<SlateStatus, SlateEntry[]> {
  const result = new Map<SlateStatus, SlateEntry[]>()
  for (const entry of slate) {
    if (entry.featured) continue
    const group = result.get(entry.status) ?? []
    group.push(entry)
    result.set(entry.status, group)
  }
  return result
}

/**
 * Renders the status line for a tile entry.
 * Format: `${label}, ${year}` when year exists, else `${label}`.
 */
export function statusLine(entry: SlateEntry): string {
  const labelKey = entry.status as keyof typeof copy.statusLabels
  const label = copy.statusLabels[labelKey] ?? entry.status
  return entry.year != null ? `${label}, ${entry.year}` : label
}
