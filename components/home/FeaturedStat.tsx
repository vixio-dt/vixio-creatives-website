import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FeaturedStat() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        color: '#F2F0EC',
        padding: 'var(--spacing-20) var(--spacing-6)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'var(--spacing-12)',
          alignItems: 'center',
        }}
        className="featured-stat-grid"
      >
        <ScrollReveal>
          <div
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(8rem, 18vw, 17.5rem)',
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}
          >
            4–12
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div>
            <span
              className="mono-tag"
              style={{ color: 'rgba(242, 240, 236, 0.5)', display: 'block', marginBottom: 'var(--spacing-4)' }}
            >
              People per room · cooperative
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.015em',
                lineHeight: 1.05,
                margin: 0,
                color: '#F2F0EC',
              }}
            >
              The outcome depends on everyone in the room.
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.0625rem',
                lineHeight: 1.55,
                marginTop: 'var(--spacing-6)',
                color: 'rgba(242, 240, 236, 0.7)',
                maxWidth: '50ch',
              }}
            >
              Cooperative by design — the story branches based on what the group does, not what any one
              person chooses. You leave with an NFC-embedded artifact unique to your run.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-stat-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
