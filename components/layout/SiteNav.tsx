import Link from 'next/link'
import Image from 'next/image'
import { copy } from '@/lib/copy'

export function SiteNav() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.5rem',
        backgroundColor: 'rgba(250, 250, 248, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <nav
        aria-label={copy.nav.ariaLabel}
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          aria-label={copy.nav.homeAriaLabel}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <Image
            src="/vixio-wordmark.svg"
            alt={copy.nav.logoAlt}
            width={65}
            height={28}
            priority
            style={{ height: '28px', width: 'auto' }}
          />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/studio" className="nav-link">
            {copy.nav.studio}
          </Link>
          <Link href="/contact" className="nav-link">
            {copy.nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  )
}
