import { HeroSection } from '@/components/home/HeroSection'
import { TwoTrackSection } from '@/components/home/TwoTrackSection'
import { LabPreviewSection } from '@/components/home/LabPreviewSection'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { TrustSignalsBar } from '@/components/home/TrustSignalsBar'
import { EmailCaptureSection } from '@/components/home/EmailCaptureSection'
import { LogoReveal } from '@/components/ui/LogoReveal'

export default function Home() {
  return (
    <>
      <LogoReveal />
      <HeroSection />
      <TwoTrackSection />
      <LabPreviewSection />
      <AboutTeaser />
      <TrustSignalsBar />
      <EmailCaptureSection />
    </>
  )
}
