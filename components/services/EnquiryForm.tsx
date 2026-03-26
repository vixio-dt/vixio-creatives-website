'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { GradientButton } from '@/components/ui/GradientButton'

export function EnquiryForm() {
  return (
    <section style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <ScrollReveal>
          <h2 className="headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}>
            Tell us about your project.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            action="mailto:hello@vixiocreatives.com"
            method="post"
            encType="text/plain"
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
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <GradientButton type="submit">Start the Conversation</GradientButton>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
