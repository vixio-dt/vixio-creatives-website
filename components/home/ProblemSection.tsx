'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ProblemSection() {
  return (
    <section
      id="problem"
      style={{
        background: 'var(--ink)',
        color: 'var(--on-ink)',
        padding: 'clamp(6rem, 14vw, 12rem) var(--spacing-6)',
      }}
    >
      <style>{`
        .problem-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: end;
        }
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--primary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 'var(--spacing-6)',
            }}
          >
            The Problem
          </p>
        </ScrollReveal>

        <div className="problem-grid">
          <div>
            <ScrollReveal delay={0.1}>
              <h2
                className="headline-lg"
                style={{
                  color: 'var(--on-ink-medium)',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                Events end. Systems compound.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-ink-low)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Mall operators spend millions on activations that spike for two
                weeks and fade. Celebrity appearances. Seasonal decor. Pop-up
                installations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="body-lg"
                style={{ color: 'var(--on-ink-low)' }}
              >
                Footfall returns to baseline. No repeat visits. No behavioral
                change. No data beyond headcount.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <p
              className="display-xl"
              style={{
                color: 'var(--on-ink)',
                lineHeight: 0.94,
              }}
            >
              The gap is not awareness.{' '}
              <span style={{ color: 'var(--primary)' }}>
                It is execution.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
