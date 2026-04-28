import { SectionLabel } from '@/components/ui/SectionLabel'

export function JournalHero() {
  return (
    <section
      className="grain-overlay"
      style={{ padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)' }}>
      <div style={{ maxWidth: '600px' }}>
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <SectionLabel color="primary">Journal</SectionLabel>
        </div>

        <h1
          className="display-md fade-in-up"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)', animationDelay: '0.25s' }}
        >
          Thinking out loud.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{ color: 'var(--on-surface-variant)', animationDelay: '0.4s' }}
        >
          Creative process, industry observations, and behind-the-scenes from the studio.
        </p>
      </div>
    </section>
  )
}
