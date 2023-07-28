import { ThemeOptions, makeTheme } from '@shallot-ui/theme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

type ShallotProviderProps = {
  children: ReactNode
  theme?: ThemeOptions
}

export const ShallotProvider = ({
  children,
  theme = {},
}: ShallotProviderProps) => {
  return <ThemeProvider theme={makeTheme(theme)}>{children}</ThemeProvider>
}
