'use client'

import { useRef, useEffect, useCallback, type CSSProperties } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  const applyReveal = useCallback((el: HTMLDivElement) => {
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
    el.style.transition = `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  }, [delay])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check if element is already in or near the viewport
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 1.1) {
      // Already visible — keep as-is (SSR rendered visible)
      return
    }

    // Below viewport — hide via DOM, set up observer
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'none'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          applyReveal(el)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [applyReveal])

  // SSR default: fully visible — no opacity:0, no transforms
  const style: CSSProperties = {
    opacity: 1,
    transform: 'translateY(0)',
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
