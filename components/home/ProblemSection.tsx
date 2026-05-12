'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ProblemSection() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        color: 'var(--on-ink)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-6)' }}
          >
            The Problem
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="display-md"
            style={{ color: 'var(--on-ink)', marginBottom: 'var(--spacing-8)' }}
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
              maxWidth: '65ch',
            }}
          >
            Mall operators spend millions on activations that spike for two weeks and fade.
            Celebrity appearances. Seasonal decor. Pop-up installations. Each one draws a crowd,
            generates photos, and disappears.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            className="body-lg"
            style={{
              color: 'var(--on-ink-medium)',
              marginBottom: 'var(--spacing-6)',
              maxWidth: '65ch',
            }}
          >
            Footfall returns to baseline. No repeat visits. No behavioral change. No data beyond
            headcount.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-6)',
              marginTop: 'var(--spacing-8)',
              paddingTop: 'var(--spacing-8)',
              borderTop: '1px solid var(--ink-border-subtle)',
            }}
          >
            <div>
              <p className="display-md" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                $132B
              </p>
              <p className="body-sm" style={{ color: 'var(--on-ink-low)' }}>
                Global retailtainment market
              </p>
            </div>
            <div>
              <p className="display-md" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                85%
              </p>
              <p className="body-sm" style={{ color: 'var(--on-ink-low)' }}>
                HK malls without experiential retail
              </p>
            </div>
            <div>
              <p className="display-md" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                20%
              </p>
              <p className="body-sm" style={{ color: 'var(--on-ink-low)' }}>
                Sales uplift where adopted
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p
            className="headline-md"
            style={{
              color: 'var(--on-ink)',
              marginTop: 'var(--spacing-8)',
            }}
          >
            The gap is not awareness. It is execution.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
