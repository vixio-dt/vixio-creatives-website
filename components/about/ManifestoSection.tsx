'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] as const },
})

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
      <div style={{ maxWidth: '720px', textAlign: 'center' }}>
        <motion.h1
          {...fadeUp(0)}
          className="headline-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
        >
          We believe the most powerful stories are the ones you live inside.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="headline-lg"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
        >
          Where strangers become collaborators. Where something born from collective attention becomes
          something you hold in your hands.
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="body-lg"
          style={{ color: 'var(--on-surface-variant)', maxWidth: '560px', margin: '0 auto' }}
        >
          Vixio Creatives aims to be the bridge between logic and emotion, digital and physical,
          body and mind — connecting people through great stories.
        </motion.p>
      </div>
    </section>
  )
}
