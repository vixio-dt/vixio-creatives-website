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

  // --- Background ---
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.48, 0.55, 0.62, 0.72, 0.80],
    ['#0A0A0A', '#111111', '#333333', '#888888', '#EDEAE6', '#FAFAF8'],
  )

  // --- Logo ---
  const logoOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [0.15, 0.5, 1])
  const logoExitX = useTransform(scrollYProgress, [0.88, 1.0], [0, -400])
  const logoExitOpacity = useTransform(scrollYProgress, [0.88, 1.0], [1, 0])
  const logoCombinedOpacity = useTransform(
    [logoOpacity, logoExitOpacity] as MotionValue[],
    ([entrance, exit]: number[]) => entrance * exit,
  )
  const logoBrightness = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18, 0.30, 0.40, 0.48, 0.58, 0.65, 0.72],
    [0.3, 0.5, 0.8, 1.5, 2.5, 3.0, 2.0, 1.05, 1.0],
  )
  const logoBlur = useTransform(scrollYProgress, [0, 0.08, 0.18], [6, 3, 0])
  const logoScale = useTransform(scrollYProgress, [0, 0.18], [0.97, 1.0])

  const dsRadius = useTransform(
    scrollYProgress,
    [0, 0.25, 0.30, 0.40, 0.48, 0.55, 0.62],
    [0, 0, 30, 50, 60, 30, 0],
  )
  const dsOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.30, 0.40, 0.48, 0.55, 0.62],
    [0, 0, 0.5, 0.7, 0.6, 0.3, 0],
  )
  const dsR = useTransform(scrollYProgress, [0.30, 0.40, 0.48, 0.58], [58, 143, 255, 143])
  const dsG = useTransform(scrollYProgress, [0.30, 0.40, 0.48, 0.58], [174, 225, 255, 225])
  const dsB = useTransform(scrollYProgress, [0.30, 0.40, 0.48, 0.58], [216, 255, 255, 255])

  const logoFilter = useCompositeFilter(logoBrightness, logoBlur, dsRadius, dsR, dsG, dsB, dsOpacity)

  // --- Radial Glow ---
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.30, 0.42, 0.48, 0.55, 0.62, 0.65],
    [0, 0.15, 0.4, 0.85, 1.0, 0.4, 0.05, 0],
  )
  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.30, 0.42, 0.48, 0.55, 0.62, 0.65],
    [0.5, 0.7, 0.9, 1.2, 1.4, 1.1, 0.8, 0.5],
  )

  // --- Anamorphic Streak ---
  const streakOpacity = useTransform(
    scrollYProgress,
    [0, 0.32, 0.35, 0.42, 0.48, 0.54, 0.60, 0.65],
    [0, 0, 0.4, 0.85, 1.0, 0.7, 0.15, 0],
  )
  const streakProgress = useTransform(
    scrollYProgress,
    [0.32, 0.35, 0.42, 0.48, 0.54, 0.60, 0.65],
    [0, 0.25, 0.4375, 0.5, 0.667, 0.875, 1.0],
  )

  // --- Scroll Indicator ---
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.12],
    [0.6, 0.4, 0],
  )

  if (prefersReducedMotion) {
    return (
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
    )
  }

  return (
    <section ref={containerRef} id="scroll-logo-reveal" style={{ height: '300vh', position: 'relative' }}>
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
            top: '50%',
            left: '50%',
            width: 'min(600px, 90vw)',
            height: 'min(600px, 90vw)',
            borderRadius: '50%',
            x: '-50%',
            y: '-50%',
            scale: glowScale,
            opacity: glowOpacity,
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
            opacity: logoCombinedOpacity,
            x: logoExitX,
            scale: logoScale,
            filter: logoFilter,
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
            top: '50%',
            left: '50%',
            width: '250vw',
            height: '2px',
            y: '-50%',
            x: '-50%',
            opacity: streakOpacity,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 15%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.7) 44%, rgba(255,255,255,1.0) 50%, rgba(255,255,255,0.7) 56%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0.03) 85%, transparent 100%)',
            boxShadow:
              '0 0 20px 6px rgba(143, 225, 255, 0.35), 0 0 60px 15px rgba(58, 174, 216, 0.15)',
            pointerEvents: 'none',
            // @ts-expect-error CSS custom property for vw-based translateX
            '--streak-progress': streakProgress,
            translate: 'calc((var(--streak-progress) - 0.5) * 240vw) 0',
          }}
        />

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
