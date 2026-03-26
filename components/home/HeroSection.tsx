'use client'

import Image from 'next/image'
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
      <div style={{ textAlign: 'center', maxWidth: '680px' }}>
        <motion.div {...fadeUp(0)} style={{ marginBottom: 'var(--spacing-8)' }}>
          <Image
            src="/vixio-logo.svg"
            alt="Vixio Creatives"
            width={300}
            height={150}
            className="w-[180px] md:w-[240px] mx-auto"
            priority
          />
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="display-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
        >
          Logic and emotion. Digital and physical. Body and mind.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="body-lg"
          style={{
            color: 'var(--on-surface-variant)',
            maxWidth: '560px',
            margin: '0 auto',
            marginBottom: 'var(--spacing-8)',
          }}
        >
          A transmedia studio in Hong Kong. We build story worlds across every medium.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <GradientButton href="/experiences">Our Vision</GradientButton>
          <GhostButton href="/services">Work With Us</GhostButton>
        </motion.div>
      </div>
    </section>
  )
}
