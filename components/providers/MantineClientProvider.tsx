'use client'

import { MantineProvider } from '@mantine/core'
import { theme } from '@/lib/theme/mantine-theme'

export function MantineClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      {children}
    </MantineProvider>
  )
}
