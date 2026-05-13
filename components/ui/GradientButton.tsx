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
    background: 'var(--ink)',
    color: 'var(--on-ink)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-2) var(--spacing-6)',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-display)',
    fontSize: '0.8125rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    lineHeight: 1.4,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: '0 2px 12px rgba(14, 15, 18, 0.15)',
    transition: 'transform var(--duration-fast) var(--ease-default), background var(--duration-fast) var(--ease-default), box-shadow var(--duration-fast) var(--ease-default), color var(--duration-fast) var(--ease-default)',
  }

  const hoverClass = 'gradient-btn'

  if (href) {
    return (
      <Link href={href} className={`${hoverClass} ${className}`} style={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${hoverClass} ${className}`} style={{ ...styles, ...(disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}) }}>
      {children}
    </button>
  )
}
