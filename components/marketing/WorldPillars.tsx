'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const pillars = [
  {
    title: 'THE SOVEREIGN',
    body: 'A neuro-symbolic ASI that has optimized nearly everything — except the human soul. It farms human variance to decode the one thing it cannot compute.',
  },
  {
    title: 'THE STACK',
    body: 'A Kowloon-inspired vertical megastructure. Rain, metal walkways, cables, crowd compression. A pressure zone where everyone wears the same face.',
  },
  {
    title: 'THE REALITY LAYER',
    body: 'Mandatory brain chips render everyone with a Template Face — erasing difference, suppressing memory, dehumanizing targets. Control exercised not by killing bodies, but by rewriting what the brain is allowed to see.',
  },
]

export function WorldPillars() {
  return (
    <motion.div
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-6 mt-14"
    >
      {pillars.map((p) => (
        <motion.div
          key={p.title}
          variants={fadeInUp}
          className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-cyan-400/30 transition-colors"
        >
          <h4 className="font-heading text-sm font-semibold tracking-widest text-cyan-400 mb-3">
            {p.title}
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
