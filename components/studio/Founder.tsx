'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function Founder() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface-raised)',
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="founder-inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '0.5rem',
            }}
          >
            Denis Tam
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--accent)',
              fontWeight: 500,
            }}
          >
            Founder &amp; Executive Producer
          </p>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '52ch',
            alignSelf: 'center',
          }}
        >
          Denis leads every production at Vixio. Based in Hong Kong, working with collaborators
          across animation, film, and physical craft.
        </motion.p>
      </div>

      <style>{`
        .founder-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        @media (max-width: 767px) {
          .founder-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
