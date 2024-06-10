import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeOptions, makeTheme } from '@shallot-ui/core-theme'

type ShallotProviderProps = {
  children: ReactNode | ReactNode[]
  theme?: ThemeOptions
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
}: ShallotProviderProps) => (
  <ThemeProvider theme={makeTheme(theme)}>{children}</ThemeProvider>
)
