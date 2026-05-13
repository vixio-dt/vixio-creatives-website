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
                Everything is a screen now.
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
                Gifts feel mass-produced. Entertainment defaults to streaming.
                Merch is disposable. The things we buy don't ask anything of us,
                and we don't keep them.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="body-lg"
                style={{ color: 'var(--on-ink-low)' }}
              >
                The physical world got quieter. Objects stopped being
                interesting. We think digital solved everything. It didn't.
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
              The object leads.{' '}
              <span style={{ color: 'var(--primary)' }}>
                Digital serves.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
