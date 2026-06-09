import Link from 'next/link'

interface GhostButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export function GhostButton({ children, href, onClick, type = 'button', className = '', disabled }: GhostButtonProps) {
  const styles: React.CSSProperties = {
    border: '1px solid var(--line)',
    background: 'transparent',
    color: 'var(--text)',
    borderRadius: 'var(--radius-interactive)',
    padding: '0.75rem 1.75rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-display)',
    fontSize: '0.9375rem',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.4,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    minHeight: '44px',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), background 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  }

  if (href) {
    return (
      <Link href={href} className={`ghost-btn ${className}`} style={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ghost-btn ${className}`}
      style={styles}
    >
      {children}
    </button>
  )
}
