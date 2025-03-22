import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react'

import StyledComponentsRegistry from '@/lib/registry'
import { DynamicThemeProvider } from '@/theme'

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
        <DynamicThemeProvider>{children}</DynamicThemeProvider>
      </StyledComponentsRegistry>
      {/* <Analytics /> */}
    </body>
  </html>
)

export default RootLayout
