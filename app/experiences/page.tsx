import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export const metadata: Metadata = {
  title: 'Experiences | Vixio Creatives',
  description:
    'Cooperative game experiences by Vixio Creatives. 4-6 players, 60-90 minutes. Play together in Shenzhen. Book a session.',
}

const sectionPadding = 'clamp(4rem, 10vw, 8rem)'

const comparisonRows = [
  {
    is: 'A cooperative game with narrative and consequence',
    isnt: 'A scavenger hunt with an iPad',
  },
  {
    is: '4-6 players who each hold a piece of the story',
    isnt: 'One person solving while others watch',
  },
  {
    is: 'Physical, spatial, social',
    isnt: 'Screens, apps, VR headsets',
  },
  {
    is: 'Designed to be replayed with different roles',
    isnt: 'A one-and-done photo op',
  },
  {
    is: '60-90 minutes of active engagement',
    isnt: '15 minutes of content stretched with walking',
  },
]

export default function ExperiencesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        style={{
          padding: `clamp(8rem, 16vw, 12rem) var(--spacing-6) ${sectionPadding}`,
          background: 'var(--surface)',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Experiences</SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="display-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-6)',
              }}
            >
              Play it.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface-variant)',
                maxWidth: '600px',
              }}
            >
              Cooperative game experiences designed by Vixio Creatives. Not an
              escape room. Not a walking tour. A game where every player
              matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── The Debut Experience ─── */}
      <section
        style={{
          padding: `${sectionPadding} var(--spacing-6)`,
          background: 'var(--surface)',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Shenzhen, 2026</SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p
              className="body-lg"
              style={{
                color: 'var(--on-surface)',
                fontWeight: 500,
                marginBottom: 'var(--spacing-6)',
              }}
            >
              4-6 players. 60-90 minutes. One story. Your group is the cast.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p
              className="body-md"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              Each player receives different information, different tools,
              different constraints. You communicate under pressure, make
              shared-stake decisions, and navigate a space designed to be
              played.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="body-md"
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: 'var(--spacing-8)',
              }}
            >
              The experience uses all six cooperative mechanics: asymmetric
              information, divided roles, communication limits, physical
              coordination, group dilemmas, and time pressure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p
              className="headline-md"
              style={{ color: 'var(--primary)' }}
            >
              You will not solve this alone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── What to Expect ─── */}
      <section
        style={{
          padding: `${sectionPadding} var(--spacing-6)`,
          background: 'var(--surface-container-low)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2
              className="headline-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-12)',
                textAlign: 'center',
              }}
            >
              What to expect
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--spacing-8)',
            }}
            className="expect-grid"
          >
            {[
              {
                label: 'Before',
                body: 'Book as a group of 4-6. Arrive at the venue. Brief introduction (5 minutes). No special skills required. No phones needed during play.',
              },
              {
                label: 'During',
                body: '60-90 minutes of active play. Physical movement through the space. Puzzles that require cooperation, not individual genius. Moments where your specific role makes the difference.',
              },
              {
                label: 'After',
                body: 'Debrief and discussion. See how your group performed. Compare decisions. Replay value: different roles produce different experiences.',
              },
            ].map((col, i) => (
              <ScrollReveal key={col.label} delay={i * 0.1}>
                <div>
                  <p
                    className="label-md"
                    style={{
                      color: 'var(--primary)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    {col.label}
                  </p>
                  <p
                    className="body-md"
                    style={{ color: 'var(--on-surface-variant)' }}
                  >
                    {col.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Inline responsive override for the 3-column grid */}
        <style>{`
          @media (max-width: 768px) {
            .expect-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            .comparison-grid {
              grid-template-columns: 1fr !important;
              gap: var(--spacing-2) !important;
            }
          }
        `}</style>
      </section>

      {/* ─── What This Is / What This Isn't ─── */}
      <section
        style={{
          padding: `${sectionPadding} var(--spacing-6)`,
          background: 'var(--ink)',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2
              className="headline-lg"
              style={{
                color: 'var(--on-ink)',
                marginBottom: 'var(--spacing-12)',
                textAlign: 'center',
              }}
            >
              What this is. What this isn&apos;t.
            </h2>
          </ScrollReveal>

          {/* Column headers */}
          <div
            className="comparison-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-6)',
              paddingBottom: 'var(--spacing-4)',
              borderBottom: '1px solid var(--ink-border)',
            }}
          >
            <p
              className="label-md"
              style={{ color: 'var(--primary)' }}
            >
              What it is
            </p>
            <p
              className="label-md"
              style={{ color: 'var(--on-ink-muted)' }}
            >
              What it isn&apos;t
            </p>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div
                className="comparison-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-6)',
                  padding: 'var(--spacing-4) 0',
                  borderBottom:
                    i < comparisonRows.length - 1
                      ? '1px solid var(--ink-border-subtle)'
                      : 'none',
                }}
              >
                <p
                  className="body-md"
                  style={{ color: 'var(--on-ink)' }}
                >
                  {row.is}
                </p>
                <p
                  className="body-md"
                  style={{
                    color: 'var(--on-ink-muted)',
                    textDecoration: 'line-through',
                    textDecorationColor: 'var(--on-ink-muted)',
                  }}
                >
                  {row.isnt}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          padding: `${sectionPadding} var(--spacing-6)`,
          background: 'var(--surface)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2
              className="headline-lg"
              style={{
                color: 'var(--on-surface)',
                marginBottom: 'var(--spacing-8)',
              }}
            >
              Gather your group.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--spacing-4)',
                justifyContent: 'center',
              }}
            >
              <GradientButton href="/contact">Join the Waitlist</GradientButton>
              <GhostButton href="/contact">Bring This to Your Venue</GhostButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
