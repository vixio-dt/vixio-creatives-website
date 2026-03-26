'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { GradientButton } from '@/components/ui/GradientButton'

export function ExperiencesWaitlist() {
  return (
    <section
      style={{
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-16) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}>
            Be among the first to step inside.
          </h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-8)' }}>
            Our debut experience launches in Hong Kong, October 2026. Join the list for early access and priority booking.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            action="mailto:hello@vixiocreatives.com"
            method="post"
            encType="text/plain"
            style={{ textAlign: 'left' }}
          >
            <FloatingInput label="Email" name="email" type="email" required />
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-4)' }}>
              <GradientButton type="submit">Join the Waitlist</GradientButton>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
