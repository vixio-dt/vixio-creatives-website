'use client'

import { motion } from 'framer-motion'

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export function FounderSection() {
  return (
    <section className="section-alt py-20 sm:py-28 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
        className="mx-auto max-w-[800px] flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left"
      >
        <div
          className="w-[72px] h-[72px] rounded-full flex-shrink-0 flex items-center justify-center text-[28px] font-medium text-white"
          style={{ background: 'linear-gradient(135deg, #1a6b8a, #4a9cb8)' }}
          aria-hidden="true"
        >
          D
        </div>
        <div>
          <h3 className="text-xl text-[#222] font-medium">Denis Tam</h3>
          <p className="text-xs text-[#999] mt-1">Founder &amp; Creative Producer · Hong Kong</p>
          <p className="text-sm text-[#777] leading-relaxed mt-3">
            Background in international trade and manufacturing. Now building Vixio
            to close the gap between creative ambition and production reality.
            Believes technology should serve human storytelling — not replace it.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
