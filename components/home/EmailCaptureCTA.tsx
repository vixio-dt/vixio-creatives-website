'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function EmailCaptureCTA() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section style={{ padding: 'var(--spacing-20) var(--spacing-6)' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 'var(--spacing-4)',
          alignItems: 'stretch',
        }}
        className="cta-grid"
      >
        {/* Left — open for commissions */}
        <ScrollReveal>
          <div
            style={{
              background: 'var(--ink)',
              color: '#F2F0EC',
              padding: 'var(--spacing-12)',
              borderRadius: 'var(--radius-xl)',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'var(--spacing-6)',
            }}
          >
            <span
              className="mono-tag"
              style={{ color: 'rgba(242, 240, 236, 0.6)' }}
            >
              {'// open for commissions'}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Build something with us.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.55,
                  color: 'rgba(242, 240, 236, 0.7)',
                  maxWidth: '50ch',
                  margin: 0,
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Galleries, museums, brands, festivals, cultural venues — bring us a problem.
              </p>
              <a
                href="mailto:hello@vixiocreatives.com"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#F2F0EC',
                  textDecoration: 'none',
                  borderBottom: '1.5px solid var(--primary)',
                  paddingBottom: '4px',
                }}
              >
                hello@vixiocreatives.com →
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — newsletter */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              background: 'var(--vixio-gradient)',
              color: '#FFFFFF',
              padding: 'var(--spacing-8)',
              borderRadius: 'var(--radius-xl)',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'var(--spacing-4)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              {'// dispatch'}
            </span>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                  margin: 0,
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Field notes from the studio.
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  lineHeight: 1.55,
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: 0,
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Early access to our launch and behind-the-scenes updates.
              </p>

              {status === 'success' ? (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  You&apos;re on the list. We&apos;ll be in touch.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="cta-email"
                    style={{ position: 'absolute', left: '-9999px' }}
                  >
                    Email
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    placeholder="email"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid rgba(255, 255, 255, 0.7)',
                      outline: 'none',
                      padding: '0.75rem 0',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: '#FFFFFF',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  />
                  <GradientButton type="submit">
                    {status === 'loading' ? 'Joining...' : 'Join the list'}
                  </GradientButton>
                  {status === 'error' && (
                    <p
                      role="alert"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        color: '#FFE0E0',
                        marginTop: 'var(--spacing-2)',
                      }}
                    >
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </section>
  )
}
