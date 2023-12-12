import { ThemeOptions, makeTheme } from '@shallot-ui/theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../../styles'

type ShallotProviderProps = {
  children: ReactNode
  theme?: ThemeOptions
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
}: ShallotProviderProps) => (
  <ThemeProvider theme={makeTheme(theme)}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
