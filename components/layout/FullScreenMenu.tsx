'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Studio Services', href: '/services' },
  { label: 'Lab', href: '/lab' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
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
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
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

          {/* Nav items */}
          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="headline-lg"
                  style={{
                    textDecoration: 'none',
                    color: pathname === item.href ? 'var(--primary)' : 'var(--on-surface)',
                    transition: 'color var(--duration-fast) var(--ease-default)',
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom CTA */}
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
      )}
    </AnimatePresence>
  )
}
