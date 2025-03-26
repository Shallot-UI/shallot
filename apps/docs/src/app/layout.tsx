import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

import StyledComponentsRegistry from '@/lib/registry'
import { DynamicThemeProvider } from '@/theme'

import MainLayout from '@/layouts/Main'
import '@/theme/typefaces.css'

export const metadata: Metadata = {
  title: 'Shallot',
  description: 'Shallot',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
}

const RootLayout: FC<Readonly<{ children: ReactNode }>> = ({ children }) => (
  <html lang="en">
    <body>
      <StyledComponentsRegistry>
        <DynamicThemeProvider>
          <MainLayout>{children}</MainLayout>
        </DynamicThemeProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
