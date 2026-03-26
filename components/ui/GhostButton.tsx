import Link from 'next/link'

interface GhostButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export function GhostButton({ children, href, onClick, type = 'button', className = '' }: GhostButtonProps) {
  const styles: React.CSSProperties = {
    border: '1px solid rgba(200, 196, 191, 0.3)',
    color: 'var(--primary)',
    background: 'transparent',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-2) var(--spacing-6)',
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
    transition: 'all var(--duration-fast) var(--ease-default)',
  }

  const hoverClass = 'ghost-btn'

  if (href) {
    return (
      <Link href={href} className={`${hoverClass} ${className}`} style={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${hoverClass} ${className}`} style={styles}>
      {children}
    </button>
  )
}
