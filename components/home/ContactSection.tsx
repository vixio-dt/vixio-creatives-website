'use client'

import { useState } from 'react'
import { TextInput, Select, Textarea } from '@mantine/core'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'

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
  const [playerForm, setPlayerForm] = useState({
    groupSize: '',
    date: '',
    contact: '',
  })

  const [venueForm, setVenueForm] = useState({
    name: '',
    company: '',
    venueType: '',
    problem: '',
    contact: '',
  })

  const [playerSubmitted, setPlayerSubmitted] = useState(false)
  const [venueSubmitted, setVenueSubmitted] = useState(false)

  function handlePlayerSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPlayerSubmitted(true)
    setPlayerForm({ groupSize: '', date: '', contact: '' })
  }

  function handleVenueSubmit(e: React.FormEvent) {
    e.preventDefault()
    setVenueSubmitted(true)
    setVenueForm({ name: '', company: '', venueType: '', problem: '', contact: '' })
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
        @media (max-width: 768px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <h2
            className="display-md"
            style={{
              color: 'var(--on-ink)',
              textAlign: 'center',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            Two paths. Pick yours.
          </h2>
          <p
            className="body-lg"
            style={{
              color: 'var(--on-ink-medium)',
              textAlign: 'center',
              maxWidth: '50ch',
              margin: '0 auto',
              marginBottom: 'var(--spacing-12)',
            }}
          >
            Whether you want to play or bring game-designed experiences to your venue.
          </p>
        </ScrollReveal>

        <div
          className="contact-form-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-8)',
          }}
        >
          {/* Players form */}
          <ScrollReveal delay={0.15}>
            <div
              style={{
                background: 'var(--ink-surface-raised)',
                padding: 'var(--spacing-8)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--ink-border-subtle)',
              }}
            >
              <p
                className="label-md"
                style={{
                  color: 'var(--primary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Players
              </p>
              <h3
                className="headline-md"
                style={{
                  color: 'var(--on-ink)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Book a session.
              </h3>
              <p
                className="body-md"
                style={{
                  color: 'var(--on-ink-medium)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Cooperative game experience in Shenzhen. 4-6 players, 60-90 minutes.
              </p>

              {playerSubmitted ? (
                <p className="headline-md" style={{ color: 'var(--primary)' }}>
                  Thanks. We will be in touch about your session.
                </p>
              ) : (
                <form onSubmit={handlePlayerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                  <Select
                    label="Group size"
                    data={['4', '5', '6']}
                    placeholder="Select"
                    required
                    value={playerForm.groupSize}
                    onChange={(v) => setPlayerForm((prev) => ({ ...prev, groupSize: v || '' }))}
                    styles={inputStyles}
                  />
                  <TextInput
                    label="Preferred date"
                    type="date"
                    required
                    value={playerForm.date}
                    onChange={(e) => setPlayerForm((prev) => ({ ...prev, date: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <TextInput
                    label="Contact"
                    placeholder="Email or WeChat"
                    required
                    value={playerForm.contact}
                    onChange={(e) => setPlayerForm((prev) => ({ ...prev, contact: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <div style={{ marginTop: 'var(--spacing-2)' }}>
                    <GradientButton type="submit">Join the Waitlist</GradientButton>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Venue Operators form */}
          <ScrollReveal delay={0.3}>
            <div
              style={{
                background: 'var(--ink-surface-raised)',
                padding: 'var(--spacing-8)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--ink-border-subtle)',
              }}
            >
              <p
                className="label-md"
                style={{
                  color: 'var(--tertiary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Venue Operators
              </p>
              <h3
                className="headline-md"
                style={{
                  color: 'var(--on-ink)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Bring this to your venue.
              </h3>
              <p
                className="body-md"
                style={{
                  color: 'var(--on-ink-medium)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Tell us about your space and what you are trying to solve.
              </p>

              {venueSubmitted ? (
                <p className="headline-md" style={{ color: 'var(--tertiary)' }}>
                  Thanks. We will reach out to start the conversation.
                </p>
              ) : (
                <form onSubmit={handleVenueSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                  <TextInput
                    label="Name"
                    required
                    value={venueForm.name}
                    onChange={(e) => setVenueForm((prev) => ({ ...prev, name: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <TextInput
                    label="Company"
                    required
                    value={venueForm.company}
                    onChange={(e) => setVenueForm((prev) => ({ ...prev, company: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <Select
                    label="Venue type"
                    data={['Mall', 'Attraction', 'Corporate', 'Cultural', 'Other']}
                    required
                    value={venueForm.venueType}
                    onChange={(v) => setVenueForm((prev) => ({ ...prev, venueType: v || '' }))}
                    styles={inputStyles}
                  />
                  <Textarea
                    label="What are you trying to solve?"
                    autosize
                    minRows={3}
                    required
                    value={venueForm.problem}
                    onChange={(e) => setVenueForm((prev) => ({ ...prev, problem: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <TextInput
                    label="Contact"
                    placeholder="Email or WhatsApp"
                    required
                    value={venueForm.contact}
                    onChange={(e) => setVenueForm((prev) => ({ ...prev, contact: e.currentTarget.value }))}
                    styles={inputStyles}
                  />
                  <div style={{ marginTop: 'var(--spacing-2)' }}>
                    <GradientButton type="submit">Start a Conversation</GradientButton>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Company footer info */}
        <ScrollReveal delay={0.4}>
          <div
            style={{
              textAlign: 'center',
              marginTop: 'var(--spacing-12)',
            }}
          >
            <p
              className="headline-sm"
              style={{ color: 'var(--on-ink-low)' }}
            >
              Vixio Creatives Limited
            </p>
            <p
              className="body-sm"
              style={{
                color: 'var(--on-ink-muted)',
                marginTop: 'var(--spacing-1)',
              }}
            >
              Hong Kong
            </p>
            <a
              href="mailto:hello@vixiocreatives.com"
              className="body-sm"
              style={{
                color: 'var(--primary)',
                textDecoration: 'none',
                marginTop: 'var(--spacing-2)',
                display: 'inline-block',
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
