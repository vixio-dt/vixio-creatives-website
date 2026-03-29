'use client'

import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface)',
        padding: 'calc(var(--spacing-20) + 80px) var(--spacing-6) var(--spacing-20)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1
          className="display-lg fade-in-up"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-6)', animationDelay: '0.3s' }}
        >
          Stories across worlds.
        </h1>

        <p
          className="body-lg fade-in-up"
          style={{
            color: 'var(--on-surface-variant)',
            maxWidth: '580px',
            margin: '0 auto',
            marginBottom: 'var(--spacing-8)',
            animationDelay: '0.5s',
          }}
        >
          Vixio Creatives is a transmedia creative studio based in Hong Kong. We create original
          stories and bring them to life across formats — immersive phygital experiences, interactive
          collectibles, film, and content. Every format serves the story. Every story deserves more
          than one way to be experienced.
        </p>

        <div
          className="fade-in-up"
          style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap', animationDelay: '0.7s' }}
        >
          <GradientButton href="/about">Our Vision</GradientButton>
          <GhostButton href="/services">Work With Us</GhostButton>
        </div>
      </div>
    </section>
  )
}
