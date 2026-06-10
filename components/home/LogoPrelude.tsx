'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
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

export function LogoPrelude() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // NAV HOLD: add/remove vx-prelude-hold class with small hysteresis (add below 0.80, remove at/above 0.85).
  // Gated on reduced motion: when the prelude renders null, the class must never be added,
  // otherwise the nav would stay hidden forever (the scroll target ref never attaches).
  useEffect(() => {
    if (prefersReducedMotion) return
    document.documentElement.classList.add('vx-prelude-hold')
    return () => {
      document.documentElement.classList.remove('vx-prelude-hold')
    }
  }, [prefersReducedMotion])

  useMotionValueEvent(scrollYProgress, 'change', (p: number) => {
    if (p >= 0.85) {
      document.documentElement.classList.remove('vx-prelude-hold')
    } else if (p < 0.80) {
      document.documentElement.classList.add('vx-prelude-hold')
    }
  })

  // TIMELINE (300vh section)
  //
  // Phase 1  (0.00->0.18)  Emergence    logo deblurs and fades in
  // Phase 2  (0.18->0.62)  Hold         logo at full opacity, glow + streak mid-range
  // Phase 3  (0.62->0.80)  Pull-back    logo fades, scales down, moves up
  // Phase 4  (0.86->0.98)  Handoff      sticky stage fades out to paper

  // Logo opacity: piecewise like the original
  const logoOpacity = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0) return 0
    if (p <= 0.18) return p / 0.18
    if (p <= 0.62) return 1
    if (p >= 0.80) return 0
    return 1 - (p - 0.62) / 0.18
  })

  // Logo blur: 6px -> 0 over [0, 0.18], then stays 0
  const logoBlur = useTransform(
    scrollYProgress,
    [0, 0.18, 1],
    [6, 0, 0],
  )

  const logoFilter = useBlurFilter(logoBlur)

  // Logo scale: 0.96 -> 1.0 over [0, 0.18], hold to 0.62, then 1.0 -> 0.5 over [0.62, 0.80]
  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.62, 0.80, 1],
    [0.96, 1.0, 1.0, 0.5, 0.5],
  )

  // Logo y: 0 until 0.62, then 0 -> -48 over [0.62, 0.80]
  const logoY = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0.62) return 0
    if (p >= 0.80) return -48
    return -48 * ((p - 0.62) / 0.18)
  })

  // Cyan glow opacity: 0 at 0.10, ramp to 1 at [0.30, 0.40], down to 0 by 0.55
  const glowOpacity = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0.10 || p >= 0.55) return 0
    if (p <= 0.30) return (p - 0.10) / 0.20
    if (p <= 0.40) return 1
    return 1 - (p - 0.40) / 0.15
  })

  // Cyan glow scale: 0.6 -> 1.25 over [0.10, 0.40], back to 0.9 by 0.55
  const glowScale = useTransform(
    scrollYProgress,
    [0.10, 0.40, 0.55, 1],
    [0.6, 1.25, 0.9, 0.9],
  )

  // Cyan streak opacity: 0 until 0.26, peak 1 at 0.38, 0 by 0.50
  const streakOpacity = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0.26 || p >= 0.50) return 0
    if (p <= 0.30) return (p - 0.26) / 0.04 * 0.4
    if (p <= 0.36) return 0.4 + (p - 0.30) / 0.06 * 0.45
    if (p <= 0.38) return 0.85 + (p - 0.36) / 0.02 * 0.15
    if (p <= 0.42) return 1.0 - (p - 0.38) / 0.04 * 0.5
    return (1 - (p - 0.42) / 0.08) * 0.5
  })

  // Cyan streak x: same travel as original ([-1200 ... 1200] across [0.26, 0.50])
  const streakX = useTransform(
    scrollYProgress,
    [0, 0.26, 0.30, 0.36, 0.38, 0.42, 0.50, 1],
    [0, -1200, -600, -150, 0, 600, 1200, 1200],
  )

  // Stage fade-out handoff: 1 -> 0 over [0.86, 0.98]
  const stageOpacity = useTransform(
    scrollYProgress,
    [0.86, 0.98],
    [1, 0],
  )

  if (prefersReducedMotion) return null

  return (
    <section
      ref={containerRef}
      aria-hidden="true"
      style={{ height: '300vh', position: 'relative', background: 'var(--surface)' }}
    >
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100dvh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--surface)',
          opacity: stageOpacity,
        }}
      >
        {/* Cyan glow behind logo */}
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

        {/* Logo */}
        <motion.div
          style={{
            width: 'min(280px, 60vw)',
            position: 'relative',
            zIndex: 1,
            opacity: logoOpacity,
            scale: logoScale,
            filter: logoFilter,
            y: logoY,
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

        {/* Cyan anamorphic streak (restyled for paper) */}
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
      </motion.div>
    </section>
  )
}
