'use client'

import { useRef, useState, type ReactNode, type CSSProperties } from 'react'

interface TiltCardProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  maxTilt?: number
  glareOpacity?: number
}

export function TiltCard({
  children,
  style,
  className,
  maxTilt = 8,
  glareOpacity = 0.08,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50 })
  const [active, setActive] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    setTilt({
      x: -percentY * maxTilt,
      y: percentX * maxTilt,
    })
    setGlare({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const handleMouseEnter = () => setActive(true)

  const handleMouseLeave = () => {
    setActive(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          transform: active
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0) rotateY(0) scale3d(1, 1, 1)',
          transition: active
            ? 'transform 0.1s ease-out'
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          height: '100%',
        }}
      >
        {children}
        {/* Glare overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            opacity: active ? glareOpacity : 0,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.6), transparent 60%)`,
            transition: 'opacity 0.3s',
          }}
        />
      </div>
    </div>
  )
}
