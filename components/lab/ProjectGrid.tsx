import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const projects = [
  {
    title: 'NFC Tap-to-Response Test',
    description: 'Sub-200ms from wristband tap to projection change.',
    tags: ['NFC', 'TouchDesigner', 'Python'],
    date: 'April 2026',
    image: '/images/lab-nfc-tap.webp',
    imageAlt: 'Hand tapping NFC wristband on brass reader with projected response',
  },
  {
    title: '3-Wall Projection Alignment',
    description: 'Edge-blended mapping across three surfaces from a single laptop.',
    tags: ['Projection Mapping', 'TouchDesigner'],
    date: 'April 2026',
    image: '/images/lab-projection-mapping.webp',
    imageAlt: 'Three projection beams converging on white walls with TouchDesigner interface',
  },
  {
    title: 'Depth Camera Silhouette',
    description: 'Real-time body tracking generating responsive shadow projections.',
    tags: ['Body Tracking', 'TouchDesigner'],
    date: 'May 2026',
    image: '/images/lab-body-tracking.webp',
    imageAlt: 'Person with depth camera silhouette projected on wall',
  },
  {
    title: 'Collective Action Prototype',
    description: 'Multiple NFC inputs accumulate to trigger a shared state change.',
    tags: ['Unity', 'OSC', 'NFC'],
    date: 'May 2026',
    image: '/images/lab-collective-action.webp',
    imageAlt: 'Four hands at oak table near brass NFC readers with projected light building',
  },
  {
    title: 'Vessel LED Sync',
    description: 'Physical prop LEDs synchronised to projection fade via OSC.',
    tags: ['Arduino', 'OSC', 'Lighting'],
    date: 'June 2026',
    image: '/images/lab-vessel-led.webp',
    imageAlt: 'Resin vessel prop with warm LED glow on concrete surface',
  },
  {
    title: 'Haze + Volumetric Light',
    description: 'Atmospheric haze with wireless LED pars for visible light beams.',
    tags: ['Lighting', 'DMX', 'Atmosphere'],
    date: 'June 2026',
    image: '/images/lab-haze-volumetric.webp',
    imageAlt: 'Atmospheric haze with three volumetric light beams from LED pars',
  },
]

export function ProjectGrid() {
  return (
    <section style={{ padding: '0 var(--spacing-6)', paddingBottom: 'var(--spacing-16)' }}>
      <div
        style={{ maxWidth: '1000px', margin: '0 auto' }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.08}>
            <a
              href="#"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                className="card-hover"
                style={{
                  background: 'var(--surface-container-high)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s var(--ease-default)' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ padding: 'var(--spacing-4) var(--spacing-6)' }}>
                  <h3 className="title-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-1)' }}>
                    {project.title}
                  </h3>
                  <p className="body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-2)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    {project.tags.map((tag) => (
                      <span key={tag} className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                        {tag}
                      </span>
                    ))}
                    <span className="label-sm" style={{ color: 'var(--on-surface-variant)', marginLeft: 'auto' }}>
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
