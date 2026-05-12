import Image from 'next/image'

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-12) var(--spacing-6)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--spacing-4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
          <Image
            src="/vixio-logo.svg"
            alt="Vixio Creatives"
            width={100}
            height={50}
            className="w-[100px]"
          />
          <span className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>
            Hong Kong
          </span>
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

        <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
          © 2026 Vixio Creatives
        </span>
      </div>
    </footer>
  )
}
