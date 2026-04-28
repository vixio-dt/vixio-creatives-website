import { ScrollReveal } from '@/components/ui/ScrollReveal'

const steps = [
  { name: 'Discovery', desc: 'We listen.' },
  { name: 'Concept', desc: 'We design the experience, not just the technology.' },
  { name: 'Design', desc: 'Storyboards, technical architecture, spatial planning.' },
  { name: 'Build', desc: 'Content, systems, physical production, integration.' },
  { name: 'Deliver', desc: 'Installation, testing, training, launch support.' },
]

export function ProcessSection() {
  return (
    <section style={{ padding: '0 var(--spacing-6)', paddingBottom: 'var(--spacing-16)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <ScrollReveal>
          <h2
            className="headline-md"
            style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
          >
            How We Work
          </h2>
        </ScrollReveal>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          {/* Vertical progress line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '1.4rem',
              top: '3rem',
              bottom: '3rem',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--primary) 0%, var(--tertiary) 100%)',
              opacity: 0.2,
            }}
          />

          {steps.map((step, i) => (
            <ScrollReveal key={step.name} delay={i * 0.08}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '3rem 1fr',
                  gap: 'var(--spacing-6)',
                  alignItems: 'start',
                }}
              >
                <span
                  className="gradient-text"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ paddingTop: '0.3rem' }}>
                  <span
                    className="title-md"
                    style={{
                      color: 'var(--on-surface)',
                      display: 'block',
                      marginBottom: 'var(--spacing-1)',
                    }}
                  >
                    {step.name}
                  </span>
                  <span className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                    {step.desc}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
