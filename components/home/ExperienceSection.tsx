'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const comparisonRows = [
  {
    is: 'A cooperative game with narrative and consequence',
    isnt: 'A scavenger hunt with an iPad',
  },
  {
    is: '4-6 players who each hold a piece of the story',
    isnt: 'One person solving while others watch',
  },
  {
    is: 'Physical, spatial, social',
    isnt: 'Screens, apps, VR headsets',
  },
  {
    is: 'Designed to be replayed with different roles',
    isnt: 'A one-and-done photo op',
  },
  {
    is: '60-90 minutes of active engagement',
    isnt: '15 minutes of content stretched with walking',
  },
]

export function ExperienceSection() {
  return (
    <>
      {/* Part 1 — Intro (cream surface) */}
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

      {/* Part 2 — Comparison table (ink background) */}
      <section
        style={{
          background: 'var(--ink)',
          padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <ScrollReveal>
            <h3
              className="headline-lg"
              style={{
                color: 'var(--on-ink)',
                textAlign: 'center',
                marginBottom: 'var(--spacing-12)',
              }}
            >
              What this is. What this isn't.
            </h3>
          </ScrollReveal>

          {/* Column headers */}
          <ScrollReveal delay={0.1}>
            <div
              className="exp-row"
              style={{
                borderBottom: '1px solid var(--ink-border)',
                paddingBottom: 'var(--spacing-3)',
                marginBottom: 'var(--spacing-2)',
              }}
            >
              <p className="label-md" style={{ color: 'var(--primary)' }}>
                What it is
              </p>
              <p
                className="label-md"
                style={{ color: 'var(--on-ink-muted)' }}
              >
                What it isn't
              </p>
            </div>
          </ScrollReveal>

          {/* Data rows */}
          {comparisonRows.map((row, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.08}>
              <div
                className="exp-row"
                style={{
                  borderBottom: '1px solid var(--ink-border-subtle)',
                  padding: 'var(--spacing-4) 0',
                }}
              >
                <p
                  className="body-md"
                  style={{ color: 'var(--on-ink)' }}
                >
                  {row.is}
                </p>
                <p
                  className="body-md"
                  style={{
                    color: 'var(--on-ink-muted)',
                    textDecoration: 'line-through',
                    textDecorationColor: 'var(--on-ink-muted)',
                  }}
                >
                  {row.isnt}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <style>{`
        .exp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-6);
        }
        @media (max-width: 480px) {
          .exp-row {
            grid-template-columns: 1fr;
            gap: var(--spacing-2);
          }
        }
      `}</style>
    </>
  )
}
