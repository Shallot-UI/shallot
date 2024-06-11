import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import {
  ThemeGlobals,
  ThemeTokens,
  ThemeVariants,
  makeTheme,
} from '@shallot-ui/core-theme'

import { GlobalStyle } from '@/styles'
import {
  DEFAULT_REACT_THEME,
  reactThemeVariants,
  reactThemeGlobals,
} from '@/theme'

type ShallotContextValue = {
  theme: DefaultTheme
  setThemeMode: (mode: string) => void
}

export const ShallotContext = createContext<ShallotContextValue>({
  theme: DEFAULT_REACT_THEME,
  setThemeMode: () => {
    throw new Error('ShallotContext not provided')
  },
})

type ShallotProviderProps = {
  children: ReactNode
  tokens?: ThemeTokens
  variants?: ThemeVariants
  globals?: ThemeGlobals
  includeGlobalStyle?: boolean
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  tokens = {},
  variants = reactThemeVariants,
  globals = reactThemeGlobals,
  includeGlobalStyle = true,
}: ShallotProviderProps) => {
  const [mode, setMode] = useState('default')

  const theme: DefaultTheme = useMemo(
    () => ({ ...makeTheme(tokens, variants, globals), mode }),
    [tokens, variants, globals, mode],
  )

  return (
    <ShallotContext.Provider value={{ theme, setThemeMode: setMode }}>
      <ThemeProvider theme={theme}>
        {includeGlobalStyle && <GlobalStyle theme={theme} />}
        {children}
      </ThemeProvider>
    </ShallotContext.Provider>
  )
}

export const useShallot = () => useContext(ShallotContext)
export const useTheme = () => useShallot().theme
