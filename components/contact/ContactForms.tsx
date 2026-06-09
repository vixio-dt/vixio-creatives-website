'use client'

import { useState } from 'react'

// Creator form: POST { type:'creator', name, portfolio, idea, contact }
function CreatorForm() {
  const [form, setForm] = useState({ name: '', portfolio: '', idea: '', contact: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'creator', ...form }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      setForm({ name: '', portfolio: '', idea: '', contact: '' })
    } catch {
      setError('Something went wrong. Please write to hello@vixiocreatives.com directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--accent)',
          lineHeight: 1.6,
        }}
      >
        Received. We reply within a few days.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <label htmlFor="creator-name" className="vx-label">Name</label>
        <input
          id="creator-name"
          className="vx-input"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="creator-contact" className="vx-label">Email</label>
        <input
          id="creator-contact"
          className="vx-input"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={form.contact}
          onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="creator-portfolio" className="vx-label">
          Company or link{' '}
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          id="creator-portfolio"
          className="vx-input"
          type="text"
          autoComplete="url"
          placeholder="Link to your work"
          value={form.portfolio}
          onChange={(e) => setForm((p) => ({ ...p, portfolio: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="creator-idea" className="vx-label">What are you working on?</label>
        <textarea
          id="creator-idea"
          className="vx-input"
          required
          rows={4}
          value={form.idea}
          onChange={(e) => setForm((p) => ({ ...p, idea: e.target.value }))}
        />
      </div>

      {error && <p className="vx-error">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="gradient-btn"
        style={{
          background: 'var(--accent)',
          color: 'var(--surface)',
          border: 'none',
          borderRadius: 'var(--radius-interactive)',
          padding: '0.75rem 1.75rem',
          fontFamily: 'var(--font-display)',
          fontSize: '0.9375rem',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
          minHeight: '44px',
          alignSelf: 'flex-start',
          whiteSpace: 'nowrap',
          transition: 'transform 200ms, box-shadow 200ms',
        }}
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}

// Follow / buyer form: POST { type:'buyer', contact: <email> }
function FollowForm() {
  const [contact, setContact] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'buyer', contact }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      setContact('')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          fontWeight: 700,
          letterSpacing: '-0.015em',
          color: 'var(--text)',
          marginBottom: '0.75rem',
        }}
      >
        Follow the build.
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          marginBottom: '1.75rem',
        }}
      >
        New work and release notes, by email. No noise.
      </p>

      {submitted ? (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--accent)',
          }}
        >
          You are on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="follow-email" className="vx-label">Email</label>
            <input
              id="follow-email"
              className="vx-input"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          {error && <p className="vx-error">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="gradient-btn"
            style={{
              background: 'var(--accent)',
              color: 'var(--surface)',
              border: 'none',
              borderRadius: 'var(--radius-interactive)',
              padding: '0.75rem 1.75rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              minHeight: '44px',
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
              transition: 'transform 200ms, box-shadow 200ms',
            }}
          >
            {loading ? 'Sending...' : 'Follow'}
          </button>
        </form>
      )}
    </div>
  )
}

export function ContactForms() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
      }}
    >
      <div className="contact-grid">
        {/* Left: industry conversation form */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--text)',
              marginBottom: '2rem',
            }}
          >
            Industry conversation
          </h2>
          <CreatorForm />
        </div>

        {/* Right: follow block */}
        <div
          style={{
            background: 'var(--surface-raised)',
            borderRadius: 'var(--radius-container)',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            border: '1px solid var(--line)',
          }}
        >
          <FollowForm />
        </div>
      </div>

      <style>{`
        .contact-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
