'use client'

import { useRef, useCallback } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientButton } from '@/components/ui/GradientButton'
import { GhostButton } from '@/components/ui/GhostButton'

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)'
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'var(--surface-container-low)',
        padding: 'var(--spacing-8)',
        borderRadius: 'var(--radius-xl)',
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

export function WhoThisIsFor() {
  return (
    <section
      id="audience"
      style={{
        background: 'var(--surface)',
        padding: 'clamp(5rem, 12vw, 10rem) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <p
            className="label-md"
            style={{
              color: 'var(--on-surface-variant)',
              marginBottom: 'var(--spacing-12)',
            }}
          >
            Who This Is For
          </p>
        </ScrollReveal>

        <div className="wtif-grid">
          <ScrollReveal delay={0.1} className="wtif-col-players">
            <div>
              <p
                className="label-md"
                style={{
                  color: 'var(--primary)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                For You
              </p>
              <h3
                className="display-md"
                style={{
                  color: 'var(--on-surface)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Hold it. Solve it. Share it.
              </h3>
              <p
                className="body-lg"
                style={{
                  color: 'var(--on-surface-variant)',
                  maxWidth: '45ch',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                Premium physical products and playable experiences you keep,
                gift, and play together. Not content. Not merch. Objects
                engineered to be worth your time.
              </p>
              <GradientButton href="#products">
                See What We Make
              </GradientButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="wtif-col-venues">
            <TiltCard>
              <p
                className="label-md"
                style={{
                  color: 'var(--tertiary)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                For Creators
              </p>
              <h3
                className="headline-md"
                style={{
                  color: 'var(--on-surface)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Make something together.
              </h3>
              <p
                className="body-md"
                style={{
                  color: 'var(--on-surface-variant)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                You bring the vision. We bring engineering, production, and GBA
                manufacturing. Premium physical products and playable experiences
                with your name on them.
              </p>
              <GhostButton href="#contact">Start a Collaboration</GhostButton>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .wtif-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: start;
        }
        @media (max-width: 768px) {
          .wtif-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
