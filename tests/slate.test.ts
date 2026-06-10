import { describe, it, expect } from 'vitest'
import {
  statusLabel,
  statusLine,
  sectionHeading,
  featuredWork,
  slateByStatus,
  STATUS_ORDER,
  type SlateEntry,
} from '@/lib/slate'
import { copy } from '@/lib/copy'

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const base: Omit<SlateEntry, 'status' | 'kind'> = {
  slug: 'test-entry',
  title: 'Test Entry',
  media: { tile: 'HOME-SLATE-TILE-01' },
}

function entry(overrides: Partial<SlateEntry>): SlateEntry {
  return {
    ...base,
    status: 'in-production',
    kind: 'film',
    ...overrides,
  } as SlateEntry
}

// ---------------------------------------------------------------------------
// statusLabel
// ---------------------------------------------------------------------------

describe('statusLabel', () => {
  it('released + object => released-object label (Shop)', () => {
    expect(statusLabel(entry({ status: 'released', kind: 'object' }))).toBe(
      copy.statusLabels['released-object'],
    )
  })

  it('released + film => released-film label (Watch)', () => {
    expect(statusLabel(entry({ status: 'released', kind: 'film' }))).toBe(
      copy.statusLabels['released-film'],
    )
  })

  it('released + labs => released-film label (Watch)', () => {
    expect(statusLabel(entry({ status: 'released', kind: 'labs' }))).toBe(
      copy.statusLabels['released-film'],
    )
  })

  it('coming + year => composed label', () => {
    expect(statusLabel(entry({ status: 'coming', year: 2026 }))).toBe(
      `${copy.statusLabels.coming} 2026`,
    )
  })

  it('coming without year => bare coming label', () => {
    expect(statusLabel(entry({ status: 'coming' }))).toBe(copy.statusLabels.coming)
  })

  it('in-production => direct lookup', () => {
    expect(statusLabel(entry({ status: 'in-production' }))).toBe(
      copy.statusLabels['in-production'],
    )
  })

  it('in-development => direct lookup', () => {
    expect(statusLabel(entry({ status: 'in-development' }))).toBe(
      copy.statusLabels['in-development'],
    )
  })
})

// ---------------------------------------------------------------------------
// statusLine
// ---------------------------------------------------------------------------

describe('statusLine', () => {
  it('coming + year has no comma (year baked into label)', () => {
    const e = entry({ status: 'coming', year: 2027 })
    expect(statusLine(e)).toBe(`${copy.statusLabels.coming} 2027`)
    expect(statusLine(e)).not.toContain(',')
  })

  it('released + year => "<label>, <year>"', () => {
    const e = entry({ status: 'released', kind: 'film', year: 2025 })
    expect(statusLine(e)).toBe(`${copy.statusLabels['released-film']}, 2025`)
  })

  it('in-production + year => "<label>, <year>"', () => {
    const e = entry({ status: 'in-production', year: 2026 })
    expect(statusLine(e)).toBe(`${copy.statusLabels['in-production']}, 2026`)
  })

  it('no year => bare label', () => {
    const e = entry({ status: 'in-development', kind: 'object' })
    expect(statusLine(e)).toBe(copy.statusLabels['in-development'])
  })
})

// ---------------------------------------------------------------------------
// sectionHeading
// ---------------------------------------------------------------------------

describe('sectionHeading', () => {
  it('coming, all entries share one year => composed heading', () => {
    const entries = [
      entry({ status: 'coming', year: 2027 }),
      entry({ status: 'coming', year: 2027 }),
    ]
    expect(sectionHeading('coming', entries)).toBe(`${copy.statusLabels.coming} 2027`)
  })

  it('coming, mixed years => bare coming label', () => {
    const entries = [
      entry({ status: 'coming', year: 2026 }),
      entry({ status: 'coming', year: 2027 }),
    ]
    expect(sectionHeading('coming', entries)).toBe(copy.statusLabels.coming)
  })

  it('coming, some entries missing year => bare coming label', () => {
    const entries = [entry({ status: 'coming', year: 2026 }), entry({ status: 'coming' })]
    expect(sectionHeading('coming', entries)).toBe(copy.statusLabels.coming)
  })

  it('released, all entries are objects => released-object label', () => {
    const entries = [
      entry({ status: 'released', kind: 'object' }),
      entry({ status: 'released', kind: 'object' }),
    ]
    expect(sectionHeading('released', entries)).toBe(copy.statusLabels['released-object'])
  })

  it('released, all entries are films => released-film label', () => {
    const entries = [
      entry({ status: 'released', kind: 'film' }),
      entry({ status: 'released', kind: 'film' }),
    ]
    expect(sectionHeading('released', entries)).toBe(copy.statusLabels['released-film'])
  })

  it('released, mixed kinds => film label (fallback per ADR-03)', () => {
    const entries = [
      entry({ status: 'released', kind: 'film' }),
      entry({ status: 'released', kind: 'object' }),
    ]
    expect(sectionHeading('released', entries)).toBe(copy.statusLabels['released-film'])
  })

  it('in-production => direct lookup', () => {
    expect(sectionHeading('in-production', [entry({ status: 'in-production' })])).toBe(
      copy.statusLabels['in-production'],
    )
  })

  it('in-development => direct lookup', () => {
    expect(
      sectionHeading('in-development', [entry({ status: 'in-development' })]),
    ).toBe(copy.statusLabels['in-development'])
  })
})

// ---------------------------------------------------------------------------
// featuredWork
// ---------------------------------------------------------------------------

describe('featuredWork', () => {
  it('returns the featured entry from real slate data', () => {
    const featured = featuredWork()
    expect(featured).toBeDefined()
    expect(featured?.featured).toBe(true)
  })

  it('returns only one entry (first found)', () => {
    const featured = featuredWork()
    expect(featured).not.toBeNull()
  })
})

// ---------------------------------------------------------------------------
// slateByStatus
// ---------------------------------------------------------------------------

describe('slateByStatus', () => {
  it('never includes a featured entry', () => {
    const groups = slateByStatus()
    for (const [, entries] of groups) {
      for (const e of entries) {
        expect(e.featured).not.toBe(true)
      }
    }
  })

  it('follows STATUS_ORDER (earlier statuses appear first)', () => {
    const groups = slateByStatus()
    const returnedStatuses = groups.map(([status]) => status)
    const expectedOrder = STATUS_ORDER.filter((s) => returnedStatuses.includes(s))
    expect(returnedStatuses).toEqual(expectedOrder)
  })

  it('only includes statuses that have entries', () => {
    const groups = slateByStatus()
    for (const [, entries] of groups) {
      expect(entries.length).toBeGreaterThan(0)
    }
  })
})
