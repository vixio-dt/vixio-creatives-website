import { ScrollReveal } from '@/components/ui/ScrollReveal'

const tools = [
  'Projection Mapping',
  'NFC / RFID',
  'Body Tracking',
  'Spatial Audio',
  'Unity',
  'TouchDesigner',
  'Physical Collectibles',
  'PPEL Licensing',
]

export function ToolkitSection() {
  return (
    <section style={{ padding: '0 var(--spacing-6)', paddingBottom: 'var(--spacing-16)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <ScrollReveal>
          <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}>
            Our Toolkit
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="label-md"
                style={{
                  border: '1px solid rgba(200, 196, 191, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  color: 'var(--on-surface-variant)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
