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

    // Use IntersectionObserver for all elements — it handles
    // both "already in viewport" and "scrolled into view" cases
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is visible — ensure it's shown with animation
          applyReveal(el)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '100px 0px' } // trigger 100px BEFORE entering viewport
    )

    // Small delay to let layout settle, then hide if not yet visible
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      if (rect.top > window.innerHeight) {
        // Truly below viewport — hide for scroll reveal
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'none'
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [applyReveal])

  // SSR: always visible
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
