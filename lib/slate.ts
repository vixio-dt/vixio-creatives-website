import { copy } from './copy'

// ADR-05 types
export type SlateStatus = 'in-production' | 'in-development' | 'coming' | 'released'
type SlateKind = 'film' | 'object' | 'labs'
export type PlaceholderId =
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
  // ADR-17: one provisional work until a collaboration is agreed. "Untitled collaboration"
  // becomes permitted at agreement; the real title appears once written public permission exists.
  {
    slug: 'untitled-work',
    title: 'Untitled work',
    year: 2026,
    status: 'in-development',
    kind: 'film',
    featured: true,
    media: { hero: 'HOME-HERO-01', tile: 'HOME-SLATE-TILE-01' },
    action: { label: 'Notify me', href: '#newsletter' },
  },
]

/**
 * Live and dated work outranks undated development work on a catalog page.
 */
export const STATUS_ORDER: SlateStatus[] = ['in-production', 'coming', 'released', 'in-development']

/**
 * Returns the single featured entry, or undefined if none exists.
 */
export function featuredWork(): SlateEntry | undefined {
  return slate.find((entry) => entry.featured === true)
}

/**
 * Resolves the display label for one entry through copy.statusLabels.
 * - 'released' + kind 'film' or 'labs' => copy.statusLabels['released-film']
 * - 'released' + kind 'object'          => copy.statusLabels['released-object']
 * - 'coming'   + year                   => `${copy.statusLabels.coming} ${entry.year}`
 * - 'coming'   (no year)                => copy.statusLabels.coming
 * - all other statuses                  => direct lookup
 */
export function statusLabel(entry: SlateEntry): string {
  if (entry.status === 'released') {
    return entry.kind === 'object'
      ? copy.statusLabels['released-object']
      : copy.statusLabels['released-film']
  }
  if (entry.status === 'coming') {
    return entry.year != null
      ? `${copy.statusLabels.coming} ${entry.year}`
      : copy.statusLabels.coming
  }
  return copy.statusLabels[entry.status]
}

/**
 * Renders the status line for a tile entry.
 * For 'coming': year already composed into the label, return as-is (no comma).
 * For all other statuses: `${label}, ${year}` when year exists, else label.
 */
export function statusLine(entry: SlateEntry): string {
  if (entry.status === 'coming') {
    return statusLabel(entry)
  }
  const label = statusLabel(entry)
  return entry.year != null ? `${label}, ${entry.year}` : label
}

/**
 * Renders the section heading for a status group.
 * - 'coming':   if all entries share one defined year => `${copy.statusLabels.coming} ${year}`,
 *               else copy.statusLabels.coming
 * - 'released': if all entries share one kind => that kind's released label,
 *               else the film released label (released wording is confirmed at first release per ADR-03)
 * - others:     direct lookup (no fallback: the union is total, TypeScript proves it)
 */
export function sectionHeading(status: SlateStatus, entries: SlateEntry[]): string {
  if (status === 'coming') {
    const years = entries.map((e) => e.year).filter((y): y is number => y != null)
    const allSameYear = years.length === entries.length && new Set(years).size === 1
    return allSameYear
      ? `${copy.statusLabels.coming} ${years[0]}`
      : copy.statusLabels.coming
  }
  if (status === 'released') {
    const kinds = entries.map((e) => e.kind)
    const allSameKind = new Set(kinds).size === 1
    if (allSameKind) {
      return kinds[0] === 'object'
        ? copy.statusLabels['released-object']
        : copy.statusLabels['released-film']
    }
    // released wording is confirmed at first release per ADR-03
    return copy.statusLabels['released-film']
  }
  return copy.statusLabels[status]
}

/**
 * Groups non-featured entries by status, ordered by STATUS_ORDER.
 * Returns only statuses that have entries.
 */
export function slateByStatus(): Array<[SlateStatus, SlateEntry[]]> {
  const grouped = new Map<SlateStatus, SlateEntry[]>()
  for (const entry of slate) {
    if (entry.featured) continue
    const group = grouped.get(entry.status) ?? []
    group.push(entry)
    grouped.set(entry.status, group)
  }
  return STATUS_ORDER
    .filter((status) => grouped.has(status))
    .map((status) => [status, grouped.get(status)!])
}
