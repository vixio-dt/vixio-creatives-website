import { FeaturedWork } from '@/components/slate/FeaturedWork'
import { SlateSection } from '@/components/slate/SlateSection'
import { Newsletter } from '@/components/home/Newsletter'
import { featuredWork, slateByStatus } from '@/lib/slate'

export default function Home() {
  const featured = featuredWork()
  const sections = slateByStatus()

  return (
    <>
      {featured && <FeaturedWork entry={featured} />}

      {sections.map(([status, entries]) => (
        <SlateSection key={status} status={status} entries={entries} />
      ))}

      <Newsletter />
    </>
  )
}
