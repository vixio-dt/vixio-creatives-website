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
      style={{
        background: 'var(--surface-container-low)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-4)' }}
          >
            How It Works
          </p>
          <h2
            className="headline-lg"
            style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-12)' }}
          >
            From conversation to deployment.
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.15 * (i + 1)}>
              <div>
                <p
                  className="display-md"
                  style={{
                    color: 'var(--primary)',
                    opacity: 0.3,
                    marginBottom: 'var(--spacing-4)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {step.number}
                </p>
                <h3
                  className="headline-md"
                  style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}
                >
                  {step.title}
                </h3>
                <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
