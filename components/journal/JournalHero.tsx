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

export function JournalHero() {
  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)' }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '600px' }}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel color="primary">Journal</SectionLabel>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="display-md"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}
        >
          Thinking out loud.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)' }}
        >
          Creative process, industry observations, and behind-the-scenes from the studio.
        </motion.p>
      </motion.div>
    </section>
  )
}
