import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForms } from '@/components/contact/ContactForms'
import { ContactDirect } from '@/components/contact/ContactDirect'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Vixio. For studios, rights holders, and collaborators.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForms />
      <ContactDirect />
    </>
  )
}
