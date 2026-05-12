'use client'

import { useState } from 'react'
import { TextInput, Select, Textarea } from '@mantine/core'
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
          {/* Players — compact, no card */}
          <ScrollReveal delay={0.15}>
            <div>
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
                className="headline-lg"
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
                  marginBottom: 'var(--spacing-8)',
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
                    <GhostButton type="submit">Join the Waitlist</GhostButton>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Venue Operators — full card, larger */}
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
                Venue Operators
              </p>
              <h3
                className="headline-lg"
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
                  marginBottom: 'var(--spacing-8)',
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
