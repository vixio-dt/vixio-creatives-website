import type { Metadata } from 'next'
import { ColorSchemeScript } from '@mantine/core'
import { MantineClientProvider } from '@/components/providers/MantineClientProvider'
import { OrbitalNav } from '@/components/layout/OrbitalNav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vixio Creatives — Transmedia Creative Studio, Hong Kong',
  description: 'Vixio Creatives is a transmedia creative studio based in Hong Kong. We create original stories and bring them to life across formats — immersive phygital experiences, interactive collectibles, film, and content.',
  openGraph: {
    title: 'Vixio Creatives — Transmedia Creative Studio, Hong Kong',
    description: 'Stories across worlds. A transmedia creative studio based in Hong Kong.',
    url: 'https://vixiocreatives.com',
    siteName: 'Vixio Creatives',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-mantine-color-scheme="light" suppressHydrationWarning>
      <head>
        <ColorSchemeScript forceColorScheme="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MantineClientProvider>
          <OrbitalNav />
          <main>{children}</main>
          <Footer />
        </MantineClientProvider>
      </body>
    </html>
  )
}
