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
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ textAlign: 'center', maxWidth: '640px' }}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel color="primary">Original Experiences</SectionLabel>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="display-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
        >
          Something is forming. Help it become real.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)' }}
        >
          A cooperative immersive experience for groups of 4–12. You enter a projection-mapped room.
          The space responds to your presence. Something emerges. Your collective attention determines
          what happens next. 45 minutes. Walk out with a physical artifact that didn&apos;t exist before
          you arrived.
        </motion.p>
      </motion.div>
    </section>
  )
}
