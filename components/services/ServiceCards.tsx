import { ScrollReveal } from '@/components/ui/ScrollReveal'

const services = [
  {
    title: 'Mall & Retail Activations',
    body: 'Seasonal pop-up experiences and interactive installations that turn visitors into participants. Our portable projection kit installs in hours and generates the organic social content that drives discovery.',
    tag: 'SEASONAL · POP-UP · INTERACTIVE',
  },
  {
    title: 'Brand Experience Design',
    body: 'Product launches, showroom experiences, and corporate events where your audience doesn\'t watch your story — they step inside it. Every experience includes a physical NFC-embedded takeaway.',
    tag: 'LAUNCHES · EVENTS · SHOWROOMS',
  },
  {
    title: 'Art Installations for Cultural Venues',
    body: 'Responsive projection environments and interactive digital art where the audience\'s presence shapes the work. No screens, no controllers — visitors discover the interaction through movement and curiosity.',
    tag: 'GALLERIES · MUSEUMS · PUBLIC ART · FESTIVALS',
  },
]

export function ServiceCards() {
  return (
    <section style={{ padding: '0 var(--spacing-6)', paddingBottom: 'var(--spacing-16)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.1}>
            <div
              className="card-hover"
              style={{
                background: 'var(--surface-container-high)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-8)',
              }}
            >
              <h2 className="headline-md" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-4)' }}>
                {service.title}
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-4)' }}>
                {service.body}
              </p>
              <span className="label-sm" style={{ color: 'var(--primary)' }}>
                {service.tag}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
