import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonBaseProps {
  variant?: ButtonVariant
  children: React.ReactNode
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  onClick?: never
  type?: never
  disabled?: never
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never
  onClick?: ComponentPropsWithoutRef<'button'>['onClick']
  type?: 'button' | 'submit'
  disabled?: boolean
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const baseStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-display)',
  fontSize: '0.9375rem',
  fontWeight: 600,
  letterSpacing: '-0.01em',
  lineHeight: 1.4,
  padding: '0.75rem 1.75rem',
  minHeight: '44px',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  borderRadius: 'var(--radius)',
  transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
}

const primaryStyles: React.CSSProperties = {
  ...baseStyles,
  background: 'var(--text)',
  color: 'var(--surface)',
}

const secondaryStyles: React.CSSProperties = {
  ...baseStyles,
  background: 'transparent',
  border: '1px solid var(--text)',
  color: 'var(--text)',
}

function getVariantStyles(variant: ButtonVariant): React.CSSProperties {
  return variant === 'primary' ? primaryStyles : secondaryStyles
}

export function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  const styles = getVariantStyles(variant)
  const className = variant === 'primary' ? 'vx-btn-primary' : 'vx-btn-secondary'

  if ('href' in rest && rest.href != null) {
    return (
      <Link
        href={rest.href}
        className={className}
        style={styles}
      >
        {children}
      </Link>
    )
  }

  const { onClick, type = 'button', disabled } = rest as ButtonAsButton

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        ...styles,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  )
}
