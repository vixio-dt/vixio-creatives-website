'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const steps = [
  {
    label: 'Concept',
    title: 'Start with the object',
    body: 'What do you hold? What do you open? What do you solve? The physical thing comes first.',
  },
  {
    label: 'Engineer',
    title: 'Build the experience layer',
    body: 'IoT, code, and craft. The digital serves the physical. Manufactured through GBA.',
  },
  {
    label: 'Ship',
    title: 'Into your hands',
    body: 'Premium products and playable experiences, shipped direct. Hold it. Open it. Solve it. Share it.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="process"
      style={{
        background: 'var(--surface-container-low)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <style>{`
        .hiw-flow {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          position: relative;
        }
        .hiw-flow::before {
          content: '';
          position: absolute;
          top: 1.5rem;
          left: calc(100% / 6);
          right: calc(100% / 6);
          height: 1px;
          background: var(--outline-variant);
        }
        .hiw-step {
          text-align: center;
          padding: 0 var(--spacing-4);
        }
        .hiw-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primary);
          margin: 0 auto var(--spacing-8);
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 4px var(--surface-container-low), 0 0 0 5px var(--outline-variant);
        }
        @media (max-width: 768px) {
          .hiw-flow {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }
          .hiw-flow::before {
            display: none;
          }
          .hiw-step {
            text-align: left;
            padding: 0;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: var(--spacing-4);
            align-items: start;
          }
          .hiw-dot {
            margin: 0.35rem 0 0 0;
          }
          .hiw-step-content {
            order: unset;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--on-surface-variant)',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            How It Works
          </p>
          <h2
            className="headline-lg"
            style={{
              color: 'var(--on-surface)',
              marginBottom: 'var(--spacing-12)',
            }}
          >
            From concept to your hands.
          </h2>
        </ScrollReveal>

        <div className="hiw-flow">
          {steps.map((step, i) => (
            <ScrollReveal key={step.label} delay={0.15 * (i + 1)}>
              <div className="hiw-step">
                <div className="hiw-dot" />
                <div className="hiw-step-content">
                  <p
                    className="label-md"
                    style={{
                      color: 'var(--primary)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {step.label}
                  </p>
                  <h3
                    className="headline-md"
                    style={{
                      color: 'var(--on-surface)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="body-lg"
                    style={{
                      color: 'var(--on-surface-variant)',
                      maxWidth: '30ch',
                      margin: '0 auto',
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
