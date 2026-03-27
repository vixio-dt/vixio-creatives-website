export function ManifestoSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-20) var(--spacing-6)',
      }}
    >
      <div style={{ maxWidth: '720px', textAlign: 'center' }}>
        <h1
          className="headline-lg fade-in-up"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)', animationDelay: '0.2s' }}
        >
          We believe the most powerful stories are the ones you live inside.
        </h1>

        <p
          className="headline-lg fade-in-up"
          style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-8)', animationDelay: '0.4s' }}
        >
          Where strangers become collaborators. Where something born from collective attention becomes
          something you hold in your hands.
        </p>

        <p
          className="body-lg fade-in-up"
          style={{ color: 'var(--on-surface-variant)', maxWidth: '560px', margin: '0 auto', animationDelay: '0.6s' }}
        >
          Vixio Creatives aims to be the bridge between logic and emotion, digital and physical,
          body and mind — connecting people through great stories.
        </p>
      </div>
    </section>
  )
}
