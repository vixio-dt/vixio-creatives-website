import type { Metadata } from 'next'
import { copy } from '@/lib/copy'
import { ContactForms } from '@/components/contact/ContactForms'

export const metadata: Metadata = {
  title: copy.meta.contact.title,
  description: copy.meta.contact.description,
}

export default function ContactPage() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'calc(64px + clamp(3rem, 6vw, 5rem)) 1.5rem clamp(4rem, 10vw, 8rem)',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {/* Lead */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          {copy.contact.heading}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {copy.contact.intro}
        </p>

        {/* Industry form */}
        <ContactForms />

        {/* Direct line */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--line)',
            paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {copy.contact.directPrefix}{' '}
          <a
            href={`mailto:${copy.contact.directEmail}`}
            style={{
              color: 'var(--accent)',
              textDecoration: 'underline',
            }}
          >
            {copy.contact.directEmail}
          </a>
        </p>
      </div>
    </section>
  )
}
