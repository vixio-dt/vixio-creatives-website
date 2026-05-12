import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export const metadata: Metadata = {
  title: 'Services | Vixio Creatives',
  description:
    'Five services: Venue Gamification, Experience Design, Format Design, Corporate Experiences, Creative Direction. Game-designed experiences for physical spaces.',
  openGraph: {
    title: 'Services | Vixio Creatives',
    description:
      'Game-designed experiences for physical spaces. Five services from venue gamification to creative direction.',
  },
}

interface Service {
  number: string
  title: string
  accent: string
  image: string
  imageAlt: string
  whatItIs: string
  delivers: string
  format: string
  formatLabel?: string
  bestFor: string
  duration: string
}

const services: Service[] = [
  {
    number: '01',
    title: 'Venue Gamification',
    accent: 'var(--primary)',
    image: '/images/service-venue-gamification.webp',
    imageAlt: 'Mall atrium with glowing brass game waypoints embedded in the floor, guiding visitors between zones',
    whatItIs:
      'Game mechanics designed for a specific physical venue. We map your space, identify dead zones and desire paths, and design interactive systems that route visitors where you need them.',
    delivers:
      'Footfall redistribution across floors and zones. Dwell time extension. Repeat visit mechanics tied to your retail calendar.',
    format:
      'Site audit, game system design, deployment support, measurement framework.',
    bestFor: 'Mall operators, attraction venues, cultural sites.',
    duration: 'Typical engagement: 6–12 weeks',
  },
  {
    number: '02',
    title: 'Experience Design',
    accent: 'var(--tertiary)',
    image: '/images/service-experience-design.webp',
    imageAlt: 'Four players around an oak table with brass mechanical objects, projection-mapped narrative on concrete walls',
    whatItIs:
      'Concept-to-playable product. We design a complete cooperative game experience: narrative, mechanics, physical touchpoints, sound, light, player journey.',
    delivers:
      'A ticketed or free-to-play experience your visitors talk about, photograph, and return for.',
    format:
      'Full creative direction, game design document, technical specification, production oversight.',
    bestFor:
      'Venues commissioning a signature experience. Property groups launching experiential retail.',
    duration: 'Typical engagement: 8–16 weeks',
  },
  {
    number: '03',
    title: 'Format Design',
    accent: 'var(--primary)',
    image: '/images/service-format-design.webp',
    imageAlt: 'Game format blueprint on oak workbench with brass pins and thread connecting deployment points across venue plans',
    whatItIs:
      'A repeatable game format that deploys across multiple venues, seasons, or cities. One design, many installations.',
    delivers:
      'A format you own. Each deployment is adapted to the local venue, but the core mechanics, narrative structure, and production template stay consistent.',
    format:
      'Format bible, deployment playbook, adaptation guidelines, licensing terms.',
    bestFor:
      'Property groups with multiple venues. Experience operators building a portfolio.',
    duration: 'Typical engagement: 12–20 weeks',
  },
  {
    number: '04',
    title: 'Corporate Experiences',
    accent: 'var(--tertiary)',
    image: '/images/service-corporate-experiences.webp',
    imageAlt: 'Professionals at separate stations in a concrete room with a red countdown timer projected on the wall',
    whatItIs:
      'Cooperative game sessions designed for corporate teams. Not trivia. Not trust falls. Shared-stake decisions where each person’s role matters.',
    delivers:
      'Team dynamics data, communication pattern insights, debrief analytics.',
    format:
      'Information asymmetry, role division, communication constraints, time pressure.',
    formatLabel: 'Mechanics',
    bestFor: 'Corporate teams, offsite programs, leadership development.',
    duration: 'Single session: 2–4 hours',
  },
  {
    number: '05',
    title: 'Creative Direction',
    accent: 'var(--primary)',
    image: '/images/service-creative-direction.webp',
    imageAlt: 'Creative director at multi-monitor workspace with storyboards, game flow diagrams, and brass prototypes on oak desk',
    whatItIs:
      'Denis Tam directs your experience project. Creative vision, game design oversight, narrative direction, production pipeline management.',
    delivers:
      'A creative director who thinks in game systems and cinematic storytelling, applied to your project.',
    format: '',
    bestFor:
      'IP holders creating LBE. Event agencies adding game mechanics. Studios needing a creative lead.',
    duration: 'Project-based: 4–24 weeks',
  },
]

