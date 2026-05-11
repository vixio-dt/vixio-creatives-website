'use client'

import { useRef, useEffect, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Detect touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) {
      setIsTouch(true)
      return
    }

    // Hide default cursor
    document.documentElement.style.cursor = 'none'

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor="hover"]')
      setHovering(!!interactive)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    const handleMouseEnter = () => {
      setHidden(false)
    }

    const animateRing = () => {
      const lerp = 0.12
      ringPos.current.x += (pos.current.x - ringPos.current.x) * lerp
      ringPos.current.y += (pos.current.y - ringPos.current.y) * lerp

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }

      rafRef.current = requestAnimationFrame(animateRing)
    }

    rafRef.current = requestAnimationFrame(animateRing)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          marginLeft: '-3px',
          marginTop: '-3px',
          borderRadius: '50%',
          background: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: hidden ? 0 : 1,
          mixBlendMode: 'difference',
          transition: 'opacity 0.2s, width 0.25s, height 0.25s, margin 0.25s',
          ...(hovering && {
            width: '12px',
            height: '12px',
            marginLeft: '-6px',
            marginTop: '-6px',
          }),
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? '48px' : '32px',
          height: hovering ? '48px' : '32px',
          marginLeft: hovering ? '-24px' : '-16px',
          marginTop: hovering ? '-24px' : '-16px',
          borderRadius: '50%',
          border: `1.5px solid var(--primary)`,
          opacity: hidden ? 0 : hovering ? 0.6 : 0.25,
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
          transition: 'width 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), margin 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s',
        }}
      />
      <style>{`
        *, *::before, *::after { cursor: none !important; }
        @media (hover: none) and (pointer: coarse) {
          *, *::before, *::after { cursor: auto !important; }
        }
      `}</style>
    </>
  )
}
