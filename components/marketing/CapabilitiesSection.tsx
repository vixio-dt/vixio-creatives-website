'use client'

import { motion } from 'framer-motion'
import { Wand2, Box, Film } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const capabilities = [
  {
    icon: Wand2,
    title: 'AI-Assisted Preproduction',
    body: 'From script to storyboard to concept art — accelerated by AI, refined by artists.',
  },
  {
    icon: Box,
    title: 'Virtual Production & 3D',
    body: 'Real-time 3D environments, asset creation, and virtual cinematography pipelines.',
  },
  {
    icon: Film,
    title: 'Cinematic Visual Development',
    body: 'Look development, color scripting, and visual tone guides for film and series.',
  },
]

export function CapabilitiesSection() {
  return (
    <section className="relative py-28 px-6 grain">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {capabilities.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeInUp}
              className="group rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:border-cyan-400/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 mb-5 group-hover:bg-cyan-400/20 transition-colors">
                <c.icon size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
