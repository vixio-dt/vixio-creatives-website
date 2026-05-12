'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const services = [
  {
    number: '01',
    title: 'Venue Gamification',
    oneLiner: 'Game mechanics designed for your specific physical space.',
    duration: '6–12 weeks',
  },
  {
    number: '02',
    title: 'Experience Design',
    oneLiner: 'Concept-to-playable cooperative game product.',
    duration: '8–16 weeks',
  },
  {
    number: '03',
    title: 'Format Design',
    oneLiner: 'One game format, many venues. Repeatable deployment.',
    duration: '12–20 weeks',
  },
  {
    number: '04',
    title: 'Corporate Experiences',
    oneLiner: 'Cooperative sessions for teams. Not trust falls.',
    duration: '2–4 hours',
  },
  {
    number: '05',
    title: 'Creative Direction',
    oneLiner: 'Creative vision and game design oversight for your project.',
    duration: '4–24 weeks',
  },
]

function ServiceRow({
  number,
  title,
  oneLiner,
  duration,
  delay,
}: {
  number: string
  title: string
  oneLiner: string
  duration: string
  delay: number
}) {
  return (
    <ScrollReveal delay={delay}>
      <div
        className="service-row-wrap"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'var(--spacing-4)',
          padding: 'var(--spacing-5) 0',
          borderBottom: '1px solid var(--ink-border-subtle)',
          marginLeft: 'calc(-1 * var(--spacing-4))',
          marginRight: 'calc(-1 * var(--spacing-4))',
          paddingLeft: 'var(--spacing-4)',
          paddingRight: 'var(--spacing-4)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        <span
          className="display-md"
          style={{
            color: 'var(--on-ink-low)',
            opacity: 0.4,
            minWidth: '4rem',
            flexShrink: 0,
          }}
        >
          {number}
        </span>

        <span
          className="headline-md"
          style={{
            color: 'var(--on-ink)',
            flexGrow: 1,
          }}
        >
          {title}
        </span>

        <span
          className="body-md service-row-oneliner"
          style={{
            color: 'var(--on-ink-medium)',
            maxWidth: '35ch',
            flexShrink: 0,
          }}
        >
          {oneLiner}
        </span>

        <span
          className="mono-tag"
          style={{
            color: 'var(--on-ink-low)',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {duration}
        </span>
      </div>
    </ScrollReveal>
  )
}

export function ServicesManifest() {
  return (
    <section
      id="services"
      style={{
        background: 'var(--ink)',
        color: 'var(--on-ink)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <style>{`
        .service-row-wrap {
          background-color: transparent;
          transition: background-color 0.2s var(--ease-default);
        }
        .service-row-wrap:hover {
          background-color: var(--ink-surface-raised);
        }
        @media (max-width: 768px) {
          .service-row-wrap {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .service-row-oneliner {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .service-row-oneliner {
            display: block;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: 'var(--spacing-12)' }}>
          <ScrollReveal>
            <p
              className="label-md"
              style={{
                color: 'var(--primary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              Services
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="headline-lg"
              style={{ color: 'var(--on-ink)' }}
            >
              Five ways to make spaces playable.
            </h2>
          </ScrollReveal>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--ink-border-subtle)',
          }}
        >
          {services.map((service, i) => (
            <ServiceRow
              key={service.number}
              {...service}
              delay={0.1 + i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
