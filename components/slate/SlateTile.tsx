'use client'

import { useReducedMotion, motion } from 'framer-motion'
import { PlaceholderTreatment } from './PlaceholderTreatment'
import { statusLine } from '@/lib/slate'
import type { SlateEntry } from '@/lib/slate'
import Link from 'next/link'

interface SlateTileProps {
  entry: SlateEntry
}

// Determine aspect ratio from tile PlaceholderId:
// HOME-SLATE-TILE-02 = 4/5 (object tile), all others = 16/9
function getTileAspectRatio(tileId: string): string {
  return tileId === 'HOME-SLATE-TILE-02' ? '4 / 5' : '16 / 9'
}

export function SlateTile({ entry }: SlateTileProps) {
  const reducedMotion = useReducedMotion()

  const tileMotionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
      }

  const tileId = entry.media.tile

  return (
    <motion.article
      {...tileMotionProps}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Treatment block with hover scale inside overflow-hidden */}
      <div
        style={{
          position: 'relative',
          aspectRatio: getTileAspectRatio(tileId),
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{ position: 'absolute', inset: 0 }}
          whileHover={reducedMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <PlaceholderTreatment
            id={tileId}
          />
        </motion.div>
      </div>

      {/* h3 title */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          color: 'var(--text)',
          margin: 0,
        }}
      >
        {entry.title}
      </h3>

      {/* Status-year line */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 500,
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {statusLine(entry)}
      </p>

      {/* At most one verb as a text link, if action exists */}
      {entry.action && (
        <Link
          href={entry.action.href}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            color: 'var(--accent)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            display: 'inline-block',
          }}
        >
          {entry.action.label}
        </Link>
      )}
    </motion.article>
  )
}
