'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Tell us about your space',
    body: 'Venue type, visitor profile, what you are trying to solve. We map the opportunity.',
  },
  {
    number: '02',
    title: 'We design a game system for it',
    body: 'Cooperative mechanics tailored to your space, your audience, your retail calendar.',
  },
  {
    number: '03',
    title: 'Deploy and measure',
    body: 'Site-specific installation. Footfall, dwell time, repeat visits tracked from day one.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="process"
      style={{
        background: 'var(--surface-container-low)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hiw-step-grid {
            grid-template-columns: 1fr !important;
          }
          .hiw-step-number {
            display: block;
            margin-bottom: var(--spacing-2);
          }
        }
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--on-surface-variant)',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            How It Works
          </p>
          <h2
            className="headline-lg"
            style={{
              color: 'var(--on-surface)',
              marginBottom: 'var(--spacing-12)',
            }}
          >
            From conversation to deployment.
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-8)',
          }}
        >
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.15 * (i + 1)}>
              <div
                className="hiw-step-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'var(--spacing-8)',
                  alignItems: 'start',
                  paddingBottom: i < steps.length - 1 ? 'var(--spacing-8)' : undefined,
                  borderBottom: i < steps.length - 1 ? '1px solid var(--outline-variant)' : 'none',
                }}
              >
                <span
                  className="display-lg hiw-step-number"
                  style={{
                    color: 'var(--primary)',
                    opacity: 0.2,
                    fontVariantNumeric: 'tabular-nums',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>

                <div>
                  <h3
                    className="headline-md"
                    style={{
                      color: 'var(--on-surface)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="body-lg"
                    style={{
                      color: 'var(--on-surface-variant)',
                      maxWidth: '50ch',
                    }}
                  >
                    {step.body}
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
