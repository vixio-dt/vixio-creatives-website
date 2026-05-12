import { ScrollLogoReveal } from '@/components/home/ScrollLogoReveal'
import { ProblemSection } from '@/components/home/ProblemSection'
import { WhoThisIsFor } from '@/components/home/WhoThisIsFor'
import { ServicesManifest } from '@/components/home/ServicesManifest'
import { ExperienceSection } from '@/components/home/ExperienceSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { ContactSection } from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <ScrollLogoReveal />
      <ProblemSection />
      <WhoThisIsFor />
      <ServicesManifest />
      <ExperienceSection />
      <HowItWorks />
      <ContactSection />
    </>
  )
}
