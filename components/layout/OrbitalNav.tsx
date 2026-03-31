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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

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
          background: scrolled && !revealVisible ? 'rgba(250, 250, 248, 0.75)' : 'transparent',
          backdropFilter: scrolled && !revealVisible ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled && !revealVisible ? 'blur(16px)' : 'none',
          opacity: revealVisible ? 0 : 1,
          transition: 'all var(--duration-fast) var(--ease-default)',
          zIndex: 49,
          pointerEvents: 'none',
        }}
      />

      {/* Top Left — Logo */}
      <Link
        href="/"
        style={{
          position: 'fixed',
          top: 'var(--spacing-6)',
          left: 'var(--spacing-6)',
          zIndex: 50,
          opacity: revealVisible ? 0 : 1,
          transition: 'opacity 300ms var(--ease-default)',
          pointerEvents: revealVisible ? 'none' : 'auto',
        }}
      >
        <Image
          src="/vixio-logo.svg"
          alt="Vixio Creatives"
          width={130}
          height={65}
          className="w-[100px] md:w-[130px]"
          priority
        />
      </Link>

      {/* Top Right — Menu Trigger */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        style={{
          position: 'fixed',
          top: 'var(--spacing-6)',
          right: 'var(--spacing-6)',
          zIndex: 50,
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--surface-container-high)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px var(--shadow-ambient)',
          opacity: revealVisible ? 0 : 1,
          transition: 'background var(--duration-fast) var(--ease-default), opacity 300ms var(--ease-default)',
          pointerEvents: revealVisible ? 'none' : 'auto',
        }}
        className="menu-trigger"
      >
        <Menu size={20} color="var(--on-surface)" />
      </button>

      {/* Bottom Right — Scroll Progress */}
      <div
        style={{
          position: 'fixed',
          bottom: 'var(--spacing-6)',
          right: 'var(--spacing-6)',
          zIndex: 50,
          opacity: revealVisible ? 0 : 1,
          transition: 'opacity 300ms var(--ease-default)',
          pointerEvents: revealVisible ? 'none' : 'auto',
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
