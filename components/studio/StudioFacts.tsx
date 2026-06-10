'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { copy } from '@/lib/copy'

export function StudioFacts() {
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
        {copy.studio.facts.map((fact, i) => (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderTop: '1px solid var(--line)',
              padding: 'clamp(1.25rem, 2.5vw, 2rem) 0',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--text)',
                maxWidth: '65ch',
              }}
            >
              {fact}
            </p>
          </motion.div>
        ))}
        <div style={{ borderTop: '1px solid var(--line)' }} />
      </div>
    </section>
  )
}
