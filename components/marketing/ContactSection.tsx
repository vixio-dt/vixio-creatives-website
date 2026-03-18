'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
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
            Work with us
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-400">
            We&apos;re open to collaborations, commissions, and co-productions.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="mailto:hello@vixiocreatives.com"
            className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Mail size={18} />
            hello@vixiocreatives.com
          </motion.a>

          {/* Simple contact form */}
          <motion.form
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            action={`mailto:hello@vixiocreatives.com`}
            method="POST"
            encType="text/plain"
            className="mt-12 space-y-5"
          >
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                required
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400/50 transition-colors resize-none"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
