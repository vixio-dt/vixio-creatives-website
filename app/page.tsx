import { ScrollLogoReveal } from '@/components/home/ScrollLogoReveal'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { PillarsSection } from '@/components/home/PillarsSection'
import { CapabilitiesAtlas } from '@/components/home/CapabilitiesAtlas'
import { FeaturedStat } from '@/components/home/FeaturedStat'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { EmailCaptureCTA } from '@/components/home/EmailCaptureCTA'

export default function Home() {
  return (
    <>
      <ScrollLogoReveal />
      <MarqueeStrip />
      <PillarsSection />
      <CapabilitiesAtlas />
      <FeaturedStat />
      <AboutTeaser />
      <EmailCaptureCTA />
    </>
  )
}
