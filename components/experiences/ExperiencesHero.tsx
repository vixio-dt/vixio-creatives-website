'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ExperiencesHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion() ?? false

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 120],
  )

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--spacing-20) var(--spacing-6)',
      }}
    >
      {/* Parallax background image */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-60px',
          left: 0,
          right: 0,
          bottom: '-60px',
          zIndex: 0,
          y,
        }}
        initial={{ scale: 1.0 }}
        animate={prefersReducedMotion ? {} : { scale: 1.05 }}
        transition={{ duration: 3, ease: 'linear' }}
      >
        <Image
          src="/images/hero-collaboration-v2.webp"
          alt="Group gathered around an oak table with brass artifacts, projection-mapped wall behind"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          sizes="100vw"
        />
      </motion.div>

      {/* Tonal overlay for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(28,27,31,0.55) 0%, rgba(28,27,31,0.40) 50%, rgba(28,27,31,0.65) 100%)',
          zIndex: 1,
        }}
      />

      <div style={{ textAlign: 'center', maxWidth: '640px', position: 'relative', zIndex: 2 }}>
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <SectionLabel color="primary">Original Experiences</SectionLabel>
        </div>

        <h1
          className="display-lg fade-in-up"
          style={{ color: 'var(--surface-bright)', marginBottom: 'var(--spacing-6)', animationDelay: '0.25s' }}
        >
          Something is forming. Help it become real.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{ color: 'var(--surface-container-highest)', animationDelay: '0.4s' }}
        >
          A cooperative immersive experience for groups of 4–12. You enter a projection-mapped room.
          The space responds to your presence. Something emerges. Your collective attention determines
          what happens next. 45 minutes. Walk out with a physical artifact that didn&apos;t exist before
          you arrived.
        </p>
      </div>
    </section>
  )
}
