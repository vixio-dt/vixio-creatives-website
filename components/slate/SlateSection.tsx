// Server component: renders a status group header and tile grid.
// Renders nothing when the entries array is empty.

import { copy } from '@/lib/copy'
import { SlateTile } from './SlateTile'
import type { SlateEntry } from '@/lib/slate'

type SlateStatus = SlateEntry['status']

interface SlateSectionProps {
  status: SlateStatus
  entries: SlateEntry[]
}

function getStatusLabel(status: SlateStatus): string {
  const labelKey = status as keyof typeof copy.statusLabels
  return copy.statusLabels[labelKey] ?? status
}

export function SlateSection({ status, entries }: SlateSectionProps) {
  if (entries.length === 0) return null

  return (
    <section
      style={{
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Status header: sentence case, Space Grotesk 700 */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            color: 'var(--text)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {getStatusLabel(status)}
        </h2>

        {/* Tile grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {entries.map((entry) => (
            <div
              key={entry.slug}
              style={{
                maxWidth: entries.length === 1 ? '720px' : undefined,
              }}
            >
              <SlateTile entry={entry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
