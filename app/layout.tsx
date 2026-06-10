import type { Metadata } from 'next'
import { Space_Grotesk, Manrope } from 'next/font/google'
import { SiteNav } from '@/components/layout/SiteNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { copy } from '@/lib/copy'
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
    default: copy.meta.home.title,
    template: copy.meta.titleTemplate,
  },
  description: copy.meta.home.description,
  openGraph: {
    title: copy.meta.home.title,
    description: copy.meta.home.description,
    url: 'https://vixiocreatives.com',
    siteName: copy.meta.siteName,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: copy.meta.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: copy.meta.home.title,
    description: copy.meta.home.description,
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
      <body style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>
        <a href="#main-content" className="skip-link">{copy.skipLink}</a>
        <SiteNav />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
