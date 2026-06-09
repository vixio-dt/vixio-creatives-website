'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function NowInProduction() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface-raised)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="nip-inner">
        {/* Left: text content */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '1rem',
            }}
          >
            Signal Reel No.001
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '38ch',
            }}
          >
            A non-commercial visual study. In production, 2026.
          </p>
        </motion.div>

        {/* Right: placeholder for future still */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* TODO: reel still, 16:9, publishes after release */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 'var(--radius-container)',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0C0D10 0%, #111417 50%, #0C0D10 100%)',
              border: '1px solid var(--line)',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(58, 174, 216, 0.06) 0%, transparent 70%)',
              }}
            />
            <p
              style={{
                position: 'absolute',
                bottom: '0.875rem',
                left: '1rem',
                right: '1rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                lineHeight: 1.4,
              }}
            >
              Stills publish after release.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .nip-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        @media (max-width: 767px) {
          .nip-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
