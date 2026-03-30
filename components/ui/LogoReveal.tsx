'use client'

import { useState, useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'

export function LogoReveal() {
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState<'playing' | 'fading' | 'done'>('playing')

  const handleVideoEnded = useCallback(() => {
    setPhase('fading')
    setTimeout(() => setPhase('done'), 1200)
  }, [])

  if (prefersReducedMotion || phase === 'done') return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: phase === 'fading' ? 'var(--surface)' : '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        onEnded={handleVideoEnded}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      >
        <source src="/vixio-logo-animation.webm" type="video/webm" />
        <source src="/vixio-logo-animation.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
