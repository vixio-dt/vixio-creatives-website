'use client'

import { motion } from 'framer-motion'

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-6 text-center">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <motion.h2
          variants={fadeInScale}
          className="text-2xl sm:text-[28px] text-[#222] mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Let&apos;s tell a story together.
        </motion.h2>

        <motion.a
          variants={fadeInScale}
          href="mailto:hello@vixiocreatives.com"
          className="inline-block px-10 py-3.5 border border-[#ddd] rounded-lg text-sm text-[#1a6b8a] tracking-wide hover:border-[#1a6b8a] hover:bg-[rgba(26,107,138,0.04)] transition-all no-underline"
        >
          Get in Touch
        </motion.a>

        <motion.p variants={fadeInScale} className="text-sm text-[#999] mt-3">
          <a href="tel:+85263372258" className="text-[#999] no-underline hover:text-[#1a6b8a] transition-colors">
            +852 6337 2258
          </a>
        </motion.p>

        <motion.p variants={fadeInScale} className="text-sm text-[#bbb] mt-2">
          vixiocreatives.com · Hong Kong
        </motion.p>

        <motion.p
          variants={fadeInScale}
          className="text-[11px] text-[#ddd] italic mt-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Human craft. AI tools. Meaningful stories.
        </motion.p>
      </motion.div>
    </section>
  )
}
