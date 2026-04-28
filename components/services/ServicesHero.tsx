import { SectionLabel } from '@/components/ui/SectionLabel'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`

export function ServicesHero() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)',
      }}
    >
      {/* Subtle grain texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: GRAIN,
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '800px', position: 'relative' }}>
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <SectionLabel color="primary">Studio Services</SectionLabel>
        </div>

        <h1
          className="display-md fade-in-up"
          style={{
            color: 'var(--on-surface)',
            marginBottom: 'var(--spacing-6)',
            animationDelay: '0.25s',
            fontWeight: 800,
          }}
        >
          We build immersive experiences for brands, malls, and cultural venues.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', animationDelay: '0.4s' }}
        >
          We bring the same storytelling and technical craft behind our original worlds to
          client projects — from concept through installation, across Hong Kong and the Greater Bay Area.
        </p>
      </div>
    </section>
  )
}
