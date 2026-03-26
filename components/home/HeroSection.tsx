'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
}

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
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{
          textAlign: 'center',
          maxWidth: '680px',
        }}
      >
        <motion.div variants={fadeUp} style={{ marginBottom: 'var(--spacing-8)' }}>
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
          variants={fadeUp}
          className="display-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
        >
          Logic and emotion. Digital and physical. Body and mind.
        </motion.h1>

        <motion.p
          variants={fadeUp}
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
          variants={fadeUp}
          style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <GradientButton href="/experiences">Our Vision</GradientButton>
          <GhostButton href="/services">Work With Us</GhostButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
