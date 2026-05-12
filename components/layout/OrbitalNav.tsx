'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { FullScreenMenu } from './FullScreenMenu'

export function OrbitalNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [revealVisible, setRevealVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setAtTop(window.scrollY < 100)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0
      setScrollProgress(Math.min(progress, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null = null

    function observeReveal() {
      const reveal = document.getElementById('scroll-logo-reveal')
      if (!reveal) return

      intersectionObserver = new IntersectionObserver(
        ([entry]) => setRevealVisible(entry.isIntersecting),
        { threshold: 0.01 }
      )
      intersectionObserver.observe(reveal)
      mutationObserver.disconnect()
    }

    const mutationObserver = new MutationObserver(() => {
      if (document.getElementById('scroll-logo-reveal')) {
        observeReveal()
      }
    })

    observeReveal()
    if (!intersectionObserver) {
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      intersectionObserver?.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  const showNav = !revealVisible && !atTop
  const circumference = 2 * Math.PI * 16

  return (
    <>
      {/* Top bar background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: scrolled && showNav ? 'var(--surface)' : 'transparent',
          boxShadow: scrolled && showNav ? '0 1px 0 var(--outline-variant)' : 'none',
          opacity: showNav ? 1 : 0,
          transition: 'background var(--duration-fast) var(--ease-default), backdrop-filter var(--duration-fast) var(--ease-default), opacity var(--duration-fast) var(--ease-default)',
          zIndex: 49,
          pointerEvents: 'none',
        }}
      />

      {/* Top Left — Logo */}
      <Link
        href="/"
        style={{
          position: 'fixed',
          top: '-10px',
          left: 'var(--spacing-4)',
          zIndex: 50,
          opacity: showNav ? 1 : 0,
          transition: 'opacity 300ms var(--ease-default)',
          pointerEvents: showNav ? 'auto' : 'none',
        }}
      >
        <Image
          src="/vixio-logo.svg"
          alt="Vixio Creatives"
          width={200}
          height={100}
          className="w-[150px] md:w-[200px]"
          priority
        />
      </Link>

      {/* Top Right — Menu Trigger */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        style={{
          position: 'fixed',
          top: 'var(--spacing-2)',
          right: 'var(--spacing-4)',
          zIndex: 50,
          width: '56px',
          height: '56px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--surface-container-high)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px var(--shadow-ambient)',
          opacity: showNav ? 1 : 0,
          transition: 'background var(--duration-fast) var(--ease-default), opacity 300ms var(--ease-default)',
          pointerEvents: showNav ? 'auto' : 'none',
        }}
        className="menu-trigger"
      >
        <Menu size={24} color="var(--on-surface)" />
      </button>

      {/* Bottom Right — Scroll Progress */}
      <div
        style={{
          position: 'fixed',
          bottom: 'var(--spacing-6)',
          right: 'var(--spacing-6)',
          zIndex: 50,
          opacity: showNav ? 1 : 0,
          transition: 'opacity 300ms var(--ease-default)',
          pointerEvents: showNav ? 'auto' : 'none',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 36 36" aria-hidden="true">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="var(--outline-variant)"
            strokeWidth="2"
            opacity={0.3}
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - scrollProgress)}
            strokeLinecap="round"
            transform="rotate(-90 18 18)"
            style={{ transition: 'stroke-dashoffset 100ms linear' }}
          />
        </svg>
      </div>

      {/* Full Screen Menu Overlay */}
      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
