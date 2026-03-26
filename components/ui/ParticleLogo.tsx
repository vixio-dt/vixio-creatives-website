'use client'

import { useRef, useEffect, useCallback } from 'react'

interface Particle {
  originX: number
  originY: number
  x: number
  y: number
  vx: number
  vy: number
  r: number
  g: number
  b: number
  a: number
  size: number
}

interface ParticleLogoProps {
  width?: number
  height?: number
  className?: string
}

export function ParticleLogo({ width = 280, height = 140, className = '' }: ParticleLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })
  const rafRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // Load and sample SVG
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = '/vixio-logo.svg'

    img.onload = () => {
      // Draw SVG to offscreen canvas to sample pixels
      const offscreen = document.createElement('canvas')
      const offCtx = offscreen.getContext('2d')
      if (!offCtx) return

      offscreen.width = width
      offscreen.height = height

      const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight) * 0.85
      const drawW = img.naturalWidth * scale
      const drawH = img.naturalHeight * scale
      const offsetX = (width - drawW) / 2
      const offsetY = (height - drawH) / 2

      offCtx.drawImage(img, offsetX, offsetY, drawW, drawH)

      const imageData = offCtx.getImageData(0, 0, width, height)
      const pixels = imageData.data
      const particles: Particle[] = []
      const gap = 2

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const i = (y * width + x) * 4
          const a = pixels[i + 3]
          if (a > 30) {
            particles.push({
              originX: x,
              originY: y,
              x,
              y,
              vx: 0,
              vy: 0,
              r: pixels[i],
              g: pixels[i + 1],
              b: pixels[i + 2],
              a: a / 255,
              size: 1.4 + Math.random() * 1.0,
            })
          }
        }
      }

      particlesRef.current = particles

      // Start animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const mouse = mouseRef.current
        const pts = particlesRef.current
        timeRef.current += 0.016

        for (let j = 0; j < pts.length; j++) {
          const p = pts[j]

          if (mouse.active) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const distSq = dx * dx + dy * dy
            const dist = Math.sqrt(distSq)
            const forceRadius = 120

            if (dist < forceRadius && dist > 1) {
              const force = (forceRadius - dist) / forceRadius
              const forcePow = force * force * force * 18
              p.vx += (dx / dist) * forcePow
              p.vy += (dy / dist) * forcePow
            }
          }

          // Spring force back to origin
          const homeX = p.originX - p.x
          const homeY = p.originY - p.y
          const homeDist = Math.sqrt(homeX * homeX + homeY * homeY)
          const springStrength = homeDist > 30 ? 0.025 : 0.07
          p.vx += homeX * springStrength
          p.vy += homeY * springStrength

          // Damping
          p.vx *= 0.92
          p.vy *= 0.92

          // Idle drift
          const driftX = Math.sin(timeRef.current * 1.2 + j * 0.017) * 0.4
          const driftY = Math.cos(timeRef.current * 0.9 + j * 0.013) * 0.3

          p.x += p.vx + driftX * 0.15
          p.y += p.vy + driftY * 0.12

          // Draw
          ctx.globalAlpha = p.a * 0.9
          ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`
          ctx.beginPath()
          ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.globalAlpha = 1
        rafRef.current = requestAnimationFrame(animate)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [width, height])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999, active: false }
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || !e.touches[0]) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
      active: true,
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999, active: false }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        cursor: 'default',
        touchAction: 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Vixio Creatives — interactive logo"
      role="img"
    />
  )
}
