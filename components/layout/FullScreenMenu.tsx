'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FocusTrap } from '@mantine/core'

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'The Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  function handleNav(href: string) {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <FocusTrap active={isOpen}>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(250, 250, 248, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="menu-close-btn"
              style={{
                position: 'absolute',
                top: 'var(--spacing-6)',
                right: 'var(--spacing-6)',
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
              }}
            >
              <X size={20} color="var(--on-surface)" />
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <button
                    onClick={() => handleNav(item.href)}
                    className="headline-lg menu-nav-btn"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--on-surface)',
                      fontFamily: 'inherit',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      letterSpacing: 'inherit',
                      transition: 'color var(--duration-fast) var(--ease-default)',
                    }}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </nav>

            <motion.a
              href="mailto:hello@vixiocreatives.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="label-sm"
              style={{
                position: 'absolute',
                bottom: 'var(--spacing-8)',
                color: 'var(--on-surface-variant)',
                textDecoration: 'none',
              }}
            >
              hello@vixiocreatives.com
            </motion.a>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  )
}
