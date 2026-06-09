'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function StudioHero() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--surface)',
        padding: 'calc(64px + clamp(4rem, 8vw, 7rem)) 1.5rem clamp(4rem, 8vw, 7rem)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '2rem',
          }}
        >
          The studio.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '56ch',
          }}
        >
          Vixio is a creative label for story-rich worlds, founded in Hong Kong. We make a small
          number of things and hold them to a high bar.
        </motion.p>
      </div>
    </section>
  )
}
