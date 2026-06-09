'use client'

import { motion, useReducedMotion } from 'framer-motion'

const principles = [
  {
    title: 'Content leads.',
    body: 'We earn attention with finished work, not announcements.',
  },
  {
    title: 'The craft bar.',
    body: 'Every piece is judged before release. Some work never ships. That is the point.',
  },
  {
    title: 'Small by design.',
    body: 'A lean studio, senior collaborators per project, no bloat.',
  },
]

export function HowWeWork() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface-raised)',
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          How we work
        </motion.h2>

        <div>
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hww-row"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
                borderTop: '1px solid var(--line)',
                borderBottom: i === principles.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  maxWidth: '50ch',
                }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .hww-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (max-width: 640px) {
          .hww-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
