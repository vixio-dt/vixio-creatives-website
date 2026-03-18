import type { Metadata } from 'next'
import { ColorSchemeScript } from '@mantine/core'
import { MantineClientProvider } from '@/components/providers/MantineClientProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vixio Creatives',
  description: 'AI-assisted creative production studio. Hong Kong.',
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <MantineClientProvider>
          {children}
        </MantineClientProvider>
      </body>
    </html>
  )
}
