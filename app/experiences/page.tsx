import type { Metadata } from 'next'
import { ExperiencesHero } from '@/components/experiences/ExperiencesHero'
import { ExperienceIntro } from '@/components/experiences/ExperienceIntro'
import { ExperiencesWaitlist } from '@/components/experiences/ExperiencesWaitlist'

export const metadata: Metadata = {
  title: 'Original Experiences — Vixio Creatives',
  description: 'A cooperative experience where groups work together inside a spatial room. 45 minutes. 4–12 visitors. Walk out with something that didn\'t exist before you arrived. Launching Hong Kong, October 2026.',
  openGraph: {
    title: 'Original Experiences — Vixio Creatives',
    description: 'A cooperative experience. 45 minutes. Walk out with a physical artifact.',
  },
}

export default function ExperiencesPage() {
  return (
    <>
      <ExperiencesHero />
      <ExperienceIntro />
      <ExperiencesWaitlist />
    </>
  )
}
