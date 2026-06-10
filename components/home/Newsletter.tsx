'use client'

import { useState, useId } from 'react'
import { copy } from '@/lib/copy'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [contact, setContact] = useState('')
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const inputId = useId()
  const errorId = useId()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('pending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'buyer', contact }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="newsletter"
      style={{
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
        scrollMarginTop: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {/* h2 heading */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: 'var(--text)',
            marginBottom: '0.75rem',
          }}
        >
          {copy.newsletter.heading}
        </h2>

        {/* Body line */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
          }}
        >
          {copy.newsletter.body}
        </p>

        {/* Success state: live region */}
        {status === 'success' ? (
          <p
            role="status"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--text)',
              lineHeight: 1.6,
            }}
          >
            {copy.newsletter.success}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            aria-busy={status === 'pending' ? true : undefined}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div>
              {/* Label above input */}
              <label
                htmlFor={inputId}
                className="vx-label"
              >
                {copy.newsletter.emailLabel}
              </label>
              <input
                id={inputId}
                type="email"
                required
                autoComplete="email"
                placeholder={copy.newsletter.emailPlaceholder}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="vx-input"
                aria-describedby={status === 'error' ? errorId : undefined}
              />
              {/* Error state: alert live region */}
              {status === 'error' && (
                <p
                  id={errorId}
                  role="alert"
                  className="vx-error"
                  style={{ marginTop: '0.5rem' }}
                >
                  {copy.newsletter.error}
                </p>
              )}
            </div>

            <div>
              <Button
                variant="primary"
                type="submit"
                disabled={status === 'pending'}
              >
                {status === 'pending' ? copy.newsletter.submitting : copy.newsletter.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
