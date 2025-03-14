import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react'

import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from '@/theme'

// import '@/theme/typefaces/clash-display/styles.css'
// import '@/theme/typefaces/general-sans/styles.css'
// import '@/theme/typefaces/roboto-mono/styles.css'

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
        <ThemeProvider>{children}</ThemeProvider>
      </StyledComponentsRegistry>
      {/* <Analytics /> */}
    </body>
  </html>
)

export default RootLayout
