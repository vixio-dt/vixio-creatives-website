'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GhostButton } from '@/components/ui/GhostButton'

export function FollowTheBuild() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-4)' }}
          >
            Follow the Build
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="headline-lg"
            style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}
          >
            We share our design process publicly.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="body-lg"
            style={{
              color: 'var(--on-surface-variant)',
              marginBottom: 'var(--spacing-8)',
              maxWidth: '50ch',
              margin: '0 auto var(--spacing-8)',
            }}
          >
            Debut cooperative game experience in production, Shenzhen 2026.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <GhostButton href="/journal">Follow the Process</GhostButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
