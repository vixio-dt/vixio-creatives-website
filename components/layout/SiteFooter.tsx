import Link from 'next/link'
import Image from 'next/image'
import { copy } from '@/lib/copy'

export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        padding: '3rem 1.5rem',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div
        className="vx-footer-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link
            href="/"
            aria-label={copy.footer.homeAriaLabel}
            style={{ display: 'inline-block' }}
          >
            <Image
              src="/vixio-wordmark.svg"
              alt={copy.footer.logoAlt}
              width={56}
              height={24}
              style={{ height: '24px', width: 'auto' }}
            />
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
            }}
          >
            {copy.footer.descriptor}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              marginTop: '0.5rem',
            }}
          >
            {copy.footer.legal}
          </p>
        </div>

        <nav
          aria-label={copy.footer.ariaLabel}
          className="vx-footer-nav"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <Link href="/studio" className="footer-link">
            {copy.footer.studio}
          </Link>
          <Link href="/contact" className="footer-link">
            {copy.footer.contact}
          </Link>
          <Link href="/#newsletter" className="footer-link">
            {copy.footer.newsletter}
          </Link>
          <a href={`mailto:${copy.footer.email}`} className="footer-link">
            {copy.footer.email}
          </a>
        </nav>
      </div>
    </footer>
  )
}
