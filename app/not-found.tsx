import { copy } from '@/lib/copy'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: copy.meta.notFound.title,
}

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'calc(64px + 4rem) 1.5rem 4rem',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div style={{ maxWidth: '480px', textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}
        >
          {copy.notFound.heading}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
          }}
        >
          {copy.notFound.body}
        </p>
        <Button href="/" variant="secondary">
          {copy.notFound.link}
        </Button>
      </div>
    </section>
  )
}
