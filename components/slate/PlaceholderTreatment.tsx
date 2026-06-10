// Server component: renders a designed interim for a given PlaceholderId.
// No 'use client' - this is server-safe.
// All shapes are aria-hidden; no text inside the treatment itself.

import type { PlaceholderId } from '@/lib/slate'

interface PlaceholderTreatmentProps {
  id: PlaceholderId
  className?: string
}

// HOME-HERO-01: paper field, oversized cropped ink triangle bleeding off frame,
// one soft cyan light gradient under 12% opacity.
function HeroTreatment() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--surface)',
        overflow: 'hidden',
      }}
    >
      {/* Oversized apex-down ink triangle (logo geometry) bleeding off top-right */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 110"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '-12%',
          right: '-14%',
          width: 'clamp(280px, 56vw, 900px)',
          height: 'auto',
          pointerEvents: 'none',
        }}
        preserveAspectRatio="xMaxYMin meet"
      >
        <polygon
          points="8,0 100,0 54,84"
          fill="var(--text)"
          opacity="1"
        />
      </svg>

      {/* Soft cyan light gradient: reads as light falling across the ink edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 68% 45%, rgba(58, 174, 216, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

// HOME-SLATE-TILE-01: ink-on-paper tile with hairline border, brand triangle at small scale.
function FilmTileTreatment() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Brand geometry: apex-down triangle, solid ink, ~56px wide */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 110"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '56px', height: 'auto' }}
      >
        <polygon
          points="8,0 100,0 54,84"
          fill="var(--text)"
          opacity="1"
        />
      </svg>
    </div>
  )
}

// HOME-SLATE-TILE-02: paper tile with hairline plinth glyph.
// A simple geometric line drawing: horizontal top line over a narrow vertical rectangle.
function ObjectTileTreatment() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Plinth glyph: horizontal cap line, vertical stem, base line */}
      <svg
        aria-hidden="true"
        viewBox="0 0 60 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '48px', height: '64px', opacity: 0.28 }}
      >
        {/* Horizontal top cap */}
        <line
          x1="10"
          y1="16"
          x2="50"
          y2="16"
          stroke="var(--text)"
          strokeWidth="1"
        />
        {/* Vertical narrow rectangle stem */}
        <rect
          x="24"
          y="16"
          width="12"
          height="42"
          fill="none"
          stroke="var(--text)"
          strokeWidth="1"
        />
        {/* Base line */}
        <line
          x1="8"
          y1="58"
          x2="52"
          y2="58"
          stroke="var(--text)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export function PlaceholderTreatment({ id, className }: PlaceholderTreatmentProps) {
  if (id === 'HOME-HERO-01') {
    return (
      <div className={className} style={{ position: 'absolute', inset: 0 }}>
        <HeroTreatment />
      </div>
    )
  }

  if (id === 'HOME-SLATE-TILE-01') {
    return (
      <div className={className} style={{ position: 'absolute', inset: 0 }}>
        <FilmTileTreatment />
      </div>
    )
  }

  if (id === 'HOME-SLATE-TILE-02') {
    return (
      <div className={className} style={{ position: 'absolute', inset: 0 }}>
        <ObjectTileTreatment />
      </div>
    )
  }

  // HOME-SLATE-TILE-03 (labs): not rendered per ADR-08
  // SLATE-DETAIL-* ids: not rendered at this scope
  return null
}
