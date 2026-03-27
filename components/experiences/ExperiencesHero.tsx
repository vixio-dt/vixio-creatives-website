import { SectionLabel } from '@/components/ui/SectionLabel'

export function ExperiencesHero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-20) var(--spacing-6)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '640px' }}>
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <SectionLabel color="primary">Original Experiences</SectionLabel>
        </div>

        <h1
          className="display-lg fade-in-up"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)', animationDelay: '0.25s' }}
        >
          Something is forming. Help it become real.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{ color: 'var(--on-surface-variant)', animationDelay: '0.4s' }}
        >
          A cooperative immersive experience for groups of 4–12. You enter a projection-mapped room.
          The space responds to your presence. Something emerges. Your collective attention determines
          what happens next. 45 minutes. Walk out with a physical artifact that didn&apos;t exist before
          you arrived.
        </p>
      </div>
    </section>
  )
}
