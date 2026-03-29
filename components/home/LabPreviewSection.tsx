import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientPlaceholder } from '@/components/ui/GradientPlaceholder'

const labEntries = [
  { title: 'NFC Tap-to-Response Test', tag: 'NFC · TouchDesigner', variant: 'primary' as const },
  { title: '3-Wall Projection Alignment', tag: 'Projection Mapping', variant: 'neutral' as const },
  { title: 'Depth Camera Silhouette', tag: 'Body Tracking', variant: 'warm' as const },
]

export function LabPreviewSection() {
  return (
    <section
      style={{
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-16) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <SectionLabel>From the Lab</SectionLabel>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 'var(--spacing-8)' }}>
          {labEntries.map((entry, i) => (
            <ScrollReveal key={entry.title} delay={i * 0.1}>
              <Link
                href="/lab"
                className="card-hover"
                style={{
                  display: 'block',
                  background: 'var(--surface-container-high)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <GradientPlaceholder variant={entry.variant} aspectRatio="16/9" />
                <div style={{ padding: 'var(--spacing-4)' }}>
                  <h3 className="title-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-1)' }}>
                    {entry.title}
                  </h3>
                  <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    {entry.tag}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Link href="/lab" className="text-link body-md">
            See all experiments →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
