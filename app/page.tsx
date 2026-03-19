import { HeroSection } from '@/components/marketing/HeroSection'
import { StudioSection } from '@/components/marketing/StudioSection'
import { BoundaryShowcase } from '@/components/marketing/BoundaryShowcase'
import { CapabilitiesSection } from '@/components/marketing/CapabilitiesSection'
import { FounderSection } from '@/components/marketing/FounderSection'
import { ContactSection } from '@/components/marketing/ContactSection'

export default function Home() {
  return (
    <main className="marketing-body min-h-screen">
      <HeroSection />
      <StudioSection />
      <BoundaryShowcase />
      <CapabilitiesSection />
      <FounderSection />
      <ContactSection />
    </main>
  )
}
