'use client'

import { motion } from 'framer-motion'
import { WorldPillars } from './WorldPillars'
import { CharacterStrip } from './CharacterStrip'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export function BoundaryShowcase() {
  return (
    <section id="boundary" className="relative py-28 px-6 grain">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Label chip */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-400 mb-8">
              Original IP — Canon v1.2
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
          >
            THE BOUNDARY
          </motion.h2>

          {/* Logline */}
          <motion.p
            variants={fadeInUp}
            className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl"
          >
            In a rain-soaked vertical slum where everyone sees the same face, two 16-year-old couriers
            stumble into a perception-breaking &lsquo;activation&rsquo; that lets one of them see true
            human faces for the first time — triggering a hunt by an unseen superintelligence and
            forcing a devastating sacrifice that transfers identity itself.
          </motion.p>

          {/* Tone line */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm text-slate-500 italic"
          >
            Arcane-adjacent. Painterly-cinematic. Horror at the edge of identity.
          </motion.p>
        </motion.div>

        {/* World Pillar Cards */}
        <WorldPillars />

        {/* Character Strip */}
        <CharacterStrip />

        {/* Status tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <span className="inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
            Pilot — ~12 min — In Development
          </span>
        </motion.div>
      </div>
    </section>
  )
}
