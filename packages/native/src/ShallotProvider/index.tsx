import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeTokens, makeTheme } from '@shallot-ui/core-theme'

type ShallotProviderProps = {
  children: ReactNode | ReactNode[]
  tokens?: ThemeTokens
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  tokens = {},
}: ShallotProviderProps) => (
  <ThemeProvider theme={makeTheme(tokens)}>{children}</ThemeProvider>
)
