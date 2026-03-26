interface SectionLabelProps {
  children: React.ReactNode
  color?: 'default' | 'primary'
}

export function SectionLabel({ children, color = 'default' }: SectionLabelProps) {
  return (
    <p
      className="label-md"
      style={{
        color: color === 'primary' ? 'var(--primary)' : 'var(--on-surface-variant)',
        marginBottom: 'var(--spacing-4)',
      }}
    >
      {children}
    </p>
  )
}
