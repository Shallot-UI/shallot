import { ThemeOptions, ThemeVariants, makeTheme } from '@shallot-ui/core-theme'
import { FunctionComponent, ReactNode, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import {
  GlobalStyle,
  GlobalStyleProps,
  webVariants,
} from '@shallot-ui/platform-react'

type ShallotProviderProps = {
  children: ReactNode
  theme?: ThemeOptions
  variants?: ThemeVariants
  includeGlobalStyle?: boolean
} & GlobalStyleProps

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
  variants = webVariants,
  includeGlobalStyle = true,
  ...rest
}: ShallotProviderProps) => {
  const providedTheme = useMemo(
    () => makeTheme(theme, variants),
    [theme, variants],
  )

  return (
    <ThemeProvider theme={providedTheme}>
      {includeGlobalStyle && <GlobalStyle {...rest} />}
      {children}
    </ThemeProvider>
  )
}
