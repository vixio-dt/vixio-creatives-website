'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const capabilities = [
  {
    title: 'Cooperative Mechanics',
    body: 'Information asymmetry, role division, communication constraints. Each player holds a piece no one else has. Groups cannot solve it alone.',
  },
  {
    title: 'Cinematic Direction',
    body: 'Narrative, sound, light, tension. The experience feels like a story, not a scavenger hunt.',
  },
  {
    title: 'Measurable Outcomes',
    body: 'Footfall uplift, dwell time, repeat visit rate, tenant sales correlation. Numbers your board can read.',
  },
]

export function WhatWeDo() {
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
            style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-4)' }}
          >
            What We Do
          </p>
          <h2
            className="display-md"
            style={{
              color: 'var(--on-surface)',
              marginBottom: 'var(--spacing-4)',
              maxWidth: '700px',
            }}
          >
            We design the game. You own the engagement.
          </h2>
          <p
            className="body-lg"
            style={{
              color: 'var(--on-surface-variant)',
              marginBottom: 'var(--spacing-12)',
              maxWidth: '600px',
            }}
          >
            Vixio applies game mechanics to physical venues. Not screens on walls. Not apps people
            download and forget. Cooperative experiences where 4-6 players solve problems together,
            move through your space, and come back to continue the story.
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'var(--spacing-4)',
          }}
        >
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={0.1 * (i + 1)}>
              <div className="cap-tile">
                <p
                  className="headline-md"
                  style={{ marginBottom: 'var(--spacing-4)' }}
                >
                  {cap.title}
                </p>
                <p className="body-md" style={{ opacity: 0.8 }}>
                  {cap.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
