'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface CellProps {
  title: string
  description: string
  delay?: number
  large?: boolean
}

function Cell({ title, description, delay = 0, large = false }: CellProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={large ? 'wmm-cell wmm-large' : 'wmm-cell'}
      style={{
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-container)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {large && (
        <>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(45deg, rgba(58, 174, 216, 0.10) 0%, rgba(212, 168, 67, 0.07) 100%)',
              borderRadius: 'inherit',
              pointerEvents: 'none',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              border: '1px solid transparent',
              background: 'linear-gradient(var(--surface-raised), var(--surface-raised)) padding-box, linear-gradient(45deg, rgba(58,174,216,0.20), rgba(212,168,67,0.14)) border-box',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: 'var(--text)',
            marginBottom: '0.625rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '42ch',
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export function WhatWeMake() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
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
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          What we make
        </motion.h2>

        <div className="wmm-grid">
          <Cell
            large
            title="Visual studies"
            description="Short cinematic pieces made with AI-assisted production under a director's eye. Proof of craft, shared in public."
            delay={0}
          />
          <Cell
            title="Films"
            description="Story-first production. Longer formats follow when a world has earned them."
            delay={0.1}
          />
          <Cell
            title="Objects"
            description="Gallery-grade physical artifacts in small runs. Made to be held and kept."
            delay={0.2}
          />
        </div>
      </div>

      <style>{`
        .wmm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1rem;
          min-height: 500px;
        }
        .wmm-large {
          grid-row: 1 / 3;
          min-height: 480px;
        }
        .wmm-cell {
          min-height: 220px;
        }
        @media (max-width: 767px) {
          .wmm-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            min-height: auto;
          }
          .wmm-large {
            grid-row: auto;
            min-height: 280px;
          }
        }
      `}</style>
    </section>
  )
}
