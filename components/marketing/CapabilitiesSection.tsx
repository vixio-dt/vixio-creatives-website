'use client'

import { motion } from 'framer-motion'

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function CapabilitiesSection() {
  return (
    <section className="py-20 sm:py-28 px-6">
      <div className="mx-auto max-w-[800px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-[11px] tracking-[0.2em] uppercase text-[#1a6b8a] mb-6"
        >
          IP Development
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="bg-[#fafafa] border border-[#eee] rounded-[10px] p-6"
          >
            <h3 className="text-[15px] text-[#222] font-medium mb-1">Original IP</h3>
            <p className="text-[11px] text-[#999] mb-3">Story-driven worlds built from scratch</p>
            <p className="text-xs text-[#777] leading-relaxed">
              We create original narrative universes — from concept and world bible
              through AI-assisted pre-production to screen-ready assets.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="bg-[#fafafa] border border-[#eee] rounded-[10px] p-6"
          >
            <h3 className="text-[15px] text-[#222] font-medium mb-1">IP Acquisition &amp; Adaptation</h3>
            <p className="text-[11px] text-[#999] mb-3">Existing IP, new possibilities</p>
            <p className="text-xs text-[#777] leading-relaxed">
              We identify and acquire promising character and story IP, then develop
              it across formats — film, interactive, physical experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
