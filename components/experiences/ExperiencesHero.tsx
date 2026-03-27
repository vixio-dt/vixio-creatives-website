'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export function ExperiencesHero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-20) var(--spacing-6)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '640px' }}>
        <motion.div {...fadeUp(0)}>
          <SectionLabel color="primary">Original Experiences</SectionLabel>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="display-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
        >
          Something is forming. Help it become real.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)' }}
        >
          A cooperative immersive experience for groups of 4–12. You enter a projection-mapped room.
          The space responds to your presence. Something emerges. Your collective attention determines
          what happens next. 45 minutes. Walk out with a physical artifact that didn&apos;t exist before
          you arrived.
        </motion.p>
      </div>
    </section>
  )
}
