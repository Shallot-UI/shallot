import { ThemeOptions, makeTheme } from '@repo/theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, GlobalStyleProps } from '@/styles'

type ShallotProviderProps = {
  children: ReactNode
  theme?: ThemeOptions
  includeGlobalStyle?: boolean
} & GlobalStyleProps

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
  includeGlobalStyle = true,
  ...rest
}: ShallotProviderProps) => (
  <ThemeProvider theme={makeTheme(theme)}>
    {includeGlobalStyle && <GlobalStyle {...rest} />}
    {children}
  </ThemeProvider>
)
