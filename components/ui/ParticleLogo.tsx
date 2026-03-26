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

  const sampleLogo = useCallback(async (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    // Load SVG as image
    const img = new Image()
    img.crossOrigin = 'anonymous'

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = reject
      img.src = '/vixio-logo.svg'
    })

    // Draw SVG to offscreen canvas to sample pixels
    const offscreen = document.createElement('canvas')
    const offCtx = offscreen.getContext('2d')
    if (!offCtx) return

    offscreen.width = width
    offscreen.height = height

    // Scale SVG to fit canvas
    const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight) * 0.85
    const drawW = img.naturalWidth * scale
    const drawH = img.naturalHeight * scale
    const offsetX = (width - drawW) / 2
    const offsetY = (height - drawH) / 2

    offCtx.drawImage(img, offsetX, offsetY, drawW, drawH)

    // Sample pixels
    const imageData = offCtx.getImageData(0, 0, width, height)
    const pixels = imageData.data
    const particles: Particle[] = []
    const gap = 2 // sample every 2px

    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const i = (y * width + x) * 4
        const a = pixels[i + 3]
        if (a > 30) { // visible pixel
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
            size: 1.2 + Math.random() * 0.8,
          })
        }
      }
    }

    particlesRef.current = particles
  }, [width, height])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const mouse = mouseRef.current
    const particles = particlesRef.current
    timeRef.current += 0.016 // ~60fps

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      if (mouse.active) {
        // Repulsion force from cursor
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distSq = dx * dx + dy * dy
        const dist = Math.sqrt(distSq)
        const forceRadius = 80

        if (dist < forceRadius && dist > 0) {
          const force = (forceRadius - dist) / forceRadius
          const forcePow = force * force * 8
          p.vx += (dx / dist) * forcePow
          p.vy += (dy / dist) * forcePow
        }
      }

      // Spring force back to origin (magnetic reassembly)
      const homeX = p.originX - p.x
      const homeY = p.originY - p.y
      p.vx += homeX * 0.06
      p.vy += homeY * 0.06

      // Damping
      p.vx *= 0.88
      p.vy *= 0.88

      // Subtle idle drift (sinusoidal)
      const drift = Math.sin(timeRef.current * 1.5 + i * 0.01) * 0.3
      
      // Update position
      p.x += p.vx + drift * 0.1
      p.y += p.vy + Math.cos(timeRef.current * 1.2 + i * 0.013) * 0.1

      // Draw particle
      ctx.globalAlpha = p.a * 0.9
      ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`
      ctx.beginPath()
      ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.globalAlpha = 1
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    sampleLogo(canvas).then(() => {
      rafRef.current = requestAnimationFrame(animate)
    })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [sampleLogo, animate])

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
