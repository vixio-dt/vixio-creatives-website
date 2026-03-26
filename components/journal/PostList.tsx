import { ScrollReveal } from '@/components/ui/ScrollReveal'

const posts = [
  {
    date: 'March 2026',
    title: 'Why We\'re Building in Hong Kong',
    tag: 'STUDIO',
    teaser: 'Zero permanent immersive projection venues. 49.9 million visitor arrivals. The gap isn\'t subtle.',
  },
  {
    date: 'March 2026',
    title: 'NFC Wristbands as Narrative Devices',
    tag: 'TECHNOLOGY',
    teaser: 'A US$0.15 chip that turns a passive audience member into a participant.',
  },
  {
    date: 'February 2026',
    title: 'What Escape Rooms Get Wrong About Cooperation',
    tag: 'DESIGN',
    teaser: 'Most say they\'re cooperative. They\'re not.',
  },
]

export function PostList() {
  return (
    <section style={{ padding: '0 var(--spacing-6)', paddingBottom: 'var(--spacing-16)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {posts.map((post, i) => (
          <ScrollReveal key={post.title} delay={i * 0.1}>
            <a
              href="#"
              style={{
                display: 'block',
                textDecoration: 'none',
                marginBottom: i < posts.length - 1 ? 'var(--spacing-12)' : 0,
              }}
            >
              <div className="flex items-center gap-4" style={{ marginBottom: 'var(--spacing-2)' }}>
                <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                  {post.date}
                </span>
                <span className="label-sm" style={{ color: 'var(--primary)' }}>
                  {post.tag}
                </span>
              </div>
              <h2 className="headline-sm" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-2)' }}>
                {post.title}
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                {post.teaser}
              </p>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
