import { ThemeOptions, makeTheme } from '@repo/theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

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
