'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function LabelStatement() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(5rem, 12vw, 9rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            color: 'var(--text)',
            maxWidth: '860px',
          }}
        >
          A great story does not end when the screen goes dark. It waits for someone to build the
          next room. Vixio makes visual studies, films, and crafted objects that take story-rich
          worlds seriously.
        </motion.p>
      </div>
    </section>
  )
}
