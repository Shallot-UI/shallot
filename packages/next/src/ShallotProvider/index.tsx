import { ThemeTokens, ThemeVariants, makeTheme } from '@shallot-ui/core-theme'
import { FunctionComponent, ReactNode, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import {
  GlobalStyle,
  GlobalStyleProps,
  webVariants,
} from '@shallot-ui/platform-react'

type ShallotProviderProps = {
  children: ReactNode
  tokens?: ThemeTokens
  variants?: ThemeVariants
  includeGlobalStyle?: boolean
} & GlobalStyleProps

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
      {includeGlobalStyle && <GlobalStyle {...rest} />}
      {children}
    </ThemeProvider>
  )
}
