'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { copy } from '@/lib/copy'

export function StudioMethod() {
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
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {copy.studio.method.heading}
        </motion.h2>

        {copy.studio.method.steps.map((step, i) => (
          <motion.div
            key={step.name}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderTop: '1px solid var(--line)',
              padding: 'clamp(1.25rem, 2.5vw, 2rem) 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(0.5rem, 2vw, 2rem)',
              alignItems: 'baseline',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                color: 'var(--text)',
                margin: 0,
              }}
            >
              {step.name}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                maxWidth: '65ch',
                margin: 0,
              }}
            >
              {step.body}
            </p>
          </motion.div>
        ))}

        <div style={{ borderTop: '1px solid var(--line)' }} />
      </div>
    </section>
  )
}
