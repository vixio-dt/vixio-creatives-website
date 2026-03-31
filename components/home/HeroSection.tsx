'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface)',
        padding: 'calc(var(--spacing-20) + 80px) var(--spacing-6) var(--spacing-20)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
          staggerChildren: 0.15,
        }}
        style={{ textAlign: 'center', maxWidth: '700px' }}
      >
        <motion.h1
          className="display-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          variants={
            prefersReducedMotion
              ? undefined
              : {
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }
          }
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          Stories across worlds.
        </motion.h1>

        <motion.p
          className="body-lg"
          style={{
            color: 'var(--on-surface-variant)',
            maxWidth: '580px',
            margin: '0 auto',
            marginBottom: 'var(--spacing-8)',
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: prefersReducedMotion ? 0 : 0.15 }}
          variants={
            prefersReducedMotion
              ? undefined
              : {
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }
          }
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          Vixio Creatives is a transmedia creative studio based in Hong Kong. We create original
          stories and bring them to life across formats — immersive phygital experiences, interactive
          collectibles, film, and content. Every format serves the story. Every story deserves more
          than one way to be experienced.
        </motion.p>

        <motion.div
          style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: prefersReducedMotion ? 0 : 0.3 }}
          variants={
            prefersReducedMotion
              ? undefined
              : {
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }
          }
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <GradientButton href="/about">Our Vision</GradientButton>
          <GhostButton href="/services">Work With Us</GhostButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
