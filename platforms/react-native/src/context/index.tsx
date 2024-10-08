import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components/native'
import {
  ThemeGlobals,
  ThemeTokens,
  ThemeVariants,
} from '@shallot-ui/core-theme'

import { DEFAULT_NATIVE_THEME, makeNativeTheme } from '@/theme'

type ShallotContextValue = {
  theme: DefaultTheme
  setThemeMode: (mode: string) => void
}

export const ShallotContext = createContext<ShallotContextValue>({
  theme: DEFAULT_NATIVE_THEME,
  setThemeMode: () => {
    throw new Error('ShallotContext not provided')
  },
})

type ShallotProviderProps = {
  children: ReactNode
  tokens?: ThemeTokens
  variants?: ThemeVariants
  globals?: ThemeGlobals
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  tokens,
  variants,
  globals,
}: ShallotProviderProps) => {
  const [mode, setMode] = useState('default')

  const theme: DefaultTheme = useMemo(
    () => ({ ...makeNativeTheme({ tokens, variants, globals }), mode }),
    [tokens, variants, globals, mode],
  )

  return (
    <ShallotContext.Provider value={{ theme, setThemeMode: setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ShallotContext.Provider>
  )
}

export const useShallot = () => useContext(ShallotContext)
export const useTheme = () => useShallot().theme
