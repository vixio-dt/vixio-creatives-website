'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Clapperboard, Cpu } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const pillars = [
  {
    icon: Lightbulb,
    title: 'Original IP',
    body: 'We develop our own stories, characters, and worlds from the ground up.',
  },
  {
    icon: Clapperboard,
    title: 'Cinematics Service',
    body: 'Virtual production, 3D asset creation, and cinematic visual development for hire.',
  },
  {
    icon: Cpu,
    title: 'Vixio Studio',
    body: 'Our internal AI-assisted preproduction tool. From brief or script to visualized preproduction.',
  },
]

export function StudioSection() {
  return (
    <section id="studio" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Vixio Creatives
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-slate-400 max-w-2xl"
          >
            A creative production studio building original worlds with AI-assisted preproduction.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-14"
        >
          {pillars.map((p) => (
            <motion.div key={p.title} variants={fadeInUp} className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400">
                <p.icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
