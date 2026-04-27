import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientPlaceholder } from '@/components/ui/GradientPlaceholder'

export function AboutTeaser() {
  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6)' }}>
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'var(--spacing-8)',
          alignItems: 'center',
        }}
        className="about-teaser-grid"
      >
        <ScrollReveal>
          <div
            style={{
              width: '140px',
              height: '140px',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 0 0 2px var(--surface-container-high)',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <GradientPlaceholder variant="neutral" aspectRatio="1/1" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div>
            <span className="mono-tag" style={{ display: 'block', marginBottom: 'var(--spacing-3)' }}>
              {'// founder · vixio creatives'}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                margin: 0,
                marginBottom: 'var(--spacing-3)',
                color: 'var(--on-surface)',
              }}
            >
              Denis Tam.
            </h3>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-6)',
                maxWidth: '50ch',
              }}
            >
              Mechanical engineer turned creative producer. Building a transmedia studio in Hong Kong
              — designing rooms you can step inside.
            </p>
            <Link href="/about" className="text-link body-md">
              Read our story →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-teaser-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
        }
      `}</style>
    </section>
  )
}
