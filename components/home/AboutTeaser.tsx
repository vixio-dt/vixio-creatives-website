import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientPlaceholder } from '@/components/ui/GradientPlaceholder'

export function AboutTeaser() {
  return (
    <section style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}>
      <div
        style={{ maxWidth: '900px', margin: '0 auto' }}
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
      >
        <ScrollReveal>
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(200, 196, 191, 0.3)',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <GradientPlaceholder variant="neutral" aspectRatio="1/1" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div>
            <SectionLabel>Founder</SectionLabel>
            <h3 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}>
              Denis Tam
            </h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-4)' }}>
              Mechanical engineer turned creative producer. Now building Hong Kong&apos;s first cooperative
              immersive experience studio.
            </p>
            <Link href="/about" className="text-link body-md">
              Read our story →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
