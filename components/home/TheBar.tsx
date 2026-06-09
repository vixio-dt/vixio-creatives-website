'use client'

import { motion, useReducedMotion } from 'framer-motion'

const statements = [
  'Craft over speed.',
  'Story over spectacle.',
  'It ships when it clears the bar, or it does not ship.',
]

export function TheBar() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {statements.map((statement, i) => (
            <motion.p
              key={statement}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: i < 2 ? 'var(--text)' : 'var(--text-secondary)',
                paddingTop: i === 0 ? 0 : 'clamp(1.25rem, 2.5vw, 2rem)',
                paddingBottom: i < 2 ? 'clamp(1.25rem, 2.5vw, 2rem)' : 0,
                borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
              }}
            >
              {statement}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
