import type { Metadata } from 'next'
import { JournalHero } from '@/components/journal/JournalHero'
import { PostList } from '@/components/journal/PostList'

export const metadata: Metadata = {
  title: 'Journal — Vixio Creatives',
  description: 'Creative process, industry observations, and behind-the-scenes from an immersive experience studio in Hong Kong.',
  openGraph: {
    title: 'Journal — Vixio Creatives',
    description: 'Thinking out loud. From the Vixio Creatives studio.',
  },
}

export default function JournalPage() {
  return (
    <>
      <JournalHero />
      <PostList />
    </>
  )
}
