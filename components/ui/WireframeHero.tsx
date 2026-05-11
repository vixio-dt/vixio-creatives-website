'use client'

import { useRef, useEffect } from 'react'

interface Line {
  x1: number; y1: number; x2: number; y2: number
  drawStart: number; drawEnd: number
  weight: number; opacity: number
}

interface Dot {
  x: number; y: number; r: number
  drawAt: number; opacity: number
}

const CYAN = { r: 58, g: 174, b: 216 }
const CURSOR_RADIUS = 180

function easeOutQuart(t: number): number {
  return 1 - (1 - t) ** 4
}

const VENUE: Line[] = [
  // Outer boundary
  { x1: 0.08, y1: 0.06, x2: 0.92, y2: 0.06, drawStart: 0.00, drawEnd: 0.05, weight: 2.0, opacity: 0.28 },
  { x1: 0.92, y1: 0.06, x2: 0.92, y2: 0.94, drawStart: 0.01, drawEnd: 0.06, weight: 2.0, opacity: 0.28 },
  { x1: 0.92, y1: 0.94, x2: 0.08, y2: 0.94, drawStart: 0.02, drawEnd: 0.07, weight: 2.0, opacity: 0.28 },
  { x1: 0.08, y1: 0.94, x2: 0.08, y2: 0.06, drawStart: 0.03, drawEnd: 0.08, weight: 2.0, opacity: 0.28 },

  // Central atrium
  { x1: 0.40, y1: 0.36, x2: 0.60, y2: 0.36, drawStart: 0.06, drawEnd: 0.11, weight: 1.5, opacity: 0.50 },
  { x1: 0.60, y1: 0.36, x2: 0.60, y2: 0.64, drawStart: 0.07, drawEnd: 0.12, weight: 1.5, opacity: 0.50 },
  { x1: 0.60, y1: 0.64, x2: 0.40, y2: 0.64, drawStart: 0.08, drawEnd: 0.13, weight: 1.5, opacity: 0.50 },
  { x1: 0.40, y1: 0.64, x2: 0.40, y2: 0.36, drawStart: 0.09, drawEnd: 0.14, weight: 1.5, opacity: 0.50 },

  // Major wing dividers (horizontal)
  { x1: 0.08, y1: 0.36, x2: 0.40, y2: 0.36, drawStart: 0.08, drawEnd: 0.14, weight: 1.3, opacity: 0.22 },
  { x1: 0.60, y1: 0.36, x2: 0.92, y2: 0.36, drawStart: 0.09, drawEnd: 0.15, weight: 1.3, opacity: 0.22 },
  { x1: 0.08, y1: 0.64, x2: 0.40, y2: 0.64, drawStart: 0.10, drawEnd: 0.16, weight: 1.3, opacity: 0.22 },
  { x1: 0.60, y1: 0.64, x2: 0.92, y2: 0.64, drawStart: 0.11, drawEnd: 0.17, weight: 1.3, opacity: 0.22 },
  // Major wing dividers (vertical)
  { x1: 0.40, y1: 0.06, x2: 0.40, y2: 0.36, drawStart: 0.10, drawEnd: 0.16, weight: 1.3, opacity: 0.22 },
  { x1: 0.60, y1: 0.06, x2: 0.60, y2: 0.36, drawStart: 0.11, drawEnd: 0.17, weight: 1.3, opacity: 0.22 },
  { x1: 0.40, y1: 0.64, x2: 0.40, y2: 0.94, drawStart: 0.12, drawEnd: 0.18, weight: 1.3, opacity: 0.22 },
  { x1: 0.60, y1: 0.64, x2: 0.60, y2: 0.94, drawStart: 0.13, drawEnd: 0.19, weight: 1.3, opacity: 0.22 },

  // NW wing internal
  { x1: 0.08, y1: 0.22, x2: 0.28, y2: 0.22, drawStart: 0.14, drawEnd: 0.20, weight: 1.0, opacity: 0.18 },
  { x1: 0.28, y1: 0.06, x2: 0.28, y2: 0.28, drawStart: 0.15, drawEnd: 0.21, weight: 1.0, opacity: 0.18 },
  { x1: 0.14, y1: 0.28, x2: 0.28, y2: 0.28, drawStart: 0.16, drawEnd: 0.22, weight: 0.8, opacity: 0.14 },

  // NE wing internal
  { x1: 0.72, y1: 0.06, x2: 0.72, y2: 0.26, drawStart: 0.16, drawEnd: 0.22, weight: 1.0, opacity: 0.18 },
  { x1: 0.72, y1: 0.26, x2: 0.92, y2: 0.26, drawStart: 0.17, drawEnd: 0.23, weight: 1.0, opacity: 0.18 },
  { x1: 0.80, y1: 0.12, x2: 0.80, y2: 0.26, drawStart: 0.18, drawEnd: 0.24, weight: 0.8, opacity: 0.14 },

  // SW wing internal
  { x1: 0.08, y1: 0.78, x2: 0.30, y2: 0.78, drawStart: 0.18, drawEnd: 0.24, weight: 1.0, opacity: 0.18 },
  { x1: 0.30, y1: 0.64, x2: 0.30, y2: 0.84, drawStart: 0.19, drawEnd: 0.25, weight: 1.0, opacity: 0.18 },

  // SE wing internal
  { x1: 0.68, y1: 0.64, x2: 0.68, y2: 0.84, drawStart: 0.20, drawEnd: 0.26, weight: 1.0, opacity: 0.18 },
  { x1: 0.68, y1: 0.84, x2: 0.92, y2: 0.84, drawStart: 0.21, drawEnd: 0.27, weight: 1.0, opacity: 0.18 },
  { x1: 0.78, y1: 0.70, x2: 0.78, y2: 0.84, drawStart: 0.22, drawEnd: 0.28, weight: 0.8, opacity: 0.14 },
  { x1: 0.78, y1: 0.70, x2: 0.88, y2: 0.70, drawStart: 0.23, drawEnd: 0.28, weight: 0.8, opacity: 0.14 },

  // Corridor center lines
  { x1: 0.50, y1: 0.10, x2: 0.50, y2: 0.30, drawStart: 0.22, drawEnd: 0.28, weight: 0.5, opacity: 0.10 },
  { x1: 0.50, y1: 0.70, x2: 0.50, y2: 0.90, drawStart: 0.24, drawEnd: 0.30, weight: 0.5, opacity: 0.10 },
  { x1: 0.14, y1: 0.50, x2: 0.34, y2: 0.50, drawStart: 0.26, drawEnd: 0.32, weight: 0.5, opacity: 0.10 },
  { x1: 0.66, y1: 0.50, x2: 0.86, y2: 0.50, drawStart: 0.28, drawEnd: 0.34, weight: 0.5, opacity: 0.10 },

  // Detail furniture markers
  { x1: 0.14, y1: 0.12, x2: 0.20, y2: 0.12, drawStart: 0.28, drawEnd: 0.33, weight: 0.6, opacity: 0.12 },
  { x1: 0.14, y1: 0.16, x2: 0.20, y2: 0.16, drawStart: 0.29, drawEnd: 0.34, weight: 0.6, opacity: 0.12 },
  { x1: 0.82, y1: 0.14, x2: 0.88, y2: 0.14, drawStart: 0.30, drawEnd: 0.35, weight: 0.6, opacity: 0.12 },
  { x1: 0.82, y1: 0.18, x2: 0.88, y2: 0.18, drawStart: 0.31, drawEnd: 0.36, weight: 0.6, opacity: 0.12 },
  { x1: 0.82, y1: 0.74, x2: 0.88, y2: 0.74, drawStart: 0.32, drawEnd: 0.37, weight: 0.6, opacity: 0.12 },
  { x1: 0.14, y1: 0.84, x2: 0.22, y2: 0.84, drawStart: 0.33, drawEnd: 0.38, weight: 0.6, opacity: 0.12 },
  { x1: 0.14, y1: 0.88, x2: 0.22, y2: 0.88, drawStart: 0.34, drawEnd: 0.38, weight: 0.6, opacity: 0.12 },

  // Entry point accents
  { x1: 0.48, y1: 0.04, x2: 0.48, y2: 0.08, drawStart: 0.24, drawEnd: 0.28, weight: 0.7, opacity: 0.20 },
  { x1: 0.52, y1: 0.04, x2: 0.52, y2: 0.08, drawStart: 0.24, drawEnd: 0.28, weight: 0.7, opacity: 0.20 },
  { x1: 0.06, y1: 0.48, x2: 0.10, y2: 0.48, drawStart: 0.26, drawEnd: 0.30, weight: 0.7, opacity: 0.20 },
  { x1: 0.06, y1: 0.52, x2: 0.10, y2: 0.52, drawStart: 0.26, drawEnd: 0.30, weight: 0.7, opacity: 0.20 },
]

