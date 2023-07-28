import { makeTheme } from '@shallot-ui/theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../../styled'

type ShallotProviderProps = {
  children: ReactNode | ReactNode[]
  theme?: Theme
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
}: ShallotProviderProps) => {
  return <ThemeProvider theme={makeTheme(theme)}>{children}</ThemeProvider>
}
