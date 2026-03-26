import Link from 'next/link'

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export function GradientButton({ children, href, onClick, type = 'button', className = '' }: GradientButtonProps) {
  const styles: React.CSSProperties = {
    background: 'linear-gradient(45deg, var(--primary), var(--tertiary))',
    color: 'var(--on-primary)',
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
    boxShadow: '0 4px 24px var(--shadow-primary)',
    transition: 'all var(--duration-fast) var(--ease-default)',
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
    <button type={type} onClick={onClick} className={`${hoverClass} ${className}`} style={styles}>
      {children}
    </button>
  )
}
