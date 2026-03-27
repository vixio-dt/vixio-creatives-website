'use client'

import { useState, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'

const ParticleLogo = dynamic(
  () => import('@/components/ui/ParticleLogo').then(mod => ({ default: mod.ParticleLogo })),
  { ssr: false }
)

interface LogoRevealProps {
  width?: number
  height?: number
  className?: string
}

export function LogoReveal({ width = 280, height = 140, className = '' }: LogoRevealProps) {
  const [phase, setPhase] = useState<'video' | 'crossfading' | 'particles'>('video')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnded = useCallback(() => {
    setPhase('crossfading')
    // After crossfade transition completes, switch fully to particles
    setTimeout(() => setPhase('particles'), 800)
  }, [])

  // Calculate video dimensions to match the particle logo area
  // Video is 16:9 (1280x720), we need to fit within width x height
  const videoScale = Math.min(width / 1280, height / 720)
  const videoW = 1280 * videoScale
  const videoH = 720 * videoScale

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Video layer */}
      {phase !== 'particles' && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          style={{
            position: phase === 'crossfading' ? 'absolute' : 'relative',
            width: `${videoW}px`,
            height: `${videoH}px`,
            objectFit: 'contain',
            opacity: phase === 'crossfading' ? 0 : 1,
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 2,
            // Match the warm background so video blends seamlessly
            background: 'var(--surface)',
          }}
        >
          <source src="/vixio-logo-animation.webm" type="video/webm" />
          <source src="/vixio-logo-animation.mp4" type="video/mp4" />
        </video>
      )}

      {/* Particle layer — fades in as video fades out */}
      {(phase === 'crossfading' || phase === 'particles') && (
        <div
          style={{
            position: phase === 'crossfading' ? 'absolute' : 'relative',
            opacity: phase === 'particles' ? 1 : 0,
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
          }}
        >
          <ParticleLogo width={width} height={height} />
        </div>
      )}
    </div>
  )
}
