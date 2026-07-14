'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { copy } from '@/lib/copy'

export function StudioLead() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface)',
        paddingTop: 'calc(64px + clamp(3rem, 8vw, 6rem))',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
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
          {copy.studio.heading}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: 'var(--text)',
            maxWidth: '760px',
          }}
        >
          {copy.studio.lead}
        </motion.p>
      </div>
    </section>
  )
}
