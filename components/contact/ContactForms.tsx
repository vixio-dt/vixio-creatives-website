'use client'

import { useState, useId } from 'react'
import { copy } from '@/lib/copy'
import { Button } from '@/components/ui/Button'

type FieldErrors = {
  name?: string
  contact?: string
  idea?: string
}

export function ContactForms() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [idea, setIdea] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')

  const nameId = useId()
  const contactId = useId()
  const portfolioId = useId()
  const ideaId = useId()
  const nameErrorId = useId()
  const contactErrorId = useId()
  const ideaErrorId = useId()
  const serverErrorId = useId()

  function validate(): FieldErrors {
    const errors: FieldErrors = {}
    if (!name.trim()) errors.name = copy.contact.form.requiredError
    if (!contact.trim()) {
      errors.contact = copy.contact.form.requiredError
    } else if (!/\S+@\S+\.\S+/.test(contact)) {
      errors.contact = copy.contact.form.emailInvalidError
    }
    if (!idea.trim()) errors.idea = copy.contact.form.requiredError
    return errors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setStatus('pending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'creator',
          name,
          portfolio: portfolio.trim() || '',
          idea,
          contact,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
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
        {copy.contact.form.success}
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === 'pending' ? true : undefined}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      {/* Name */}
      <div>
        <label htmlFor={nameId} className="vx-label">
          {copy.contact.form.nameLabel}
        </label>
        <input
          id={nameId}
          type="text"
          autoComplete="name"
          className="vx-input"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }))
          }}
          aria-describedby={fieldErrors.name ? nameErrorId : undefined}
        />
        {fieldErrors.name && (
          <p id={nameErrorId} className="vx-error" role="alert">
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor={contactId} className="vx-label">
          {copy.contact.form.emailLabel}
        </label>
        <input
          id={contactId}
          type="email"
          autoComplete="email"
          placeholder={copy.contact.form.emailPlaceholder}
          className="vx-input"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value)
            if (fieldErrors.contact) setFieldErrors((prev) => ({ ...prev, contact: undefined }))
          }}
          aria-describedby={fieldErrors.contact ? contactErrorId : undefined}
        />
        {fieldErrors.contact && (
          <p id={contactErrorId} className="vx-error" role="alert">
            {fieldErrors.contact}
          </p>
        )}
      </div>

      {/* Portfolio (optional) */}
      <div>
        <label htmlFor={portfolioId} className="vx-label">
          {copy.contact.form.portfolioLabel}{' '}
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>
            {copy.contact.form.portfolioOptional}
          </span>
        </label>
        <input
          id={portfolioId}
          type="url"
          autoComplete="url"
          className="vx-input"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
        />
      </div>

      {/* Idea (textarea) */}
      <div>
        <label htmlFor={ideaId} className="vx-label">
          {copy.contact.form.ideaLabel}
        </label>
        <textarea
          id={ideaId}
          className="vx-input"
          rows={4}
          value={idea}
          onChange={(e) => {
            setIdea(e.target.value)
            if (fieldErrors.idea) setFieldErrors((prev) => ({ ...prev, idea: undefined }))
          }}
          aria-describedby={fieldErrors.idea ? ideaErrorId : undefined}
        />
        {fieldErrors.idea && (
          <p id={ideaErrorId} className="vx-error" role="alert">
            {fieldErrors.idea}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === 'error' && (
        <p id={serverErrorId} role="alert" className="vx-error">
          {copy.contact.form.error}
        </p>
      )}

      <div>
        <Button variant="primary" type="submit" disabled={status === 'pending'}>
          {status === 'pending' ? copy.contact.form.submitting : copy.contact.form.submit}
        </Button>
      </div>
    </form>
  )
}
