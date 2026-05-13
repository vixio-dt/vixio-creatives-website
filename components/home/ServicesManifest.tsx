'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const services = [
  {
    number: '01',
    title: 'Premium Physical Products',
    oneLiner: 'Plush, collectibles, and objects engineered to keep.',
    duration: 'Creator collabs',
  },
  {
    number: '02',
    title: 'Playable Experiences',
    oneLiner: 'Mystery kits, puzzle boxes, and games you play together.',
    duration: 'Ships to you',
  },
  {
    number: '03',
    title: 'DIY Builds',
    oneLiner: 'Physical-digital maker kits. Build it, play it, keep it.',
    duration: 'IoT + craft',
  },
  {
    number: '04',
    title: 'Creator Collaborations',
    oneLiner: 'Your IP, our engineering. Premium products with your name.',
    duration: 'Partnership',
  },
  {
    number: '05',
    title: 'Digital Layer Engineering',
    oneLiner: 'The app, the interface, the code that makes the object playable.',
    duration: 'In-house',
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
          className="display-md sr-number"
          style={{
            color: 'var(--on-ink-low)',
            opacity: 0.25,
            minWidth: '4rem',
            flexShrink: 0,
          }}
        >
          {number}
        </span>

        <span
          className="headline-md sr-title"
          style={{
            color: 'var(--on-ink-high)',
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
          transition: background-color 0.25s var(--ease-default);
        }
        .service-row-wrap .sr-number {
          transition: opacity 0.25s var(--ease-default), color 0.25s var(--ease-default);
        }
        .service-row-wrap .sr-title {
          transition: color 0.25s var(--ease-default);
        }
        .service-row-wrap:hover {
          background-color: var(--ink-surface-raised);
        }
        .service-row-wrap:hover .sr-number {
          opacity: 1 !important;
          color: var(--primary) !important;
        }
        .service-row-wrap:hover .sr-title {
          color: var(--on-ink) !important;
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
              What We Make
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="headline-lg"
              style={{ color: 'var(--on-ink)' }}
            >
              Physical-first. Digitally enhanced. Always playable.
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
