'use client'

import { motion } from 'framer-motion'

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export function ManifestoSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-20) var(--spacing-6)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '720px', textAlign: 'center' }}
      >
        <motion.h1
          variants={fadeUp}
          className="headline-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
        >
          We believe the most powerful stories are the ones you live inside.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="headline-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
        >
          Where strangers become collaborators. Where something born from collective attention becomes
          something you hold in your hands.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)', maxWidth: '560px', margin: '0 auto' }}
        >
          Vixio Creatives aims to be the bridge between logic and emotion, digital and physical,
          body and mind — connecting people through great stories.
        </motion.p>
      </motion.div>
    </section>
  )
}
