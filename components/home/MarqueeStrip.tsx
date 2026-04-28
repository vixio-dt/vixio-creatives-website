import { ScrollReveal } from '@/components/ui/ScrollReveal'

const items = [
  'Original IP',
  'Brand experiences',
  'Public R&D',
  'Phygital collectibles',
  'Hong Kong',
]

export function MarqueeStrip() {
  return (
    <ScrollReveal>
      <section
        aria-hidden="true"
        style={{
          background: 'var(--ink)',
          color: '#F2F0EC',
          padding: 'var(--spacing-8) 0',
          overflow: 'hidden',
        }}
      >
        <div
          className="marquee-track"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          {Array.from({ length: 3 }).map((_, copy) => (
            <div
              key={copy}
              style={{ display: 'flex', gap: '3rem', flexShrink: 0 }}
            >
              {items.map((label, i) => (
                <span key={`${copy}-${i}`} style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                  <span>{label}</span>
                  <span style={{ color: 'var(--primary)' }}>+</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}
