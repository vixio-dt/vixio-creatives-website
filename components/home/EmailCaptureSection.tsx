'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { GradientButton } from '@/components/ui/GradientButton'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function EmailCaptureSection() {
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
    <section style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}>
            Be the first to step into our world.
          </h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-8)' }}>
            Early access to our October 2026 launch and behind-the-scenes updates.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {status === 'success' ? (
            <p className="body-md" style={{ color: 'var(--primary)' }}>
              You&apos;re on the list. We&apos;ll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
              <FloatingInput label="Email" name="email" type="email" required />
              <div style={{ textAlign: 'center', marginTop: 'var(--spacing-4)' }}>
                <GradientButton type="submit">
                  {status === 'loading' ? 'Joining...' : 'Join the List'}
                </GradientButton>
              </div>
              {status === 'error' && (
                <p
                  className="body-sm"
                  role="alert"
                  style={{ color: '#c44', textAlign: 'center', marginTop: 'var(--spacing-2)' }}
                >
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
