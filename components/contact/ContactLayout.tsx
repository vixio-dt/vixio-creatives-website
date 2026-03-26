import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { EnquiryForm } from '@/components/services/EnquiryForm'

const contactPaths = [
  {
    label: 'Start a Project',
    value: 'hello@vixiocreatives.com',
    href: 'mailto:hello@vixiocreatives.com',
  },
  {
    label: 'Join Our Team',
    value: 'careers@vixiocreatives.com',
    href: 'mailto:careers@vixiocreatives.com',
  },
  {
    label: 'General',
    value: '+852 6337 2258',
    href: 'tel:+85263372258',
  },
]

export function ContactLayout() {
  return (
    <>
      <section style={{ padding: 'var(--spacing-20) var(--spacing-6) var(--spacing-16)' }}>
        <div
          style={{ maxWidth: '1100px', margin: '0 auto' }}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Left — Contact Info */}
          <div>
            <ScrollReveal>
              <h1
                className="display-md"
                style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)' }}
              >
                Let&apos;s build something.
              </h1>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              {contactPaths.map((path, i) => (
                <ScrollReveal key={path.label} delay={i * 0.1}>
                  <div>
                    <h3 className="title-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-1)' }}>
                      {path.label}
                    </h3>
                    <a
                      href={path.href}
                      className="body-md"
                      style={{
                        color: 'var(--primary)',
                        textDecoration: 'none',
                      }}
                    >
                      {path.value}
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div
        style={{
          textAlign: 'center',
          padding: 'var(--spacing-8) var(--spacing-6)',
        }}
      >
        <p className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>
          Hong Kong · vixiocreatives.com
        </p>
      </div>
    </>
  )
}
