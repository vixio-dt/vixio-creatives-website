import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function TwoTrackSection() {
  return (
    <section style={{ padding: '0 var(--spacing-6)', paddingBottom: 'var(--spacing-16)' }}>
      <div
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        className="grid md:grid-cols-2 gap-6"
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
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16/9' }}>
              <Image
                src="/images/track-original-experiences.webp"
                alt="Cooperative experience in a projection-mapped room — silhouetted visitors facing a luminous wall"
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s var(--ease-default)' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,27,31,0.12)' }} />
            </div>
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
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16/9' }}>
              <Image
                src="/images/track-studio-services.webp"
                alt="Brand activation pop-up installation in a mall atrium with oak framework and brass accents"
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s var(--ease-default)' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,27,31,0.12)' }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
