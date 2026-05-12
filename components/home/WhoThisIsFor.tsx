'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export function WhoThisIsFor() {
  return (
    <section
      id="audience"
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--on-surface-variant)',
              marginBottom: 'var(--spacing-12)',
            }}
          >
            Who This Is For
          </p>
        </ScrollReveal>

        <div className="wtif-grid">
          {/* Left column — Players — bigger, bolder */}
          <ScrollReveal delay={0.1} className="wtif-col-players">
            <div>
              <p
                className="label-md"
                style={{
                  color: 'var(--primary)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Players
              </p>
              <h3
                className="display-md"
                style={{
                  color: 'var(--on-surface)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Play together.
              </h3>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-surface-variant)',
                  maxWidth: '45ch',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                Cooperative game experiences in Shenzhen. 4-6 players, 60-90
                minutes. A story you play together. Not a walking tour. A game
                designed to be played.
              </p>
              <GradientButton href="#experience">
                See the Experience
              </GradientButton>
            </div>
          </ScrollReveal>

          {/* Right column — Venue Operators — contained, professional */}
          <ScrollReveal delay={0.25} className="wtif-col-venues">
            <div
              style={{
                background: 'var(--surface-container-low)',
                padding: 'var(--spacing-8)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <p
                className="label-md"
                style={{
                  color: 'var(--tertiary)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Venue Operators
              </p>
              <h3
                className="headline-md"
                style={{
                  color: 'var(--on-surface)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Make your space playable.
              </h3>
              <p
                className="body-md"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Experiential retail that drives measurable footfall, dwell time,
                and repeat visits. Game-designed formats for malls, attractions,
                corporate spaces, and cultural venues.
              </p>
              <GhostButton href="#contact">Talk to Us</GhostButton>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .wtif-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: start;
        }
        @media (max-width: 768px) {
          .wtif-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
