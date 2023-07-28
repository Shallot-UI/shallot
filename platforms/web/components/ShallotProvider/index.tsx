import { ThemeOptions, makeTheme } from '@shallot-ui/theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

type ShallotProviderProps = {
  children: ReactNode
  theme?: ThemeOptions
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
}: ShallotProviderProps) => {
  return <ThemeProvider theme={makeTheme(theme)}>{children}</ThemeProvider>
}
