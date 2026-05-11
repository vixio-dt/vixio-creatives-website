'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const phases = [
  {
    title: 'Build',
    body: 'We design and run a public ticketed experience in Shenzhen. Real players. Real data. Real footage.',
  },
  {
    title: 'Prove',
    body: 'Engagement metrics, player behavior, repeat visit patterns. The proof is in the play, not the pitch deck.',
  },
  {
    title: 'Scale',
    body: 'Adapt the format to your venue. Site-specific game design, your space, your audience, your calendar.',
  },
]

export function ApproachSection() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-4)' }}
          >
            The Approach
          </p>
          <h2
            className="display-md"
            style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-12)' }}
          >
            Build first. Prove second. Scale third.
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.title} delay={0.15 * (i + 1)}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'var(--spacing-6)',
                  alignItems: 'start',
                  paddingBottom: i < phases.length - 1 ? 'var(--spacing-8)' : 0,
                  borderBottom:
                    i < phases.length - 1
                      ? '1px solid var(--outline-variant)'
                      : 'none',
                }}
              >
                <p
                  className="headline-lg"
                  style={{ color: 'var(--primary)', minWidth: '2.5rem' }}
                >
                  {i + 1}.
                </p>
                <div>
                  <h3
                    className="headline-md"
                    style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}
                  >
                    {phase.title}
                  </h3>
                  <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '55ch' }}>
                    {phase.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