const STATIONS: Dot[] = [
  { x: 0.50, y: 0.50, r: 3.5, drawAt: 0.12, opacity: 0.55 },
  { x: 0.20, y: 0.20, r: 2.5, drawAt: 0.22, opacity: 0.30 },
  { x: 0.80, y: 0.18, r: 2.5, drawAt: 0.24, opacity: 0.30 },
  { x: 0.20, y: 0.80, r: 2.5, drawAt: 0.26, opacity: 0.30 },
  { x: 0.80, y: 0.78, r: 2.5, drawAt: 0.28, opacity: 0.30 },
  { x: 0.50, y: 0.20, r: 2.0, drawAt: 0.26, opacity: 0.20 },
  { x: 0.50, y: 0.80, r: 2.0, drawAt: 0.28, opacity: 0.20 },
  { x: 0.24, y: 0.50, r: 2.0, drawAt: 0.30, opacity: 0.20 },
  { x: 0.76, y: 0.50, r: 2.0, drawAt: 0.32, opacity: 0.20 },
  { x: 0.17, y: 0.14, r: 1.5, drawAt: 0.32, opacity: 0.15 },
  { x: 0.85, y: 0.16, r: 1.5, drawAt: 0.33, opacity: 0.15 },
  { x: 0.85, y: 0.76, r: 1.5, drawAt: 0.34, opacity: 0.15 },
  { x: 0.18, y: 0.86, r: 1.5, drawAt: 0.35, opacity: 0.15 },
]

