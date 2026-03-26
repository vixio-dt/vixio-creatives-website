import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Experiences', href: '/experiences' },
  { label: 'Services', href: '/services' },
  { label: 'Lab', href: '/lab' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = ['Instagram', 'LinkedIn', 'YouTube']

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-16) var(--spacing-6)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
        }}
      >
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left — Logo + Location */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <Image
              src="/vixio-logo.svg"
              alt="Vixio Creatives"
              width={60}
              height={30}
              className="w-[60px]"
            />
            <span className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>Hong Kong</span>
            <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>© 2026 Vixio Creatives</span>
          </div>

          {/* Center — Nav Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="body-sm"
                style={{
                  color: 'var(--on-surface-variant)',
                  textDecoration: 'none',
                  transition: 'color var(--duration-fast) var(--ease-default)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — Social + Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', alignItems: 'flex-start' }}>
            <div className="flex gap-4">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="label-sm"
                  style={{
                    color: 'var(--on-surface-variant)',
                    textDecoration: 'none',
                    transition: 'color var(--duration-fast) var(--ease-default)',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@vixiocreatives.com"
              className="body-sm"
              style={{
                color: 'var(--on-surface-variant)',
                textDecoration: 'none',
              }}
            >
              hello@vixiocreatives.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
