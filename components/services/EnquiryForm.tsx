'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { GradientButton } from '@/components/ui/GradientButton'

export function EnquiryForm() {
  return (
    <section style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <ScrollReveal>
          <div
            aria-hidden="true"
            style={{
              width: '2rem',
              height: '2px',
              background: 'var(--vixio-gradient)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--spacing-4)',
            }}
          />
          <h2
            className="headline-sm"
            style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
          >
            Tell us about your project.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            action="mailto:hello@vixiocreatives.com"
            method="post"
            encType="text/plain"
            style={{
              background: 'var(--surface-container-low)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-8)',
              border: '1px solid rgba(200, 196, 191, 0.25)',
            }}
          >
            <FloatingInput label="Name" name="name" type="text" required />
            <FloatingInput label="Email" name="email" type="email" required />
            <FloatingInput
              label="Project Type"
              name="project-type"
              type="select"
              options={['Mall Activation', 'Brand Experience', 'Art Installation', 'Other']}
            />
            <FloatingInput label="Brief Description" name="description" type="textarea" />
            <div style={{ marginTop: 'var(--spacing-6)' }}>
              <GradientButton type="submit">Start the Conversation</GradientButton>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
