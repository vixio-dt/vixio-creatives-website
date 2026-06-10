'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { copy } from '@/lib/copy'

export function StudioAIStance() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface-raised)',
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            color: 'var(--text)',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {copy.studio.aiStanceHeading}
        </motion.h2>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            color: 'var(--text)',
            maxWidth: '760px',
          }}
        >
          {copy.studio.aiStance}
        </motion.p>
      </div>
    </section>
  )
}
