'use client'

import { useState, useRef, useSyncExternalStore } from 'react'

function subscribeReducedMotion(cb: () => void) {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
  mql.addEventListener('change', cb)
  return () => mql.removeEventListener('change', cb)
}
function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
function getReducedMotionServer() {
  return false
}

type Tile = {
  label: string
  detailA: string
  detailB: string
  variant: 'gradient' | 'dark' | 'tone'
  /** Position in % of container (centered) */
  x: number
  y: number
  /** Width in % of container */
  w: number
  rot: number
}

const tiles: Tile[] = [
  { label: 'NFC.embed/045', detailA: 'sub-200ms reads', detailB: 'US$0.15 / chip', variant: 'gradient', x: 8, y: 10, w: 22, rot: -3 },
  { label: 'projection.map/v2', detailA: 'mapped surfaces', detailB: 'TouchDesigner', variant: 'dark', x: 60, y: 8, w: 26, rot: 2 },
  { label: 'osc.bridge/01', detailA: 'OSC routing', detailB: 'live cues', variant: 'tone', x: 18, y: 56, w: 22, rot: 4 },
  { label: 'body.track/4m', detailA: 'depth camera', detailB: '8m × 8m floors', variant: 'gradient', x: 64, y: 58, w: 24, rot: -2 },
  { label: 'haptic.loop', detailA: 'wearables', detailB: 'sub-frame sync', variant: 'dark', x: 80, y: 28, w: 16, rot: 5 },
  { label: 'collectible.001', detailA: 'NFC artifact', detailB: 'unique by play', variant: 'tone', x: 4, y: 32, w: 20, rot: -5 },
]

const capabilities: { name: string; a: string; b: string }[] = [
  { name: 'NFC', a: 'sub-200ms reads', b: 'US$0.15 / chip' },
  { name: 'Projection', a: 'mapped surfaces', b: 'TouchDesigner' },
  { name: 'Body track', a: 'OSC bridge', b: '8m × 8m floors' },
  { name: 'Audio', a: 'spatial · 5.1', b: 'live OSC routing' },
  { name: 'Light', a: 'DMX · pixel', b: 'haze + beam' },
  { name: 'Phygital', a: 'NFC collectibles', b: 'unique by play' },
  { name: 'Web', a: 'Next.js · GSAP', b: 'companion sites' },
  { name: 'Print', a: 'Risograph', b: 'tickets · zines' },
]

function tileBackground(variant: Tile['variant']) {
  if (variant === 'gradient') return 'var(--vixio-gradient)'
  if (variant === 'dark') return 'linear-gradient(135deg, #1A1A1A, #2E3138)'
  return 'linear-gradient(135deg, var(--surface-container-high), var(--surface-container-low))'
}

export function CapabilitiesAtlas() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  )

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    const r = e.currentTarget.getBoundingClientRect()
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
  }

  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'var(--spacing-20) 0 var(--spacing-16)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--spacing-6)' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 'var(--spacing-12)',
            flexWrap: 'wrap',
            gap: 'var(--spacing-4)',
          }}
        >
          <h2 className="display-xl" style={{ color: 'var(--on-surface)', margin: 0, maxWidth: '20ch' }}>
            What we run on.
          </h2>
          <span className="mono-tag">{'// stack · 2026'}</span>
        </div>
      </div>

      {/* Cursor-reactive playground */}
      <div
        ref={heroRef}
        onMouseMove={onMove}
        className="hidden md:block"
        style={{
          position: 'relative',
          height: '420px',
          marginBottom: 'var(--spacing-12)',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        {tiles.map((tile, i) => {
          const factor = 6 + i * 2
          const dx = (mouse.x - 0.5) * factor
          const dy = (mouse.y - 0.5) * factor
          return (
            <div
              key={tile.label}
              style={{
                position: 'absolute',
                left: `${tile.x}%`,
                top: `${tile.y}%`,
                width: `${tile.w}%`,
                aspectRatio: '4 / 3',
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03)',
                padding: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                transform: `translate(${dx}px, ${dy}px) rotate(${tile.rot}deg)`,
                transition: 'transform 600ms cubic-bezier(0.2, 0.7, 0.3, 1)',
                willChange: 'transform',
              }}
            >
              <div
                style={{
                  background: tileBackground(tile.variant),
                  flex: 1,
                  borderRadius: 'var(--radius-md)',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.08em',
                  color: 'var(--on-surface-variant)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                }}
              >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{tile.label}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Capabilities grid (always visible — also serves as mobile fallback) */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--spacing-6)',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {capabilities.map((cap, i) => (
            <div key={cap.name} className="cap-tile">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', opacity: 0.6 }}>
                0{i + 1}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {cap.name}.
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    opacity: 0.7,
                    lineHeight: 1.6,
                  }}
                >
                  {cap.a}
                  <br />
                  {cap.b}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
