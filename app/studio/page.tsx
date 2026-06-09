import type { Metadata } from 'next'
import { StudioHero } from '@/components/studio/StudioHero'
import { HowWeWork } from '@/components/studio/HowWeWork'
import { AIStance } from '@/components/studio/AIStance'
import { Founder } from '@/components/studio/Founder'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Vixio is a creative label for story-rich worlds, founded in Hong Kong. Small by design, high craft bar.',
}

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <HowWeWork />
      <AIStance />
      <Founder />
    </>
  )
}
