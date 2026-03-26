'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { GradientButton } from '@/components/ui/GradientButton'

export function EmailCaptureSection() {
  return (
    <section style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}>
            Be the first to experience it.
          </h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-8)' }}>
            Early access to our October 2026 launch and behind-the-scenes updates.
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
              <GradientButton type="submit">Join the List</GradientButton>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
