import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServiceCards } from '@/components/services/ServiceCards'
import { ToolkitSection } from '@/components/services/ToolkitSection'
import { ProcessSection } from '@/components/services/ProcessSection'
import { EnquiryForm } from '@/components/services/EnquiryForm'

export const metadata: Metadata = {
  title: 'Studio Services — Vixio Creatives',
  description: 'Cooperative experience design for brands, malls, and cultural venues. Spatial environments, body tracking, and physical artifact production. Hong Kong.',
  openGraph: {
    title: 'Studio Services — Vixio Creatives',
    description: 'We build cooperative experiences for brands, malls, and cultural venues.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ToolkitSection />
      <ProcessSection />
      <EnquiryForm />
    </>
  )
}
