import { ThemeOptions, makeTheme } from '@shallot-ui/theme'
import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, GlobalStyleProps } from '../../styles'

type ShallotProviderProps = {
  children: ReactNode
  theme?: ThemeOptions
} & GlobalStyleProps

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  theme = {},
  ...rest
}: ShallotProviderProps) => (
  <ThemeProvider theme={makeTheme(theme)}>
    <GlobalStyle {...rest} />
    {children}
  </ThemeProvider>
)
