import {
  ThemeModes,
  ThemeTokens,
  ThemeVariants,
  makeTheme,
} from '@shallot-ui/core-theme'
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
  modes?: ThemeModes
  includeGlobalStyle?: boolean
} & GlobalStyleProps

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  tokens = {},
  variants = webVariants,
  modes = {},
  includeGlobalStyle = true,
  ...rest
}: ShallotProviderProps) => (
  <ThemeProvider theme={makeTheme(tokens, variants, modes)}>
    {includeGlobalStyle && <GlobalStyle {...rest} />}
    {children}
  </ThemeProvider>
)
