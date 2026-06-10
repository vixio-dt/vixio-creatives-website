'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeRiseInView } from '@/lib/motion'
import { copy } from '@/lib/copy'

export function StudioFounder() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          {...fadeRiseInView(reduce, 0, 0.3)}
          style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              color: 'var(--text)',
              marginBottom: '0.375rem',
            }}
          >
            {copy.studio.founder.name}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            {copy.studio.founder.role}
          </p>
        </motion.div>

        <motion.p
          {...fadeRiseInView(reduce, 0.08, 0.3)}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '52ch',
          }}
        >
          {copy.studio.founder.bio}
        </motion.p>
      </div>
    </section>
  )
}
