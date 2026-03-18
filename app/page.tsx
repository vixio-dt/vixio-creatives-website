import { MarketingNav } from '@/components/marketing/MarketingNav'
import { HeroSection } from '@/components/marketing/HeroSection'
import { BoundaryShowcase } from '@/components/marketing/BoundaryShowcase'
import { StudioSection } from '@/components/marketing/StudioSection'
import { CapabilitiesSection } from '@/components/marketing/CapabilitiesSection'
import { ContactSection } from '@/components/marketing/ContactSection'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export default function Home() {
  return (
    <main className="marketing-body min-h-screen">
      <MarketingNav />
      <HeroSection />
      <BoundaryShowcase />
      <StudioSection />
      <CapabilitiesSection />
      <ContactSection />
      <MarketingFooter />
    </main>
  )
}
