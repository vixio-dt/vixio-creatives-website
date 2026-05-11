'use client'

import { useState, type FormEvent } from 'react'
import { TextInput, Select, Textarea } from '@mantine/core'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'

const cardStyle: React.CSSProperties = {
  background: 'var(--surface-container-low)',
  borderRadius: 'var(--radius-xl)',
  padding: 'var(--spacing-8)',
  border: '1px solid rgba(200, 196, 191, 0.25)',
}

const inputStyles = {
  input: {
    borderColor: 'var(--outline-variant)',
    borderRadius: 'var(--radius-lg)',
    '--input-bd-focus': 'var(--primary)',
  } as React.CSSProperties,
}

export function ContactForms() {
  const [playerGroupSize, setPlayerGroupSize] = useState<string | null>(null)
  const [playerDate, setPlayerDate] = useState('')
  const [playerContact, setPlayerContact] = useState('')

  const [venueName, setVenueName] = useState('')
  const [venueCompany, setVenueCompany] = useState('')
  const [venueType, setVenueType] = useState<string | null>(null)
  const [venueBudget, setVenueBudget] = useState<string | null>(null)
  const [venueProblem, setVenueProblem] = useState('')
  const [venueContact, setVenueContact] = useState('')

  function handlePlayerSubmit(e: FormEvent) {
    e.preventDefault()
    console.log('Players form:', { playerGroupSize, playerDate, playerContact })
    alert('Thanks! You have been added to the waitlist.')
  }

  function handleVenueSubmit(e: FormEvent) {
    e.preventDefault()
    console.log('Venue form:', { venueName, venueCompany, venueType, venueBudget, venueProblem, venueContact })
    alert('Thanks! We will be in touch shortly.')
  }

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
        gap: 'var(--spacing-8)',
      }}
    >
      <ScrollReveal>
        <div style={cardStyle}>
          <p className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-4)' }}>
            Players
          </p>
          <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
            Book a session.
          </h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-8)' }}>
            Cooperative game experience in Shenzhen. 4-6 players, 60-90 minutes.
            Book as a group or join an open session.
          </p>

          <form onSubmit={handlePlayerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Select
              label="Group size"
              placeholder="Select"
              data={['4', '5', '6']}
              value={playerGroupSize}
              onChange={setPlayerGroupSize}
              styles={inputStyles}
            />
            <TextInput
              label="Preferred date"
              type="date"
              value={playerDate}
              onChange={(e) => setPlayerDate(e.currentTarget.value)}
              styles={inputStyles}
            />
            <TextInput
              label="Contact"
              placeholder="Email or WeChat"
              value={playerContact}
              onChange={(e) => setPlayerContact(e.currentTarget.value)}
              styles={inputStyles}
            />
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <GradientButton type="submit">Join the Waitlist</GradientButton>
            </div>
          </form>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div style={cardStyle}>
          <p className="label-md" style={{ color: 'var(--tertiary)', marginBottom: 'var(--spacing-4)' }}>
            Venue Operators
          </p>
          <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
            Bring game-designed experiences to your venue.
          </h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-4)' }}>
            Mall operators, property groups, attraction venues, corporate event teams.
            Tell us about your space and what you are trying to solve.
            We will tell you how game mechanics can help.
          </p>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-8)' }}>
            Five services available: Venue Gamification, Experience Design, Format Design,
            Corporate Experiences, Creative Direction.
          </p>

          <form onSubmit={handleVenueSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <TextInput
              label="Name"
              value={venueName}
              onChange={(e) => setVenueName(e.currentTarget.value)}
              styles={inputStyles}
            />
            <TextInput
              label="Company"
              value={venueCompany}
              onChange={(e) => setVenueCompany(e.currentTarget.value)}
              styles={inputStyles}
            />
            <Select
              label="Venue type"
              placeholder="Select"
              data={['Mall', 'Attraction', 'Corporate', 'Cultural', 'Other']}
              value={venueType}
              onChange={setVenueType}
              styles={inputStyles}
            />
            <Select
              label="Budget range"
              placeholder="Select"
              data={['Under HK$500K', 'HK$500K-2M', 'HK$2M+', 'Not sure yet']}
              value={venueBudget}
              onChange={setVenueBudget}
              styles={inputStyles}
            />
            <Textarea
              label="What are you trying to solve?"
              autosize
              minRows={3}
              value={venueProblem}
              onChange={(e) => setVenueProblem(e.currentTarget.value)}
              styles={inputStyles}
            />
            <TextInput
              label="Contact"
              placeholder="Email or WhatsApp"
              value={venueContact}
              onChange={(e) => setVenueContact(e.currentTarget.value)}
              styles={inputStyles}
            />
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <GradientButton type="submit">Start a Conversation</GradientButton>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  )
}
