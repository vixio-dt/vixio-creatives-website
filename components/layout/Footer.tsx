export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        padding: 'var(--spacing-6)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <span className="label-sm" style={{ color: 'var(--on-ink-muted)' }}>
          &copy; 2026 Vixio Creatives
        </span>
      </div>
    </footer>
  )
}
