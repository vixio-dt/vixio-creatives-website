'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        background: 'var(--surface)',
        padding: 'clamp(6rem, 14vw, 12rem) var(--spacing-6)',
      }}
    >
      <style>{`
        .exp-layout {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: end;
        }
        @media (max-width: 768px) {
          .exp-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--primary)',
              marginBottom: 'var(--spacing-8)',
            }}
          >
            How It's Made
          </p>
        </ScrollReveal>

        <div className="exp-layout">
          <ScrollReveal delay={0.1}>
            <h2
              className="display-xl"
              style={{
                color: 'var(--on-surface)',
                lineHeight: 0.94,
              }}
            >
              Built, not sourced.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div style={{ maxWidth: '450px' }}>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Every product starts as a concept, merges with story, gets
                engineered and designed, becomes a physical object, and ends as
                a shared experience.
              </p>
              <p
                className="headline-md"
                style={{
                  color: 'var(--primary)',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                Concept. Lore. Engineering. Product. Shared experience.
              </p>
              <GradientButton href="#contact">Follow the Build</GradientButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
