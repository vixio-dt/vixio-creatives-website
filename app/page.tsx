import { TwoTrackSection } from '@/components/home/TwoTrackSection'
import { LabPreviewSection } from '@/components/home/LabPreviewSection'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { TrustSignalsBar } from '@/components/home/TrustSignalsBar'
import { EmailCaptureSection } from '@/components/home/EmailCaptureSection'
import { ScrollLogoReveal } from '@/components/home/ScrollLogoReveal'

export default function Home() {
  return (
    <>
      <ScrollLogoReveal />
      <TwoTrackSection />
      <LabPreviewSection />
      <AboutTeaser />
      <TrustSignalsBar />
      <EmailCaptureSection />
    </>
  )
}
