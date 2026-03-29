interface GradientPlaceholderProps {
  variant?: 'primary' | 'warm' | 'neutral'
  aspectRatio?: '16/9' | '4/3' | '1/1'
  className?: string
}

const gradients = {
  primary: 'linear-gradient(135deg, var(--primary), var(--primary-soft))',
  warm: 'linear-gradient(135deg, var(--tertiary), var(--tertiary-container))',
  neutral: 'linear-gradient(135deg, var(--surface-container-high), var(--surface))',
}

export function GradientPlaceholder({ variant = 'neutral', aspectRatio = '16/9', className = '' }: GradientPlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        background: gradients[variant],
        borderRadius: 'var(--radius-md)',
        aspectRatio,
        width: '100%',
      }}
      aria-hidden="true"
    />
  )
}
