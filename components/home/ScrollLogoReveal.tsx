'use client'

import Image from 'next/image'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

function useCompositeFilter(
  brightness: MotionValue<number>,
  blur: MotionValue<number>,
  dsRadius: MotionValue<number>,
  dsR: MotionValue<number>,
  dsG: MotionValue<number>,
  dsB: MotionValue<number>,
  dsOpacity: MotionValue<number>,
) {
  return useTransform(
    [brightness, blur, dsRadius, dsR, dsG, dsB, dsOpacity] as MotionValue[],
    ([b, bl, r, dr, dg, db, o]: number[]) => {
      if (b === 1 && bl === 0 && (r <= 0 || o <= 0)) return 'none'
      const base = `brightness(${b}) blur(${bl}px)`
      if (r > 0 && o > 0) {
        return `${base} drop-shadow(0 0 ${r}px rgba(${Math.round(dr)}, ${Math.round(dg)}, ${Math.round(db)}, ${o}))`
      }
      return base
    },
  )
}

export function ScrollLogoReveal() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  /*
   * TIMELINE (400vh section = 300vh scroll distance)
   *
   * Every useTransform spans the FULL [0…1] range to prevent extrapolation.
   *
   * Phase 1  (0.00→0.15)  Emergence       ~45vh  Logo fades in, deblurs
   * Phase 2  (0.15→0.40)  Peak glow       ~75vh  Brightness peaks, glow/streak
   * Phase 3  (0.40→0.50)  Effects fade    ~30vh  ALL effects → 0, brightness → 1
   * Phase 4  (0.48→0.58)  Bg transition   ~30vh  Dark → light background
   * Phase 4b (0.58→0.70)  Logo moment     ~36vh  Logo rests centered, natural colors
   * Phase 5  (0.70→0.90)  The Handoff     ~60vh  Logo exits, hero enters
   * Phase 6  (0.90→1.00)  Settle          ~30vh  Hero fully visible
   */

  // --- Background: stays dark through phases 1-3, transitions in phase 4 ---
  const bgColor = useTransform(
    scrollYProgress,
    [0,        0.48,      0.51,      0.54,      0.57,      0.58,      1],
    ['#0A0A0A','#0A0A0A', '#444444', '#888888', '#CDCAC6', '#FAFAF8', '#FAFAF8'],
  )

  // --- Logo brightness: peaks at 0.38, returns to 1.0 by 0.48 (before bg lightens) ---
  const logoBrightness = useTransform(
    scrollYProgress,
    [0,   0.06, 0.15, 0.25, 0.34, 0.38, 0.44, 0.48, 1],
    [0.3, 0.5,  0.8,  1.5,  2.5,  3.0,  1.5,  1.0,  1.0],
  )

  const logoBlur = useTransform(
    scrollYProgress,
    [0, 0.06, 0.15, 1],
    [6, 3,    0,    0],
  )

  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    [0.97, 1.0, 1.0],
  )

  // --- Drop shadow: ends by 0.44, well before bg lightens at 0.48 ---
  const dsRadius = useTransform(
    scrollYProgress,
    [0, 0.20, 0.25, 0.34, 0.38, 0.44, 1],
    [0, 0,    30,   50,   60,   0,    0],
  )
  const dsOpacity = useTransform(
    scrollYProgress,
    [0, 0.20, 0.25, 0.34, 0.38, 0.44, 1],
    [0, 0,    0.5,  0.7,  0.6,  0,    0],
  )
  const dsR = useTransform(scrollYProgress, [0, 0.25, 0.34, 0.38, 1], [58,  58,  143, 255, 143])
  const dsG = useTransform(scrollYProgress, [0, 0.25, 0.34, 0.38, 1], [174, 174, 225, 255, 225])
  const dsB = useTransform(scrollYProgress, [0, 0.25, 0.34, 0.38, 1], [216, 216, 255, 255, 255])

  const logoFilter = useCompositeFilter(logoBrightness, logoBlur, dsRadius, dsR, dsG, dsB, dsOpacity)

  // --- Logo opacity: fade in (phase 1), hold through moment, fade out (phase 5) ---
  const logoOpacity = useTransform(scrollYProgress, (p) => {
    if (p <= 0) return 0.15
    if (p <= 0.06) return 0.15 + (p / 0.06) * 0.35
    if (p <= 0.15) return 0.5 + ((p - 0.06) / 0.09) * 0.5
    if (p <= 0.70) return 1
    if (p >= 0.84) return 0
    return 1 - (p - 0.70) / 0.14
  })

  // --- Logo exit: drift left during handoff (starts at 0.70) ---
  const logoX = useTransform(scrollYProgress, (p) => {
    if (p <= 0.70) return 0
    if (p >= 0.86) return -300
    return -300 * ((p - 0.70) / 0.16)
  })

  // --- Radial glow: ends by 0.44 ---
  const glowOpacity = useTransform(scrollYProgress, (p) => {
    if (p <= 0 || p >= 0.44) return 0
    if (p <= 0.15) return p / 0.15 * 0.15
    if (p <= 0.25) return 0.15 + (p - 0.15) / 0.10 * 0.25
    if (p <= 0.34) return 0.4 + (p - 0.25) / 0.09 * 0.45
    if (p <= 0.38) return 0.85 + (p - 0.34) / 0.04 * 0.15
    if (p <= 0.42) return 1.0 - (p - 0.38) / 0.04 * 0.7
    return (1 - (p - 0.42) / 0.02) * 0.3
  })
  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.34, 0.38, 0.42, 0.44, 1],
    [0.5, 0.7, 0.9, 1.2,  1.4,  1.1,  0.5,  0.5],
  )

  // --- Anamorphic streak: ends by 0.44 ---
  const streakOpacity = useTransform(scrollYProgress, (p) => {
    if (p <= 0.26 || p >= 0.44) return 0
    if (p <= 0.30) return (p - 0.26) / 0.04 * 0.4
    if (p <= 0.36) return 0.4 + (p - 0.30) / 0.06 * 0.45
    if (p <= 0.38) return 0.85 + (p - 0.36) / 0.02 * 0.15
    if (p <= 0.42) return 1.0 - (p - 0.38) / 0.04 * 0.5
    return (1 - (p - 0.42) / 0.02) * 0.5
  })
  const streakX = useTransform(
    scrollYProgress,
    [0, 0.26, 0.30, 0.36, 0.38, 0.42, 0.44, 1],
    [0, -1200, -600, -150, 0,    600,  1200, 1200],
  )

  // --- Scroll indicator ---
  const scrollIndicatorOpacity = useTransform(scrollYProgress, (p) => {
    if (p >= 0.10) return 0
    if (p <= 0) return 0.6
    if (p <= 0.04) return 0.6 - (p / 0.04) * 0.2
    return 0.4 * (1 - (p - 0.04) / 0.06)
  })

  // --- Hero content entrance: slides in from right during phase 5 (starts 0.70) ---
  const headlineX = useTransform(scrollYProgress, (p) => {
    if (p <= 0.70) return 400
    if (p >= 0.82) return 0
    return 400 * (1 - (p - 0.70) / 0.12)
  })
  const headlineOpacity = useTransform(scrollYProgress, (p) => {
    if (p <= 0.70) return 0
    if (p >= 0.82) return 1
    return (p - 0.70) / 0.12
  })

  const bodyX = useTransform(scrollYProgress, (p) => {
    if (p <= 0.74) return 500
    if (p >= 0.86) return 0
    return 500 * (1 - (p - 0.74) / 0.12)
  })
  const bodyOpacity = useTransform(scrollYProgress, (p) => {
    if (p <= 0.74) return 0
    if (p >= 0.86) return 1
    return (p - 0.74) / 0.12
  })

  const buttonsX = useTransform(scrollYProgress, (p) => {
    if (p <= 0.78) return 600
    if (p >= 0.90) return 0
    return 600 * (1 - (p - 0.78) / 0.12)
  })
  const buttonsOpacity = useTransform(scrollYProgress, (p) => {
    if (p <= 0.78) return 0
    if (p >= 0.90) return 1
    return (p - 0.78) / 0.12
  })

  if (prefersReducedMotion) {
    return (
      <>
        <section
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--surface)',
          }}
        >
          <div style={{ width: 'var(--logo-width)' }}>
            <Image
              src="/vixio-logo.svg"
              alt="Vixio Creatives"
              width={400}
              height={400}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--surface)',
            padding: 'calc(var(--spacing-20) + 80px) var(--spacing-6) var(--spacing-20)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '700px' }}>
            <h1
              className="display-lg"
              style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
            >
              Stories across worlds.
            </h1>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                maxWidth: '580px',
                margin: '0 auto',
                marginBottom: 'var(--spacing-8)',
              }}
            >
              Vixio Creatives is a transmedia creative studio based in Hong Kong. We create original
              stories and bring them to life across formats — immersive phygital experiences, interactive
              collectibles, film, and content. Every format serves the story. Every story deserves more
              than one way to be experienced.
            </p>
            <div
              style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <GradientButton href="/about">Our Vision</GradientButton>
              <GhostButton href="/services">Work With Us</GhostButton>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <section ref={containerRef} id="scroll-logo-reveal" style={{ height: '400vh', position: 'relative' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: bgColor,
          }}
        />

        {/* Radial glow */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 'min(600px, 90vw)',
            height: 'min(600px, 90vw)',
            borderRadius: '50%',
            opacity: glowOpacity,
            scale: glowScale,
            background:
              'radial-gradient(circle, rgba(58, 174, 216, 0.6) 0%, rgba(143, 225, 255, 0.3) 35%, rgba(143, 225, 255, 0.05) 65%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Logo */}
        <motion.div
          style={{
            width: 'var(--logo-width)',
            position: 'relative',
            zIndex: 1,
            opacity: logoOpacity,
            scale: logoScale,
            filter: logoFilter,
            x: logoX,
            willChange: 'filter, transform, opacity',
          }}
        >
          <Image
            src="/vixio-logo.svg"
            alt="Vixio Creatives"
            width={400}
            height={400}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>

        {/* Anamorphic streak */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '250vw',
            height: '2px',
            opacity: streakOpacity,
            x: streakX,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 15%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.7) 44%, rgba(255,255,255,1.0) 50%, rgba(255,255,255,0.7) 56%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0.03) 85%, transparent 100%)',
            boxShadow:
              '0 0 20px 6px rgba(143, 225, 255, 0.35), 0 0 60px 15px rgba(58, 174, 216, 0.15)',
            pointerEvents: 'none',
          }}
        />

        {/* Hero content — enters from right during handoff */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '700px', padding: '0 var(--spacing-6)' }}>
            <motion.h1
              className="display-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-6)',
                x: headlineX,
                opacity: headlineOpacity,
              }}
            >
              Stories across worlds.
            </motion.h1>

            <motion.p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                maxWidth: '580px',
                margin: '0 auto',
                marginBottom: 'var(--spacing-8)',
                x: bodyX,
                opacity: bodyOpacity,
              }}
            >
              Vixio Creatives is a transmedia creative studio based in Hong Kong. We create original
              stories and bring them to life across formats — immersive phygital experiences, interactive
              collectibles, film, and content. Every format serves the story. Every story deserves more
              than one way to be experienced.
            </motion.p>

            <motion.div
              style={{
                display: 'flex',
                gap: 'var(--spacing-4)',
                justifyContent: 'center',
                flexWrap: 'wrap',
                x: buttonsX,
                opacity: buttonsOpacity,
                pointerEvents: 'auto',
              }}
            >
              <GradientButton href="/about">Our Vision</GradientButton>
              <GhostButton href="/services">Work With Us</GhostButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            x: '-50%',
            opacity: scrollIndicatorOpacity,
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
