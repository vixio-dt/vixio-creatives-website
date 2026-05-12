'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function StructuralGap() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        color: 'var(--on-ink)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-6)' }}
          >
            The Structural Gap
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="body-lg"
            style={{
              color: 'var(--on-ink-high)',
              marginBottom: 'var(--spacing-6)',
              maxWidth: '65ch',
            }}
          >
            SCRAP (Tokyo) built a $30M business on game design alone. 450+ titles,
            15M participants. No cinematic production. Paper-based.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="body-lg"
            style={{
              color: 'var(--on-ink-high)',
              marginBottom: 'var(--spacing-6)',
              maxWidth: '65ch',
            }}
          >
            Moment Factory (Montreal) commands $140M+ with cinematic spectacle. 550+ projects,
            7M+ tickets. No game design depth. Their Augmented Games platform is a technology
            platform in search of game design.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            className="headline-lg"
            style={{
              color: 'var(--on-ink)',
              marginTop: 'var(--spacing-4)',
            }}
          >
            No one integrates game design depth with cinematic production value.
            The gap is structural, not temporary. That gap is where we build.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
