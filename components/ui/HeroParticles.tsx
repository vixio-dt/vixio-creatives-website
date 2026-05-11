'use client'

import { useRef, useEffect, useCallback } from 'react'
import { type MotionValue, useMotionValueEvent } from 'framer-motion'

interface HeroParticlesProps {
  scrollProgress: MotionValue<number>
}

const PARTICLE_COUNT = 160
const CONNECTION_DIST = 120
const MOUSE_RADIUS = 180
const MOUSE_FORCE = 0.08
const DRIFT_SPEED = 0.15
const RETURN_FORCE = 0.003
const DAMPING = 0.97
const DOT_RADIUS = 1.5
const CYAN = { r: 58, g: 174, b: 216 }

interface Particle {
  x: number
  y: number
  ox: number
  oy: number
  vx: number
  vy: number
  phase: number
}

export function HeroParticles({ scrollProgress }: HeroParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const scrollRef = useRef(0)
  const rafRef = useRef<number>(0)
  const sizeRef = useRef({ w: 0, h: 0 })

  useMotionValueEvent(scrollProgress, 'change', (v) => {
    scrollRef.current = v
  })

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * w
      const y = Math.random() * h
      particles.push({
        x, y,
        ox: x, oy: y,
        vx: 0, vy: 0,
        phase: Math.random() * Math.PI * 2,
      })
    }
    particlesRef.current = particles
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const w = sizeRef.current.w
    const h = sizeRef.current.h
    const scroll = scrollRef.current
    const particles = particlesRef.current
    const mouse = mouseRef.current

    // Fade out during bg transition (0.44 -> 0.54)
    let alpha = 1
    if (scroll > 0.44) {
      alpha = Math.max(0, 1 - (scroll - 0.44) / 0.10)
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (alpha <= 0) {
      rafRef.current = requestAnimationFrame(animate)
      return
    }

    ctx.globalAlpha = alpha
    const time = performance.now() * 0.001

    // Update particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      // Gentle drift
      p.vx += Math.sin(time * DRIFT_SPEED + p.phase) * 0.01
      p.vy += Math.cos(time * DRIFT_SPEED + p.phase * 1.3) * 0.008

      // Return to origin
      p.vx += (p.ox - p.x) * RETURN_FORCE
      p.vy += (p.oy - p.y) * RETURN_FORCE

      // Mouse repulsion
      if (mouse.active) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
          p.vx += (dx / dist) * force * MOUSE_RADIUS
          p.vy += (dy / dist) * force * MOUSE_RADIUS
        }
      }

      p.vx *= DAMPING
      p.vy *= DAMPING
      p.x += p.vx
      p.y += p.vy
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i]
        const b = particles[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECTION_DIST) {
          const lineAlpha = (1 - dist / CONNECTION_DIST) * 0.12
          ctx.beginPath()
          ctx.moveTo(a.x * dpr, a.y * dpr)
          ctx.lineTo(b.x * dpr, b.y * dpr)
          ctx.strokeStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${lineAlpha})`
          ctx.lineWidth = 0.5 * dpr
          ctx.stroke()
        }
      }
    }

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      const distFromOrigin = Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2)
      const dotAlpha = 0.3 + Math.min(distFromOrigin / 80, 0.5)

      ctx.beginPath()
      ctx.arc(p.x * dpr, p.y * dpr, DOT_RADIUS * dpr, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${dotAlpha})`
      ctx.fill()
    }

    ctx.globalAlpha = 1
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      sizeRef.current = { w, h }
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      if (particlesRef.current.length === 0) {
        initParticles(w, h)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    resize()
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [initParticles, animate])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
