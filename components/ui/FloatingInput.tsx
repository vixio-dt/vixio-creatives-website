'use client'

import { useId, useState } from 'react'

interface FloatingInputProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'textarea' | 'select'
  options?: string[]
  required?: boolean
}

export function FloatingInput({ label, name, type = 'text', options, required }: FloatingInputProps) {
  const generatedId = useId()
  const inputId = `floating-input-${generatedId}`
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')

  const isActive = focused || value.length > 0

  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: isActive ? '-0.5rem' : '0.75rem',
    fontFamily: 'var(--font-display)',
    fontSize: isActive ? '0.6875rem' : '0.9375rem',
    fontWeight: 500,
    letterSpacing: isActive ? '0.1em' : '0',
    textTransform: isActive ? 'uppercase' : 'none',
    color: focused ? 'var(--primary)' : 'var(--on-surface-variant)',
    transition: 'all var(--duration-fast) var(--ease-default)',
    pointerEvents: 'none',
  }

  const underlineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: focused ? '2px' : '1px',
    background: focused ? 'var(--primary)' : 'rgba(200, 196, 191, 0.5)',
    transition: 'all var(--duration-fast) var(--ease-default)',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--on-surface)',
    lineHeight: 1.6,
    padding: '0.75rem 0 0.5rem',
  }

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    marginBottom: 'var(--spacing-6)',
  }

  if (type === 'textarea') {
    return (
      <div style={wrapperStyle}>
        <label htmlFor={inputId} style={labelStyle}>{label}</label>
        <textarea
          id={inputId}
          name={name}
          required={required}
          rows={3}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div style={underlineStyle} />
      </div>
    )
  }

  if (type === 'select' && options) {
    return (
      <div style={wrapperStyle}>
        <label htmlFor={inputId} style={labelStyle}>{label}</label>
        <select
          id={inputId}
          name={name}
          required={required}
          style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          <option value="" disabled hidden />
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div style={underlineStyle} />
      </div>
    )
  }

  return (
    <div style={wrapperStyle}>
      <label htmlFor={inputId} style={labelStyle}>{label}</label>
      <input
        id={inputId}
        type={type}
        name={name}
        required={required}
        style={inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div style={underlineStyle} />
    </div>
  )
}
