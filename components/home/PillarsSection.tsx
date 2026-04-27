import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

type Pillar = {
  numeral: string
  title: string
  description: string
  tag: string
  href: string
}

const pillars: Pillar[] = [
  {
    numeral: 'I',
    title: 'Original',
    description: 'Story-worlds we own. Cooperative experiences for 4–12, projection-mapped, NFC-driven.',
    tag: 'In development',
    href: '/experiences',
  },
  {
    numeral: 'II',
    title: 'Services',
    description: 'Commissions for brands, galleries, museums, festivals — story-led, technically rigorous.',
    tag: 'Open',
    href: '/services',
  },
  {
    numeral: 'III',
    title: 'The Lab',
    description: 'Public R&D. NFC, projection, OSC, body tracking — what we are learning out loud.',
    tag: 'Ongoing',
    href: '/lab',
  },
]

export function PillarsSection() {
  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <span className="mono-tag" style={{ display: 'block', marginBottom: 'var(--spacing-6)' }}>
            {'// the studio runs three programs'}
          </span>
          <h2
            className="display-xl"
            style={{
              color: 'var(--on-surface)',
              margin: 0,
              marginBottom: 'var(--spacing-12)',
              maxWidth: '20ch',
            }}
          >
            One engine. Three rooms.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.numeral} delay={i * 0.1}>
              <Link
                href={pillar.href}
                className="card-hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'var(--spacing-8)',
                  background: 'var(--surface-container-low)',
                  borderRadius: 'var(--radius-lg)',
                  minHeight: '360px',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-2.5rem',
                    right: '-1rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '14rem',
                    fontWeight: 700,
                    lineHeight: 0.85,
                    letterSpacing: '-0.04em',
                    color: 'var(--surface-container-high)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {pillar.numeral}
                </span>

                <div style={{ position: 'relative' }}>
                  <span
                    className="mono-tag"
                    style={{ color: 'var(--primary)' }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <div style={{ position: 'relative' }}>
                  <h3
                    className="display-md"
                    style={{
                      color: 'var(--on-surface)',
                      marginBottom: 'var(--spacing-2)',
                    }}
                  >
                    {pillar.title}.
                  </h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '32ch' }}>
                    {pillar.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
