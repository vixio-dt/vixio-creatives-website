'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export function BoundaryShowcase() {
  return (
    <section id="boundary" className="section-alt py-20 sm:py-28 px-6">
      <div className="mx-auto max-w-[800px] text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <span className="text-[32px] tracking-[0.08em] text-[#222]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              THE BOUNDARY
            </span>
            <span className="inline-block text-[10px] tracking-[0.08em] px-3 py-1 rounded-full bg-[rgba(26,107,138,0.08)] text-[#1a6b8a] ml-3 align-middle">
              IN PRODUCTION
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xs tracking-[0.15em] uppercase text-[#1a6b8a] mt-2 mb-6"
          >
            Original Sci-Fi
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-[15px] text-[#888] leading-relaxed max-w-[480px] mx-auto"
          >
            What differs us in a world without identity?
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
