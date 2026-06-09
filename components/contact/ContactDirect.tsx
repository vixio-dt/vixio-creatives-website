export function ContactDirect() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--line)',
        padding: 'clamp(2rem, 4vw, 3rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
          }}
        >
          Or write to{' '}
          <a
            href="mailto:hello@vixiocreatives.com"
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            hello@vixiocreatives.com
          </a>
        </p>
      </div>
    </section>
  )
}
