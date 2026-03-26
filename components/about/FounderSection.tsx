import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientPlaceholder } from '@/components/ui/GradientPlaceholder'

export function FounderSection() {
  return (
    <section style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}>
      <div
        style={{ maxWidth: '900px', margin: '0 auto' }}
        className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
      >
        {/* Photo placeholder */}
        <ScrollReveal>
          <div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(200, 196, 191, 0.3)',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <GradientPlaceholder variant="neutral" aspectRatio="1/1" />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.15}>
          <div>
            <SectionLabel>Founder</SectionLabel>
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
              Denis Tam
            </h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-6)' }}>
              Mechanical engineer by training, with a decade operating across Hong Kong and Dongguan
              in international trade and manufacturing. Creative producer for a 200-person college
              variety show — writing, performing, coordinating every element of production. Now
              channelling both worlds into building immersive experiences that bridge great stories
              and the craft they deserve.
            </p>
            <p className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>
              Vixio Creatives Limited. Hong Kong. Launching October 2026.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
