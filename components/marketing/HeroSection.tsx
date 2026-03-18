'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Animated bloom background */}
      <div className="absolute inset-0 hero-bloom" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
        >
          Stories at the edge
          <br />
          of perception
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg sm:text-xl text-slate-400 tracking-wide"
        >
          AI-assisted. Human-driven. Cinematic.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#boundary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-cyan-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  )
}
