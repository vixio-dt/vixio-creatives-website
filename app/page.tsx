import { ScrollLogoReveal } from '@/components/home/ScrollLogoReveal'
import { ProblemSection } from '@/components/home/ProblemSection'
import { WhoThisIsFor } from '@/components/home/WhoThisIsFor'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { HowItWorks } from '@/components/home/HowItWorks'
import { ApproachSection } from '@/components/home/ApproachSection'
import { StructuralGap } from '@/components/home/StructuralGap'
import { FollowTheBuild } from '@/components/home/FollowTheBuild'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <ScrollLogoReveal />
      <ProblemSection />
      <WhoThisIsFor />
      <WhatWeDo />
      <HowItWorks />
      <ApproachSection />
      <StructuralGap />
      <FollowTheBuild />
      <FinalCTA />
    </>
  )
}