export function WireframeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const section = canvas.closest('section')
    if (!section) return

    let w = 0
    let h = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const getScrollProgress = () => {
      const rect = section.getBoundingClientRect()
      const sectionH = section.offsetHeight
      const vh = window.innerHeight
      const scrollDist = sectionH - vh
      if (scrollDist <= 0) return 0
      const progress = -rect.top / scrollDist
      return Math.max(0, Math.min(1, progress))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const scroll = getScrollProgress()
      const mouse = mouseRef.current

      let globalAlpha = 1
      if (scroll > 0.54) globalAlpha = 0
      else if (scroll > 0.44) globalAlpha = 1 - (scroll - 0.44) / 0.10

      if (globalAlpha <= 0) {
        frameRef.current = requestAnimationFrame(draw)
        return
      }

      // Subtle breathing pulse when fully drawn
      let pulse = 1
      if (scroll > 0.38 && scroll < 0.44) {
        pulse = 0.93 + 0.07 * Math.sin(performance.now() * 0.002)
      }

      const size = Math.min(w * 0.70, h * 0.65, 720)
      const ox = (w - size) / 2
      const oy = (h - size) / 2

      for (const line of VENUE) {
        if (scroll < line.drawStart) continue

        let lp = 1
        if (scroll < line.drawEnd) {
          const t = Math.min(1, (scroll - line.drawStart) / (line.drawEnd - line.drawStart))
          lp = easeOutQuart(t)
        }

        const sx = ox + line.x1 * size
        const sy = oy + line.y1 * size
        const ex = sx + (line.x2 - line.x1) * size * lp
        const ey = sy + (line.y2 - line.y1) * size * lp

        const mx = (sx + ex) / 2
        const my = (sy + ey) / 2
        const dist = Math.hypot(mouse.x - mx, mouse.y - my)
        const proximity = dist < CURSOR_RADIUS ? 1 - dist / CURSOR_RADIUS : 0

        const alpha = (line.opacity + proximity * 0.45) * globalAlpha * pulse

        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${alpha})`
        ctx.lineWidth = line.weight * (1 + proximity * 0.6)

        if (proximity > 0.3) {
          ctx.shadowColor = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${proximity * 0.4})`
          ctx.shadowBlur = 8 + proximity * 12
        } else {
          ctx.shadowColor = 'transparent'
          ctx.shadowBlur = 0
        }

        ctx.stroke()

        // Leading edge glow while drawing
        if (lp < 1) {
          ctx.shadowColor = 'transparent'
          ctx.shadowBlur = 0
          ctx.beginPath()
          ctx.arc(ex, ey, 2 + line.weight, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${0.5 * globalAlpha})`
          ctx.fill()
        }
      }

      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0

      for (const dot of STATIONS) {
        if (scroll < dot.drawAt) continue
        const dp = easeOutQuart(Math.min(1, (scroll - dot.drawAt) / 0.04))

        const dx = ox + dot.x * size
        const dy = oy + dot.y * size

        const dist = Math.hypot(mouse.x - dx, mouse.y - dy)
        const proximity = dist < CURSOR_RADIUS ? 1 - dist / CURSOR_RADIUS : 0

        const alpha = (dot.opacity + proximity * 0.35) * globalAlpha * pulse * dp
        const r = dot.r * (1 + proximity * 0.4) * dp

        ctx.beginPath()
        ctx.arc(dx, dy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${alpha})`
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    frameRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
