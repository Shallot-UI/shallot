import { ThemeTokens, ThemeVariants, makeTheme } from '@shallot-ui/core-theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, webVariants } from '@shallot-ui/platform-react'

type ShallotProviderProps = {
  children: ReactNode
  tokens?: ThemeTokens
  variants?: ThemeVariants
  includeGlobalStyle?: boolean
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  tokens = {},
  variants = webVariants,
  includeGlobalStyle = true,
  ...rest
}: ShallotProviderProps) => {
  const theme = makeTheme(tokens, variants)

  return (
    <ThemeProvider theme={theme}>
      {includeGlobalStyle && <GlobalStyle theme={theme} />}
      {children}
    </ThemeProvider>
  )
}
