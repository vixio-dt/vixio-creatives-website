'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeRiseInView } from '@/lib/motion'
import { Button } from '@/components/ui/Button'
import { copy } from '@/lib/copy'

export function StudioCTA() {
  const reduce = useReducedMotion()

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          {...fadeRiseInView(reduce, 0, 0.4)}
        >
          <Button variant="primary" href="/contact">
            {copy.studio.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
