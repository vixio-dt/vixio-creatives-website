import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function TrustSignalsBar() {
  return (
    <section
      style={{
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      <ScrollReveal>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-8)',
          }}
        >
          <span className="label-sm" style={{ color: 'var(--outline-variant)' }}>TEA Member</span>
          <span className="label-sm" style={{ color: 'var(--outline-variant)' }}>IAAPA 2026</span>
        </div>
      </ScrollReveal>
    </section>
  )
}
