import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export const metadata: Metadata = {
  title: 'About | Vixio Creatives',
  description:
    'Vixio Creatives is a venue gamification studio founded by Denis Tam in Hong Kong. Game-designed experiences for physical spaces. Stories Across Worlds.',
  openGraph: {
    title: 'About | Vixio Creatives',
    description:
      'Vixio Creatives is a venue gamification studio founded by Denis Tam in Hong Kong. Game-designed experiences for physical spaces.',
  },
}

const mechanics = [
  {
    name: 'Information Asymmetry',
    description:
      "Each player knows something others don't. Sharing is required.",
  },
  {
    name: 'Role Division',
    description: 'Unique capabilities per player. No one is redundant.',
  },
  {
    name: 'Communication Constraints',
    description:
      "Players can't simply share screens. Communication becomes the game.",
  },
  {
    name: 'Physical Coordination',
    description:
      'Your body matters. Movement, positioning, physical interaction.',
  },
  {
    name: 'Shared-Stake Decisions',
    description:
      'Real dilemmas, not right answers. The group decides together.',
  },
  {
    name: 'Time Pressure',
    description: 'Forces action over endless discussion.',
  },
]

const sectionPadding = 'clamp(4rem, 10vw, 8rem) var(--spacing-6)'

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Header ── */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--surface)',
          padding: `clamp(6rem, 14vw, 10rem) var(--spacing-6) ${sectionPadding.split(' ')[0]}`,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <h1
              className="display-md"
              style={{ color: 'var(--on-surface)', maxWidth: '18ch' }}
            >
              A studio that builds games for real spaces.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. The Studio ── */}
      <section style={{ background: 'var(--surface)', padding: sectionPadding }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ScrollReveal>
            <p
              className="label-md"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              The Studio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-6)',
              }}
            >
              Vixio Creatives is a venue gamification studio based in Hong Kong,
              with a production workshop in Shenzhen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-6)',
              }}
            >
              We design cooperative game experiences for physical venues: malls,
              attractions, corporate spaces, cultural sites. The studio sits at
              the intersection of game design and cinematic direction, a position
              no one else occupies.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p
              className="body-lg"
              style={{ color: 'var(--on-surface-variant)' }}
            >
              Denis Tam founded Vixio as a creative studio, not an agency. We
              build experiences first, sell services second. The work proves the
              method.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. The Director ── */}
      <section
        style={{
          background: 'var(--surface-container-low)',
          padding: sectionPadding,
        }}
      >
        <div
          style={{ maxWidth: '900px', margin: '0 auto' }}
          className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
        >
          {/* Photo placeholder */}
          <ScrollReveal>
            <div
              style={{
                width: '220px',
                height: '280px',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                className="display-md"
                style={{
                  color: 'rgba(255, 255, 255, 0.12)',
                  userSelect: 'none',
                }}
              >
                DT
              </span>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div>
            <ScrollReveal delay={0.1}>
              <p
                className="label-md"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                The Director
              </p>
              <h2
                className="headline-lg"
                style={{
                  color: 'var(--on-surface)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Denis Tam, Founder and Creative Director
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Producer and creative director. Background in transmedia
                storytelling, experience design, and creative production. Builds
                things people play together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Denis's role: taste (identify what's broken in an experience),
                vision (what it should feel like), assembly (find and direct the
                right people to build it).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p
                className="body-lg"
                style={{ color: 'var(--on-surface-variant)' }}
              >
                The studio runs lean. Denis directs; specialists execute. Game
                designers, sound designers, fabricators, and technologists are
                brought in per-project. High creative quality without agency
                overhead.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4. Cooperative Mechanics ── */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--ink)',
          padding: sectionPadding,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <p
              className="label-md"
              style={{
                color: 'var(--primary)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              The Approach
            </p>
            <h2
              className="headline-lg"
              style={{
                color: '#F2F0EC',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              How we think about experience design.
            </h2>
            <p
              className="body-lg"
              style={{
                color: 'rgba(242, 240, 236, 0.7)',
                marginBottom: 'var(--spacing-12)',
              }}
            >
              Six cooperative mechanics drive every project:
            </p>
          </ScrollReveal>

          {/* Mechanics grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
            }}
          >
            {mechanics.map((mechanic, i) => (
              <ScrollReveal key={mechanic.name} delay={0.08 * (i + 1)}>
                <div
                  style={{
                    padding: 'var(--spacing-6)',
                    background:
                      i % 2 === 0
                        ? 'rgba(255, 255, 255, 0.03)'
                        : 'rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <MechanicRow
                    name={mechanic.name}
                    description={mechanic.description}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <p
              className="body-md"
              style={{
                color: 'rgba(242, 240, 236, 0.6)',
                marginTop: 'var(--spacing-12)',
                maxWidth: '65ch',
              }}
            >
              These mechanics are mapped to business KPIs for venue clients:
              footfall, dwell time, repeat visits, zone distribution, tenant
              sales correlation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. Building in Public ── */}
      <section style={{ background: 'var(--surface)', padding: sectionPadding }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ScrollReveal>
            <p
              className="label-md"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              Building in Public
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-6)',
              }}
            >
              Debut cooperative game experience in production. Shenzhen, 2026.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="headline-md"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-6)',
              }}
            >
              4-6 players. 60-90 minutes. A story you play together.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p
              className="body-lg"
              style={{ color: 'var(--on-surface-variant)' }}
            >
              We share the design process publicly. Not because transparency is
              trendy. Because the work is more interesting than the pitch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section
        className="grain-overlay"
        style={{
          background: 'var(--surface-container-low)',
          padding: sectionPadding,
        }}
      >
        <div
          style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
        >
          <ScrollReveal>
            <h2
              className="headline-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-8)',
              }}
            >
              See it for yourself. Or bring it to your venue.
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
              <GradientButton href="/experiences">
                See the Experience
              </GradientButton>
              <GhostButton href="/contact">Work With Vixio</GhostButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

/* ── Mechanic row sub-component ── */

function MechanicRow({
  name,
  description,
}: {
  name: string
  description: string
}) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
    >
      <p
        className="headline-sm"
        style={{
          color: '#F2F0EC',
          minWidth: '14rem',
          flexShrink: 0,
        }}
      >
        {name}
      </p>
      <p className="body-md" style={{ color: 'rgba(242, 240, 236, 0.7)' }}>
        {description}
      </p>
    </div>
  )
}
