import { SectionLabel } from '@/components/ui/SectionLabel'

export function LabHero() {
  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)' }}>
      <div style={{ maxWidth: '700px' }}>
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <SectionLabel color="primary">The Lab</SectionLabel>
        </div>

        <h1
          className="display-md fade-in-up"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)', animationDelay: '0.25s' }}
        >
          Where we test, break, and discover.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{ color: 'var(--on-surface-variant)', animationDelay: '0.4s' }}
        >
          Experiments in projection, interaction, and physical-digital connection. Everything here is real.
        </p>
      </div>
    </section>
  )
}
