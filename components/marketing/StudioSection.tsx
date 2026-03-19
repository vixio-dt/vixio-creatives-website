'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const letters = [
  { char: 'V', meaning: 'Logic &\nStructure' },
  { char: 'I', meaning: 'The\nDirector' },
  { char: 'X', meaning: 'Synthesis &\nBridge' },
  { char: 'I', meaning: 'The\nArtist' },
  { char: 'O', meaning: 'Flow &\nEmotion' },
]

export function StudioSection() {
  return (
    <section id="vixio" className="py-20 sm:py-28 px-6 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-base sm:text-lg text-[#888] italic mb-10"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Every letter is a principle. Every principle serves the story.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 sm:gap-5 flex-wrap mb-10"
        >
          {letters.map((l, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center w-[80px] sm:w-[90px]">
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] mx-auto border border-[#ddd] rounded-[10px] flex items-center justify-center text-[#1a6b8a] text-xl sm:text-2xl hover:border-[#1a6b8a] transition-colors"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {l.char}
              </div>
              <div className="text-[11px] text-[#999] mt-2 leading-snug whitespace-pre-line">
                {l.meaning}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-sm text-[#777] leading-[1.9] max-w-[520px] mx-auto"
        >
          We develop and produce <strong className="text-[#222] font-medium">original story IP</strong> using
          AI-assisted production — closing the gap between a compelling story and the craft it
          deserves. <strong className="text-[#222] font-medium">Human vision is irreplaceable.</strong> AI is the instrument.
        </motion.p>
      </div>
    </section>
  )
}
