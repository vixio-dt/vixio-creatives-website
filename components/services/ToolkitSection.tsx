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
          <h2
            className="headline-md"
            style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)' }}
          >
            Our Toolkit
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: 'var(--spacing-2)',
            }}
          >
            {tools.map((tool) => (
              <div
                key={tool}
                className="tool-tag"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  background: 'var(--surface-container-low)',
                  border: '1px solid rgba(200, 196, 191, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  color: 'var(--on-surface-variant)',
                  cursor: 'default',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--primary)',
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                <span className="label-md">{tool}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
