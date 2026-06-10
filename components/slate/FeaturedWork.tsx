'use client'

import { useReducedMotion, motion } from 'framer-motion'
import { fadeRiseMount } from '@/lib/motion'
import { PlaceholderTreatment } from './PlaceholderTreatment'
import { Button } from '@/components/ui/Button'
import { copy } from '@/lib/copy'
import { statusLine } from '@/lib/slate'
import type { SlateEntry } from '@/lib/slate'

interface FeaturedWorkProps {
  entry: SlateEntry
}

export function FeaturedWork({ entry }: FeaturedWorkProps) {
  const reducedMotion = useReducedMotion()

  const heroId = entry.media.hero ?? 'HOME-HERO-01'

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Treatment: full-bleed background field */}
      <PlaceholderTreatment
        id={heroId}
      />

      {/* Text block: bottom-left, above nav offset */}
      <motion.div
        {...fadeRiseMount(reducedMotion)}
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '5rem',
          paddingBottom: 'clamp(3rem, 8vw, 5rem)',
          paddingLeft: 'clamp(1.5rem, 6vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 6vw, 5rem)',
          maxWidth: '680px',
        }}
      >
        {/* 1. Promise line */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '0.75rem',
            letterSpacing: 0,
          }}
        >
          {copy.hero.promise}
        </p>

        {/* 2. h1 title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text)',
            marginBottom: '1rem',
          }}
        >
          {entry.title}
        </h1>

        {/* 3. Status-year line */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '2rem',
          }}
        >
          {statusLine(entry)}
        </p>

        {/* 4. One verb (Button primary) */}
        {entry.action && (
          <Button variant="primary" href={entry.action.href}>
            {entry.action.label}
          </Button>
        )}
      </motion.div>
    </section>
  )
}
