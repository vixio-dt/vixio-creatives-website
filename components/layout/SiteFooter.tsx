import Link from 'next/link'
import Image from 'next/image'

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
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link href="/" aria-label="Vixio Creatives, home" style={{ display: 'inline-block' }}>
            <Image
              src="/vixio-logo.svg"
              alt="Vixio Creatives"
              width={80}
              height={26}
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
            A creative label for story-rich worlds.
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
            &copy; 2026 Vixio Creatives Limited, Hong Kong
          </p>
        </div>

        <nav aria-label="Footer navigation" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
          <Link href="/studio" className="footer-link">
            Studio
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
          <a href="mailto:hello@vixiocreatives.com" className="footer-link">
            hello@vixiocreatives.com
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 640px) {
          footer > div > div:last-child {
            align-items: flex-start;
          }
          footer > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
