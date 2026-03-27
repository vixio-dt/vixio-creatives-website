'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export function LabHero() {
  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)' }}>
      <div style={{ maxWidth: '700px' }}>
        <motion.div {...fadeUp(0)}>
          <SectionLabel color="primary">The Lab</SectionLabel>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="display-md"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}
        >
          Where we test, break, and discover.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)' }}
        >
          Experiments in projection, interaction, and physical-digital connection. Everything here is real.
        </motion.p>
      </div>
    </section>
  )
}
