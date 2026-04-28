import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ExperienceIntro() {
  return (
    <section style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Block 1 — The Format */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start" style={{ marginBottom: 'var(--spacing-16)' }}>
          <div className="md:w-1/2">
            <ScrollReveal>
              <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
                A new kind of shared experience
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Not an escape room. Not a VR headset. Not a museum exhibit. You and your group step into a
                projection-mapped environment that responds to your movement, your NFC wristband interactions,
                and your collective choices. The room is the story. Launching October 2026 in Hong Kong.
              </p>
            </ScrollReveal>
          </div>
          <div className="md:w-1/2">
            <ScrollReveal delay={0.15}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16/9' }}>
                <Image
                  src="/images/experience-format-demo.webp"
                  alt="NFC wristband hovering over a projection-responsive surface"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,27,31,0.10)' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Block 2 — What You Take Home */}
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start" style={{ marginBottom: 'var(--spacing-16)' }}>
          <div className="md:w-1/2">
            <ScrollReveal>
              <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
                Walk out with something real
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                You don&apos;t just leave with a memory. You leave with a physical artifact — an NFC-embedded
                collectible shaped by what happened in the room. Tap it with your phone at home and it
                remembers your journey. How well the group worked together determines what form it takes.
              </p>
            </ScrollReveal>
          </div>
          <div className="md:w-1/2">
            <ScrollReveal delay={0.15}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16/9' }}>
                <Image
                  src="/images/experience-nfc-artifact.webp"
                  alt="NFC-embedded resin collectible on concrete surface with warm brass lamp light"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,27,31,0.10)' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Block 3 — The Stakes */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', padding: 'var(--spacing-8) 0' }}>
            <p className="headline-lg" style={{ color: 'var(--on-surface)', maxWidth: '600px', margin: '0 auto' }}>
              The outcome depends on everyone in the room.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
