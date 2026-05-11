'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export function WhoThisIsFor() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-6)' }}
          >
            Who This Is For
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
          }}
        >
          <ScrollReveal delay={0.1}>
            <div
              style={{
                padding: 'var(--spacing-8)',
                background: 'var(--surface-container-low)',
                borderRadius: 'var(--radius-xl)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                className="label-md"
                style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-4)' }}
              >
                Players
              </p>
              <h3
                className="headline-lg"
                style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}
              >
                Play together.
              </h3>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-6)',
                  flex: 1,
                }}
              >
                Cooperative game experiences in Shenzhen. 4-6 players, 60-90 minutes,
                one story you play together. Not a walking tour. A game designed to be played.
              </p>
              <GradientButton href="/experiences">See the Experience</GradientButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              style={{
                padding: 'var(--spacing-8)',
                background: 'var(--surface-container-low)',
                borderRadius: 'var(--radius-xl)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                className="label-md"
                style={{ color: 'var(--tertiary)', marginBottom: 'var(--spacing-4)' }}
              >
                Venue Operators
              </p>
              <h3
                className="headline-lg"
                style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}
              >
                Make your space playable.
              </h3>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-6)',
                  flex: 1,
                }}
              >
                Experiential retail that drives measurable footfall, dwell time, and repeat
                visits. Game-designed formats for malls, attractions, corporate spaces, and
                cultural venues across Hong Kong and the Greater Bay Area.
              </p>
              <GhostButton href="/contact">Talk to Us About Your Venue</GhostButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
