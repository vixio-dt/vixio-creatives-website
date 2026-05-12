'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ProblemSection() {
  return (
    <section
      id="problem"
      style={{
        background: 'var(--ink)',
        color: 'var(--on-ink)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '700px' }}>
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

          <ScrollReveal delay={0.1}>
            <h2
              className="display-md"
              style={{
                color: 'var(--on-ink)',
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
                color: 'var(--on-ink-medium)',
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
              style={{
                color: 'var(--on-ink-medium)',
                marginBottom: 'var(--spacing-6)',
              }}
            >
              Footfall returns to baseline. No repeat visits. No behavioral
              change. No data beyond headcount.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p
              className="headline-lg"
              style={{
                color: 'var(--on-ink)',
                marginTop: 'var(--spacing-12)',
              }}
            >
              The gap is not awareness. It is execution.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