function ServiceBlock({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const isEven = index % 2 === 1
  const bg =
    index % 2 === 0 ? 'var(--surface)' : 'var(--surface-container-low)'

  return (
    <section
      style={{
        background: bg,
        padding: 'clamp(4rem, 8vw, 6rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
          className="service-zigzag"
        >
          {/* Text column */}
          <div style={{ order: isEven ? 2 : 1 }}>
            <ScrollReveal>
              <p
                className="label-sm"
                style={{
                  color: service.accent,
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Service {service.number}
              </p>
              <h2
                className="headline-lg"
                style={{
                  color: 'var(--on-surface)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                {service.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div style={{ marginBottom: 'var(--spacing-6)' }}>
                <p
                  className="label-sm"
                  style={{
                    color: 'var(--on-surface-variant)',
                    marginBottom: 'var(--spacing-1)',
                  }}
                >
                  What it is
                </p>
                <p
                  className="body-lg"
                  style={{ color: 'var(--on-surface-variant)' }}
                >
                  {service.whatItIs}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div style={{ marginBottom: 'var(--spacing-6)' }}>
                <p
                  className="label-sm"
                  style={{
                    color: 'var(--on-surface-variant)',
                    marginBottom: 'var(--spacing-1)',
                  }}
                >
                  What it delivers
                </p>
                <p
                  className="body-lg"
                  style={{ color: 'var(--on-surface-variant)' }}
                >
                  {service.delivers}
                </p>
              </div>
            </ScrollReveal>

            {service.format && (
              <ScrollReveal delay={0.2}>
                <div style={{ marginBottom: 'var(--spacing-6)' }}>
                  <p
                    className="label-sm"
                    style={{
                      color: 'var(--on-surface-variant)',
                      marginBottom: 'var(--spacing-1)',
                    }}
                  >
                    {service.formatLabel || 'Format'}
                  </p>
                  <p
                    className="body-md"
                    style={{ color: 'var(--on-surface-variant)' }}
                  >
                    {service.format}
                  </p>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.25}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-6)',
                  alignItems: 'baseline',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                <div>
                  <p
                    className="label-sm"
                    style={{
                      color: 'var(--on-surface-variant)',
                      marginBottom: 'var(--spacing-1)',
                    }}
                  >
                    Best for
                  </p>
                  <p
                    className="body-md"
                    style={{ color: 'var(--on-surface-variant)' }}
                  >
                    {service.bestFor}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="mono-tag"
                style={{
                  marginTop: 'var(--spacing-4)',
                  paddingTop: 'var(--spacing-4)',
                  borderTop: '1px solid var(--outline-variant)',
                }}
              >
                {service.duration}
              </p>
            </ScrollReveal>
          </div>

          {/* Visual column */}
          <div style={{ order: isEven ? 1 : 2 }}>
            <ScrollReveal delay={0.1}>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  aspectRatio: '4 / 3',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Responsive override: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .service-zigzag {
            grid-template-columns: 1fr !important;
          }
          .service-zigzag > div {
            order: unset !important;
          }
        }
      `}</style>
      {/* ── Header Section ── */}
      <section
        style={{
          background: 'var(--surface)',
          padding: 'clamp(5rem, 12vw, 8rem) var(--spacing-6) clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Services</SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1
              className="display-md"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              Five ways to make spaces playable.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                maxWidth: '640px',
              }}
            >
              Every service starts with game design. The format, the venue, and
              the audience shape which mechanics we use and how we deploy them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Blocks (zig-zag) ── */}
      {services.map((service, i) => (
        <ServiceBlock key={service.number} service={service} index={i} />
      ))}

      {/* ── CTA Section ── */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--surface-container-low)',
          padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h2
              className="headline-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-8)',
              }}
            >
              Start with a conversation about your space.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-4)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <GradientButton href="/contact">
                Talk to Us About Your Venue
              </GradientButton>
              <GhostButton href="/experiences">
                See Our Debut Experience
              </GhostButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
