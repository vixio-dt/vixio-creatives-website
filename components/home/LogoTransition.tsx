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

// Simplified composite filter: blur only (no brightness pump, no drop-shadow RGB machinery).
// When blur reaches 0 and nothing else is active, returns 'none' so the GPU layer is released.
function useBlurFilter(blur: MotionValue<number>): MotionValue<string> {
  return useTransform(blur, (b: number) => {
    if (b <= 0) return 'none'
    return `blur(${b}px)`
  })
}

export function LogoTransition() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // TIMELINE (200vh interstitial section)
  //
  // Phase 1  (0.06->0.30)  Projector ignition  lamp flicker, deblur, scale settle
  // Phase 2  (0.30->0.62)  Hold                logo at full opacity + ambient glow
  // Phase 3  (0.35->0.62)  Beam sweep          cyan streak crosses once
  // Phase 4  (0.62->end)   Ambient hold        logo stays full, glow dims to 0.35
  //
  // No opacity, scale, or y exit ramps -- scroll is the exit.

  // PROJECTOR IGNITION FLICKER: scrub-driven piecewise over p.
  // 0 for p <= 0.06; linear segments (0.06,0)->(0.10,0.55)->(0.14,0.25)->(0.18,0.80)
  // ->(0.22,0.45)->(0.30,1); then 1 for all p > 0.30.
  const logoOpacity = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0.06) return 0
    if (p <= 0.10) return (p - 0.06) / 0.04 * 0.55
    if (p <= 0.14) return 0.55 - (p - 0.10) / 0.04 * 0.30
    if (p <= 0.18) return 0.25 + (p - 0.14) / 0.04 * 0.55
    if (p <= 0.22) return 0.80 - (p - 0.18) / 0.04 * 0.35
    if (p <= 0.30) return 0.45 + (p - 0.22) / 0.08 * 0.55
    return 1
  })

  // Logo blur: 6px -> 0 over [0.06, 0.30], then stays 0
  const logoBlur = useTransform(
    scrollYProgress,
    [0.06, 0.30, 1],
    [6, 0, 0],
  )

  const logoFilter = useBlurFilter(logoBlur)

  // Logo scale: 0.97 -> 1.0 over [0.06, 0.30], hold 1.0 forever. No y transform.
  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.06, 0.30, 1],
    [0.97, 0.97, 1.0, 1.0],
  )

  // Cyan glow opacity: 0 until 0.20, ramp to 1 over [0.20, 0.45],
  // hold 1 to 0.60, settle down to 0.35 over [0.60, 0.80], hold 0.35 to end.
  const glowOpacity = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0.20) return 0
    if (p <= 0.45) return (p - 0.20) / 0.25
    if (p <= 0.60) return 1
    if (p <= 0.80) return 1 - (p - 0.60) / 0.20 * 0.65
    return 0.35
  })

  // Cyan glow scale: 0.6 at 0.20 -> 1.2 at 0.55 -> 1.0 at 0.80, hold.
  const glowScale = useTransform(
    scrollYProgress,
    [0.20, 0.55, 0.80, 1],
    [0.6, 1.2, 1.0, 1.0],
  )

  // Cyan streak opacity: beam sweep compressed into [0.35, 0.62].
  // 0 until 0.35, peak 1 at 0.50, 0 at/after 0.62.
  const streakOpacity = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0.35 || p >= 0.62) return 0
    if (p <= 0.38) return (p - 0.35) / 0.03 * 0.4
    if (p <= 0.44) return 0.4 + (p - 0.38) / 0.06 * 0.45
    if (p <= 0.50) return 0.85 + (p - 0.44) / 0.06 * 0.15
    if (p <= 0.54) return 1.0 - (p - 0.50) / 0.04 * 0.5
    return (1 - (p - 0.54) / 0.08) * 0.5
  })

  // Cyan streak x: [-1200 at 0.35 -> 0 at 0.50 -> 1200 at 0.62], holding ends.
  const streakX = useTransform(
    scrollYProgress,
    [0, 0.35, 0.50, 0.62, 1],
    [-1200, -1200, 0, 1200, 1200],
  )

  if (prefersReducedMotion) return null

  return (
    <section
      ref={containerRef}
      aria-hidden="true"
      style={{ height: '200vh', position: 'relative', background: 'var(--surface)' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100dvh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--surface)',
        }}
      >
        {/* Cyan glow behind logo -- lamp stays lit at ambient level */}
        <motion.div
          style={{
            position: 'absolute',
            width: 'min(640px, 92vw)',
            height: 'min(640px, 92vw)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(58,174,216,0.28) 0%, rgba(58,174,216,0.10) 45%, transparent 75%)',
            opacity: glowOpacity,
            scale: glowScale,
            pointerEvents: 'none',
          }}
        />

        {/* Logo -- ignites via flicker, holds full opacity, never fades */}
        <motion.div
          style={{
            width: 'min(280px, 60vw)',
            position: 'relative',
            zIndex: 1,
            opacity: logoOpacity,
            scale: logoScale,
            filter: logoFilter,
            willChange: 'filter, transform, opacity',
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/vixio-logo.svg"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>

        {/* Cyan anamorphic streak -- one beam sweep mid-scrub */}
        <motion.div
          style={{
            position: 'absolute',
            width: '250vw',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(58,174,216,0.05) 15%, rgba(58,174,216,0.25) 30%, rgba(58,174,216,0.8) 50%, rgba(58,174,216,0.25) 70%, rgba(58,174,216,0.05) 85%, transparent 100%)',
            boxShadow: '0 0 18px 4px rgba(58, 174, 216, 0.25)',
            opacity: streakOpacity,
            x: streakX,
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  )
}
