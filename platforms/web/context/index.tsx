import { ThemeOptions, makeTheme } from '@shallot-ui/theme'
import { ReactNode, createContext } from 'react'
import { ThemeProvider } from 'styled-components'

interface ShallotContextProps {
  themeOptions: ThemeOptions
  children?: ReactNode
}

export const ShallotContext = createContext<ShallotContextProps>({
  themeOptions: {},
})

export const ShallotProvider: React.FC<ShallotContextProps> = ({
  themeOptions,
  children,
}) => {
  const theme = makeTheme(themeOptions)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
