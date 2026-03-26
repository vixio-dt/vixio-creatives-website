import { ScrollReveal } from '@/components/ui/ScrollReveal'

const values = [
  'Human vision. AI instruments.',
  'The experience is the story.',
  'Craft over spectacle.',
]

export function ValuesSection() {
  return (
    <section
      style={{
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-16) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {values.map((value, i) => (
          <ScrollReveal key={value} delay={i * 0.15}>
            <p
              className="headline-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: i < values.length - 1 ? 'var(--spacing-12)' : 0,
              }}
            >
              {value}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
