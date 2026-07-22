import type { Metadata } from 'next'
import { copy } from '@/lib/copy'
import { StudioLead } from '@/components/studio/StudioLead'
import { StudioSelection } from '@/components/studio/StudioSelection'
import { StudioGateways } from '@/components/studio/StudioGateways'
import { StudioMethod } from '@/components/studio/StudioMethod'
import { StudioAIStance } from '@/components/studio/StudioAIStance'
import { StudioFounder } from '@/components/studio/StudioFounder'
import { StudioCTA } from '@/components/studio/StudioCTA'

export const metadata: Metadata = {
  title: copy.meta.studio.title,
  description: copy.meta.studio.description,
}

export default function StudioPage() {
  return (
    <>
      <StudioLead />
      <StudioSelection />
      <StudioGateways />
      <StudioMethod />
      <StudioAIStance />
      <StudioFounder />
      <StudioCTA />
    </>
  )
}
