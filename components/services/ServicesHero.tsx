'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export function ServicesHero() {
  return (
    <section
      style={{
        padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '800px' }}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel color="primary">Studio Services</SectionLabel>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="display-md"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
        >
          We build immersive experiences for brands, malls, and cultural venues.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)', maxWidth: '600px' }}
        >
          From concept through technical design, content production, installation, and on-site
          operation — we handle the full journey across Hong Kong and the Greater Bay Area.
        </motion.p>
      </motion.div>
    </section>
  )
}
