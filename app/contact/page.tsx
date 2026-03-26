import type { Metadata } from 'next'
import { ContactLayout } from '@/components/contact/ContactLayout'

export const metadata: Metadata = {
  title: 'Contact — Vixio Creatives',
  description: 'Start a project, join the team, or get in touch. Vixio Creatives, Hong Kong. hello@vixiocreatives.com',
  openGraph: {
    title: 'Contact — Vixio Creatives',
    description: 'Let\'s build something. Get in touch with Vixio Creatives.',
  },
}

export default function ContactPage() {
  return <ContactLayout />
}
