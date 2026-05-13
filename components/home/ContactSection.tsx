'use client'

import { useState } from 'react'
import { TextInput, Textarea } from '@mantine/core'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

const inputStyles = {
  input: {
    backgroundColor: 'var(--ink-surface-subtle)',
    borderColor: 'var(--ink-border)',
    color: 'var(--on-ink)',
    borderRadius: 'var(--radius-lg)',
    '--input-bd-focus': 'var(--primary)',
  },
  label: {
    color: 'var(--on-ink-medium)',
    marginBottom: 'var(--spacing-1)',
  },
}

export function ContactSection() {
  const [buyerForm, setBuyerForm] = useState({
    contact: '',
  })

  const [creatorForm, setCreatorForm] = useState({
    name: '',
    portfolio: '',
    idea: '',
    contact: '',
  })

  const [buyerSubmitted, setBuyerSubmitted] = useState(false)
  const [creatorSubmitted, setCreatorSubmitted] = useState(false)
  const [buyerLoading, setBuyerLoading] = useState(false)
  const [creatorLoading, setCreatorLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleBuyerSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBuyerLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'buyer', ...buyerForm }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setBuyerSubmitted(true)
      setBuyerForm({ contact: '' })
    } catch {
      setError('Something went wrong. Please email us directly.')
    } finally {
      setBuyerLoading(false)
    }
  }

  async function handleCreatorSubmit(e: React.FormEvent) {
    e.preventDefault()
    setCreatorLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'creator', ...creatorForm }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setCreatorSubmitted(true)
      setCreatorForm({ name: '', portfolio: '', idea: '', contact: '' })
    } catch {
      setError('Something went wrong. Please email us directly.')
    } finally {
      setCreatorLoading(false)
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-6)',
      }}
    >
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--primary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            Get Started
          </p>
          <h2
            className="display-md"
            style={{
              color: 'var(--on-ink)',
              marginBottom: 'var(--spacing-12)',
            }}
          >
            Two paths. Pick yours.
          </h2>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Buyers — compact, notify on launch */}
          <ScrollReveal delay={0.15}>
            <div>
              <p
                className="label-md"
                style={{
                  color: 'var(--primary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Join the First Drop List
              </p>
              <h3
                className="headline-lg"
                style={{
                  color: 'var(--on-ink)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Be first to know.
              </h3>
              <p
                className="body-md"
                style={{
                  color: 'var(--on-ink-medium)',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                Premium physical products and playable experiences, launching soon. Get notified.
              </p>

              {buyerSubmitted ? (
                <p className="headline-md" style={{ color: 'var(--primary)' }}>
                  You are on the list. We will reach out when something ships.
                </p>
              ) : (
                <form onSubmit={handleBuyerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                  <TextInput
                    label="Email"
                    placeholder="you@example.com"
                    type="email"
                    required
                    value={buyerForm.contact}
                    onChange={(e) => setBuyerForm((prev) => ({ ...prev, contact: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  {error && (
                    <p className="body-sm" style={{ color: '#ef4444' }}>{error}</p>
                  )}
                  <div style={{ marginTop: 'var(--spacing-2)' }}>
                    <GhostButton type="submit" disabled={buyerLoading}>
                      {buyerLoading ? 'Submitting...' : 'Notify Me'}
                    </GhostButton>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Creators — full card, collaboration inquiry */}
          <ScrollReveal delay={0.3}>
            <div
              style={{
                background: 'var(--ink-surface-raised)',
                padding: 'var(--spacing-8)',
                borderRadius: 'var(--radius-xl)',
                borderTop: '2px solid var(--tertiary)',
              }}
            >
              <p
                className="label-md"
                style={{
                  color: 'var(--tertiary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Start a Creator Collaboration
              </p>
              <h3
                className="headline-lg"
                style={{
                  color: 'var(--on-ink)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Start a collaboration.
              </h3>
              <p
                className="body-md"
                style={{
                  color: 'var(--on-ink-medium)',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                You bring the vision. We bring engineering, production, and GBA manufacturing.
              </p>

              {creatorSubmitted ? (
                <p className="headline-md" style={{ color: 'var(--tertiary)' }}>
                  Thanks. We will reach out to start the conversation.
                </p>
              ) : (
                <form onSubmit={handleCreatorSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                  <TextInput
                    label="Name"
                    required
                    value={creatorForm.name}
                    onChange={(e) => setCreatorForm((prev) => ({ ...prev, name: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <TextInput
                    label="Portfolio or social"
                    placeholder="Link to your work"
                    value={creatorForm.portfolio}
                    onChange={(e) => setCreatorForm((prev) => ({ ...prev, portfolio: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <Textarea
                    label="What do you want to make?"
                    autosize
                    minRows={3}
                    required
                    value={creatorForm.idea}
                    onChange={(e) => setCreatorForm((prev) => ({ ...prev, idea: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <TextInput
                    label="Contact"
                    placeholder="Email or social handle"
                    required
                    value={creatorForm.contact}
                    onChange={(e) => setCreatorForm((prev) => ({ ...prev, contact: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  {error && (
                    <p className="body-sm" style={{ color: '#ef4444' }}>{error}</p>
                  )}
                  <div style={{ marginTop: 'var(--spacing-2)' }}>
                    <GradientButton type="submit" disabled={creatorLoading}>
                      {creatorLoading ? 'Submitting...' : 'Start a Conversation'}
                    </GradientButton>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--spacing-4)',
              marginTop: 'var(--spacing-12)',
              paddingTop: 'var(--spacing-8)',
              borderTop: '1px solid var(--ink-border-subtle)',
            }}
          >
            <p
              className="body-sm"
              style={{ color: 'var(--on-ink-low)' }}
            >
              Vixio Creatives Limited, Hong Kong
            </p>
            <a
              href="mailto:hello@vixiocreatives.com"
              className="body-sm"
              style={{
                color: 'var(--primary)',
                textDecoration: 'none',
              }}
            >
              hello@vixiocreatives.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
