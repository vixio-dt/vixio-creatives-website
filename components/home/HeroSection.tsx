'use client'

import { motion } from 'framer-motion'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface)',
        padding: 'var(--spacing-20) var(--spacing-6)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '700px' }}>
        <motion.h1
          {...fadeUp(0.3)}
          className="display-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
        >
          Stories across worlds.
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="body-lg"
          style={{
            color: 'var(--on-surface-variant)',
            maxWidth: '580px',
            margin: '0 auto',
            marginBottom: 'var(--spacing-8)',
          }}
        >
          Vixio Creatives is a transmedia creative studio based in Hong Kong. We create original
          stories and bring them to life across formats — immersive phygital experiences, interactive
          collectibles, film, and content. Every format serves the story. Every story deserves more
          than one way to be experienced.
        </motion.p>

        <motion.div
          {...fadeUp(0.7)}
          style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <GradientButton href="/experiences">Our Vision</GradientButton>
          <GhostButton href="/services">Work With Us</GhostButton>
        </motion.div>
      </div>
    </section>
  )
}
