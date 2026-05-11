import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactForms } from '@/components/contact/ContactForms'

export const metadata: Metadata = {
  title: 'Contact | Vixio Creatives',
  description:
    'Book a cooperative game session or bring game-designed experiences to your venue. Two paths: players and venue operators.',
  openGraph: {
    title: 'Contact | Vixio Creatives',
    description:
      'Book a session or bring game-designed experiences to your venue.',
  },
}

export default function ContactPage() {
  return (
    <>
      <section
        style={{
          padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
          background: 'var(--surface)',
          textAlign: 'center',
          paddingBottom: 'var(--spacing-12)',
        }}
      >
        <ScrollReveal>
          <h1 className="display-md" style={{ color: 'var(--on-surface)' }}>
            Two paths. Pick yours.
          </h1>
        </ScrollReveal>
      </section>

      <section
        style={{
          padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
          paddingTop: 0,
        }}
      >
        <ContactForms />
      </section>

      <section
        style={{
          background: 'var(--surface-container-low)',
          padding: 'var(--spacing-12) var(--spacing-6)',
          textAlign: 'center',
        }}
      >
        <ScrollReveal>
          <p className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}>
            Vixio Creatives Limited
          </p>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-2)' }}>
            Hong Kong
          </p>
          <a
            href="mailto:hello@vixiocreatives.com"
            className="body-md"
            style={{ color: 'var(--primary)', textDecoration: 'none' }}
          >
            hello@vixiocreatives.com
          </a>
        </ScrollReveal>
      </section>
    </>
  )
}
