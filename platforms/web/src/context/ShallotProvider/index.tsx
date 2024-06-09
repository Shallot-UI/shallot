import { ThemeOptions, ThemeVariants, makeTheme } from '@repo/theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, GlobalStyleProps } from '@/styles'

type ShallotProviderProps = {
  children: ReactNode
  theme?: ThemeOptions
  variants?: ThemeVariants
  includeGlobalStyle?: boolean
} & GlobalStyleProps

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
  variants = {},
  includeGlobalStyle = true,
  ...rest
}: ShallotProviderProps) => (
  <ThemeProvider theme={makeTheme(theme, variants)}>
    {includeGlobalStyle && <GlobalStyle {...rest} />}
    {children}
  </ThemeProvider>
)
