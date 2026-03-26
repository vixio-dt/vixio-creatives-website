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

export function LabHero() {
  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)' }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '700px' }}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel color="primary">The Lab</SectionLabel>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="display-md"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}
        >
          Where we test, break, and discover.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)' }}
        >
          Experiments in projection, interaction, and physical-digital connection. Everything here is real.
        </motion.p>
      </motion.div>
    </section>
  )
}
