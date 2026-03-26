import type { Metadata } from 'next'
import { ManifestoSection } from '@/components/about/ManifestoSection'
import { FounderSection } from '@/components/about/FounderSection'
import { ValuesSection } from '@/components/about/ValuesSection'

export const metadata: Metadata = {
  title: 'About — Vixio Creatives',
  description: 'Vixio Creatives aims to be the bridge between logic and emotion, digital and physical, body and mind — connecting people through great stories. Founded by Denis Tam in Hong Kong.',
  openGraph: {
    title: 'About — Vixio Creatives',
    description: 'The bridge between logic and emotion, digital and physical.',
  },
}

export default function AboutPage() {
  return (
    <>
      <ManifestoSection />
      <FounderSection />
      <ValuesSection />
    </>
  )
}
