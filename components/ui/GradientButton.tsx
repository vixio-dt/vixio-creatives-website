import Link from 'next/link'

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export function GradientButton({ children, href, onClick, type = 'button', className = '', disabled }: GradientButtonProps) {
  const styles: React.CSSProperties = {
    background: 'var(--accent)',
    color: 'var(--surface)',
    borderRadius: 'var(--radius-interactive)',
    padding: '0.75rem 1.75rem',
    border: 'none',
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
    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  }

  if (href) {
    return (
      <Link href={href} className={`gradient-btn ${className}`} style={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`gradient-btn ${className}`}
      style={styles}
    >
      {children}
    </button>
  )
}
