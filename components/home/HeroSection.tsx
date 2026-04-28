'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export function HeroSection() {
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
        padding: 'calc(var(--spacing-20) + 80px) var(--spacing-6) var(--spacing-20)',
      }}
    >
      {/* Parallax background image — extends beyond section for travel room */}
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
          src="/images/hero-experience-room-v2.webp"
          alt="Vixio experience room — visitors gathered around an oak table examining brass objects in a concrete-walled space"
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
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(28,27,31,0.60) 0%, rgba(28,27,31,0.40) 50%, rgba(28,27,31,0.70) 100%)',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          maxWidth: '700px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1
          className="display-lg fade-in-up"
          style={{
            color: '#F2F0EC',
            marginBottom: 'var(--spacing-6)',
            animationDelay: '0.3s',
          }}
        >
          Stories Across Worlds.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{
            color: 'rgba(242, 240, 236, 0.85)',
            maxWidth: '580px',
            margin: '0 auto',
            marginBottom: 'var(--spacing-8)',
            animationDelay: '0.5s',
          }}
        >
          Vixio Creatives is a creative studio based in Hong Kong. We create original
          stories and bring them to life across formats — physical + digital experiences,
          artifacts, film, and content. Every format serves the story. Every story deserves more
          than one world.
        </p>

        <div
          className="fade-in-up"
          style={{
            display: 'flex',
            gap: 'var(--spacing-4)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animationDelay: '0.7s',
          }}
        >
          <GradientButton href="/about">Our Vision</GradientButton>
          <GhostButton href="/services">Work With Us</GhostButton>
        </div>
      </div>
    </section>
  )
}
