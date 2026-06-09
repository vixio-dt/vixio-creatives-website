'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function ContactHero() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'calc(64px + clamp(3rem, 6vw, 5rem)) 1.5rem clamp(3rem, 6vw, 5rem)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}
        >
          Start a conversation.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}
        >
          For studios, rights holders, and collaborators.
        </motion.p>
      </div>
    </section>
  )
}
