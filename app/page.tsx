import { ScrollLogoReveal } from '@/components/home/ScrollLogoReveal'
import { LabelStatement } from '@/components/home/LabelStatement'
import { WhatWeMake } from '@/components/home/WhatWeMake'
import { NowInProduction } from '@/components/home/NowInProduction'
import { TheBar } from '@/components/home/TheBar'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <ScrollLogoReveal />
      <LabelStatement />
      <WhatWeMake />
      <NowInProduction />
      <TheBar />
      <HomeCTA />
    </>
  )
}
