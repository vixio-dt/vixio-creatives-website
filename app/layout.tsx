import type { Metadata } from 'next'
import { Space_Grotesk, Manrope } from 'next/font/google'
import { SiteNav } from '@/components/layout/SiteNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vixiocreatives.com'),
  title: {
    default: 'Vixio Creatives',
    template: '%s · Vixio Creatives',
  },
  description: 'A creative label for story-rich worlds. Hong Kong.',
  openGraph: {
    title: 'Vixio Creatives',
    description: 'A creative label for story-rich worlds. Hong Kong.',
    url: 'https://vixiocreatives.com',
    siteName: 'Vixio Creatives',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Vixio Creatives. A creative label for story-rich worlds.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vixio Creatives',
    description: 'A creative label for story-rich worlds. Hong Kong.',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SiteNav />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
