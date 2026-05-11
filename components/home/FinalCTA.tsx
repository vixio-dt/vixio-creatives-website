'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export function FinalCTA() {
  return (
    <section
      className="grain-overlay"
      style={{
        background: 'var(--surface-container-low)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2
            className="display-md"
            style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
          >
            Play it. Or bring it to your venue.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <GradientButton href="/experiences">Book a Session</GradientButton>
            <GhostButton href="/contact">Talk to Us About Your Venue</GhostButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
