interface GradientPlaceholderProps {
  variant?: 'primary' | 'warm' | 'neutral'
  aspectRatio?: '16/9' | '4/3' | '1/1'
  className?: string
}

const gradients = {
  primary: 'linear-gradient(135deg, #3AAED8, #8FE1FF)',
  warm: 'linear-gradient(135deg, #D4A843, #FDF5E6)',
  neutral: 'linear-gradient(135deg, #EDEAE6, #FAFAF8)',
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
