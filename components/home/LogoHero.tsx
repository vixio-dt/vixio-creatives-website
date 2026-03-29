'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function LogoHero() {
  return (
    <section
      id="logo-hero"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface)',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <Image
          src="/vixio-logo.svg"
          alt="Vixio Creatives"
          width={400}
          height={200}
          className="w-[280px] md:w-[400px]"
          priority
        />
      </motion.div>
    </section>
  )
}
