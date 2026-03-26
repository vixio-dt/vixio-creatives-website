import type { Metadata } from 'next'
import { LabHero } from '@/components/lab/LabHero'
import { ProjectGrid } from '@/components/lab/ProjectGrid'

export const metadata: Metadata = {
  title: 'The Lab — Vixio Creatives',
  description: 'R&D experiments in projection mapping, NFC interaction, depth camera body tracking, and physical-digital connection. Built, tested, and documented.',
  openGraph: {
    title: 'The Lab — Vixio Creatives',
    description: 'Experiments in projection, interaction, and physical-digital connection.',
  },
}

export default function LabPage() {
  return (
    <>
      <LabHero />
      <ProjectGrid />
    </>
  )
}
