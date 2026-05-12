'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '720px' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--primary)',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            The Experience
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="display-lg"
            style={{
              color: 'var(--on-surface)',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            Play it.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p
            className="body-lg"
            style={{
              color: 'var(--on-surface-variant)',
              maxWidth: '600px',
              marginBottom: 'var(--spacing-8)',
            }}
          >
            Cooperative game experiences designed by Vixio Creatives. Not an
            escape room. Not a walking tour. A game where every player
            matters.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="headline-md"
            style={{
              color: 'var(--primary)',
            }}
          >
            4-6 players. 60-90 minutes. Shenzhen, 2026.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
