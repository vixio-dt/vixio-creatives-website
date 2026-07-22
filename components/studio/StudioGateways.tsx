'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { copy } from '@/lib/copy'

// The four gateways are editorial classifications (ADR-17), rendered sentence case.
// Function labels (Discovery, Continuation, Ownership, Presence) are never CTAs.
export function StudioGateways() {
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
          {copy.gateways.heading}
        </motion.h2>

        {copy.gateways.items.map((gateway, i) => (
          <motion.div
            key={gateway.name}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderTop: '1px solid var(--line)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(0.75rem, 2vw, 2rem)',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  margin: 0,
                }}
              >
                {gateway.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  margin: '0.375rem 0 0',
                }}
              >
                {gateway.functionLabel}
              </p>
            </div>
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
              {gateway.body}
            </p>
          </motion.div>
        ))}

        <div style={{ borderTop: '1px solid var(--line)' }} />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '65ch',
            marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {copy.gateways.closing}
        </motion.p>
      </div>
    </section>
  )
}
