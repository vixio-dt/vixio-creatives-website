'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div variants={fadeIn} className="mb-10 flex justify-center">
          <Image
            src="/vixio-logo.svg"
            alt="Vixio Creatives"
            width={400}
            height={200}
            className="w-[180px] sm:w-[240px] md:w-[300px]"
            priority
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-[11px] tracking-[0.3em] text-[#999] uppercase mb-4"
        >
          Creative Production Studio
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="font-heading text-xl sm:text-2xl text-[#666] italic"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Great stories deserve great execution.
        </motion.p>
      </motion.div>

      <motion.a
        href="#vixio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#ccc] hover:text-[#1a6b8a] transition-colors"
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
