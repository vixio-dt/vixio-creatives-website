// Server component: renders a designed interim for a given PlaceholderId.
// No 'use client' - this is server-safe.
// All shapes are aria-hidden; no text inside the treatment itself.
// Brand gradient (cyan-to-gold) fills logo-derived triangles per ADR-15.
// HeroTreatment uses gradient id "vx-tri-hero"; FilmTileTreatment uses "vx-tri-tile"
// to avoid duplicate-id collisions when both render on one page.

import type { PlaceholderId } from '@/lib/slate'

interface PlaceholderTreatmentProps {
  id: PlaceholderId
}

// HOME-HERO-01: paper field, oversized cropped brand-gradient triangle bleeding off frame,
// one soft cyan light gradient at 16% peak opacity.
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
      {/* Oversized apex-down brand-gradient triangle (logo geometry) bleeding off top-right */}
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
        <defs>
          <linearGradient id="vx-tri-hero" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3AAED8"/>
            <stop offset="1" stopColor="#D4A843"/>
          </linearGradient>
        </defs>
        <polygon
          points="8,0 100,0 54,84"
          fill="url(#vx-tri-hero)"
          opacity="1"
        />
      </svg>

      {/* Soft cyan light gradient: reads as light falling across the brand edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 68% 45%, rgba(58, 174, 216, 0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

// HOME-SLATE-TILE-01: brand-gradient-on-paper tile with hairline border, brand triangle at small scale.
// Uses gradient id "vx-tri-tile" (distinct from "vx-tri-hero") to avoid duplicate-id collisions.
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
      {/* Brand geometry: apex-down triangle, brand gradient, ~56px wide */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 110"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '56px', height: 'auto' }}
      >
        <defs>
          <linearGradient id="vx-tri-tile" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3AAED8"/>
            <stop offset="1" stopColor="#D4A843"/>
          </linearGradient>
        </defs>
        <polygon
          points="8,0 100,0 54,84"
          fill="url(#vx-tri-tile)"
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

export function PlaceholderTreatment({ id }: PlaceholderTreatmentProps) {
  if (id === 'HOME-HERO-01') {
    return (
      <div style={{ position: 'absolute', inset: 0 }}>
        <HeroTreatment />
      </div>
    )
  }

  if (id === 'HOME-SLATE-TILE-01') {
    return (
      <div style={{ position: 'absolute', inset: 0 }}>
        <FilmTileTreatment />
      </div>
    )
  }

  if (id === 'HOME-SLATE-TILE-02') {
    return (
      <div style={{ position: 'absolute', inset: 0 }}>
        <ObjectTileTreatment />
      </div>
    )
  }

  // HOME-SLATE-TILE-03 (labs): not rendered per ADR-08
  // SLATE-DETAIL-* ids: not rendered at this scope
  return null
}
