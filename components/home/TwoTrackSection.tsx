import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientPlaceholder } from '@/components/ui/GradientPlaceholder'

export function TwoTrackSection() {
  return (
    <section style={{ padding: '0 var(--spacing-6)', paddingBottom: 'var(--spacing-16)' }}>
      <div
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        className="grid md:grid-cols-2 gap-0"
      >
        {/* Left — Original Experiences */}
        <div
          style={{
            background: 'var(--surface-container-low)',
            padding: 'var(--spacing-12)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <ScrollReveal>
            <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
              Original Experiences
            </h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-6)' }}>
              Our debut story world comes to life as a cooperative immersive experience — where groups
              create something together that crosses from digital to physical. Launching October 2026, Hong Kong.
            </p>
            <Link href="/experiences" className="text-link body-md" style={{ marginBottom: 'var(--spacing-8)', display: 'inline-block' }}>
              Explore the Vision →
            </Link>
            <GradientPlaceholder variant="warm" aspectRatio="16/9" />
          </ScrollReveal>
        </div>

        {/* Right — Studio Services */}
        <div
          style={{
            background: 'var(--surface-container-low)',
            padding: 'var(--spacing-12)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <ScrollReveal delay={0.15}>
            <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
              Studio Services
            </h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-6)' }}>
              We bring story worlds to life for clients — immersive activations, brand experiences, and interactive
              installations for malls, brands, and cultural venues.
            </p>
            <Link href="/services" className="text-link body-md" style={{ marginBottom: 'var(--spacing-8)', display: 'inline-block' }}>
              Start a Project →
            </Link>
            <GradientPlaceholder variant="primary" aspectRatio="16/9" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
