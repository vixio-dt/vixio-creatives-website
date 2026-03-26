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
          <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}>
            How We Work
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          {steps.map((step, i) => (
            <ScrollReveal key={step.name} delay={i * 0.08}>
              <div className="flex items-baseline gap-4">
                <span
                  className="label-md"
                  style={{ color: 'var(--primary)', minWidth: '2rem', flexShrink: 0 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="title-md" style={{ color: 'var(--on-surface)' }}>
                    {step.name}
                  </span>
                  <span className="body-md" style={{ color: 'var(--on-surface-variant)', marginLeft: '0.5rem' }}>
                    — {step.desc}
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
