import { SectionLabel } from '@/components/ui/SectionLabel'

export function ServicesHero() {
  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)' }}>
      <div style={{ maxWidth: '800px' }}>
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <SectionLabel color="primary">Studio Services</SectionLabel>
        </div>

        <h1
          className="display-md fade-in-up"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)', animationDelay: '0.25s' }}
        >
          We build immersive experiences for brands, malls, and cultural venues.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', animationDelay: '0.4s' }}
        >
          We bring the same storytelling and technical craft behind our original worlds to
          client projects — from concept through installation, across Hong Kong and the Greater Bay Area.
        </p>
      </div>
    </section>
  )
}
