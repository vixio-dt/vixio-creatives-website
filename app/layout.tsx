import type { Metadata } from 'next'
import { ColorSchemeScript } from '@mantine/core'
import { MantineClientProvider } from '@/components/providers/MantineClientProvider'
import { OrbitalNav } from '@/components/layout/OrbitalNav'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vixio Creatives | Game-Designed Experiences for Physical Spaces',
  description: 'Venue gamification studio in Hong Kong. We design cooperative game experiences for malls, attractions, and cultural venues. Stories Across Worlds.',
  openGraph: {
    title: 'Vixio Creatives | Game-Designed Experiences for Physical Spaces',
    description: 'Venue gamification studio in Hong Kong. Cooperative game experiences that turn visitors into players and spaces into stories.',
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
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <MantineClientProvider>
          <CustomCursor />
          <OrbitalNav />
          <main id="main-content">{children}</main>
          <Footer />
        </MantineClientProvider>
      </body>
    </html>
  )
}
