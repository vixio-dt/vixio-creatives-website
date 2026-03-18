'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Image src="/vixio-logo.svg" alt="Vixio Creatives" width={140} height={40} priority />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#boundary" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
            Work
          </a>
          <a href="#studio" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
            Studio
          </a>
          <a href="#contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm px-5 py-2 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            Collaborate
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
