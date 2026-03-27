'use client'

import { useRef, useEffect } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only animate elements that are below the viewport
    const rect = el.getBoundingClientRect()
    if (rect.top <= window.innerHeight) {
      // Already visible — no animation needed
      return
    }

    // Below viewport: add pending class to hide, then observe
    el.classList.add('scroll-reveal-pending')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('scroll-reveal-pending')
          el.classList.add('scroll-reveal-visible')
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
