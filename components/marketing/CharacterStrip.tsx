'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const characters = [
  {
    name: 'ONE',
    role: 'COURIER #1',
    desc: 'Alert. Watchful. The one who learns to see.',
  },
  {
    name: 'TWO',
    role: 'COURIER #2',
    desc: 'Soft. Vulnerable. The one who becomes brave.',
  },
  {
    name: 'DOCTOR',
    role: 'WILDS-ORIGIN MIMIC',
    desc: 'Plague mask. Deception-first. Wins by being misidentified until the moment he strikes.',
  },
]

export function CharacterStrip() {
  return (
    <motion.div
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-6 mt-10"
    >
      {characters.map((c) => (
        <motion.div
          key={c.name}
          variants={fadeInUp}
          className="border-l-2 border-cyan-400/30 pl-5 py-2"
        >
          <span className="font-heading text-2xl font-bold text-white tracking-tight">{c.name}</span>
          <span className="block text-xs font-semibold tracking-widest text-cyan-400/70 mt-1 uppercase">
            {c.role}
          </span>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">{c.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
