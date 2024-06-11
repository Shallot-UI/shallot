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
  ThemeModes,
  ThemeTokens,
  ThemeVariants,
  makeTheme,
} from '@shallot-ui/core-theme'
import {
  GlobalStyle,
  reactThemeGlobals,
  reactThemeModes,
  reactThemeVariants,
} from '@shallot-ui/platform-react'
import { DEFAULT_NEXT_THEME } from '@shallot-ui/platform-nextjs'
import { applyStyles } from '@shallot-ui/core-utils'

type ShallotContextValue = {
  theme: DefaultTheme
  themeMode: string | undefined
  setThemeMode: (mode: string) => void
}

export const ShallotContext = createContext<ShallotContextValue>({
  theme: DEFAULT_NEXT_THEME,
  themeMode: undefined,
  setThemeMode: () => {
    throw new Error('ShallotContext not provided')
  },
})

type ShallotProviderProps = {
  children: ReactNode
  tokens?: ThemeTokens
  variants?: ThemeVariants
  modes?: ThemeModes
  globals?: ThemeGlobals
  includeGlobalStyle?: boolean
}

const extendVariants = (variants: ThemeVariants, extended?: ThemeVariants) => {
  const newVariants = { ...variants }
  Object.keys(variants).forEach((component) => {
    if (!extended?.[component]) return
    Object.keys(extended[component]).forEach((name) => {
      if (!extended[component][name]) return
      newVariants[component][name] = applyStyles(
        variants[component][name],
        extended[component][name],
      )
    })
  })
  return newVariants
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  tokens = {},
  variants = reactThemeVariants,
  modes = reactThemeModes,
  globals = reactThemeGlobals,
  includeGlobalStyle = true,
}: ShallotProviderProps) => {
  const [themeMode, setThemeMode] = useState('default')

  const baseTheme = useMemo(
    () => makeTheme(tokens, variants, modes, globals),
    [tokens, variants, modes, globals],
  )

  const theme = useMemo(
    () =>
      ({
        ...baseTheme,
        mode: themeMode,
        tokens: {
          ...baseTheme.tokens,
          ...(themeMode && baseTheme?.modes?.[themeMode]?.tokens),
        },
        variants: extendVariants(
          baseTheme.variants,
          themeMode ? baseTheme?.modes?.[themeMode]?.variants : {},
        ),
        globals: {
          ...baseTheme.globals,
          ...(themeMode && baseTheme?.modes?.[themeMode]?.globals),
        },
      }) as DefaultTheme,
    [baseTheme, themeMode],
  )

  return (
    <ShallotContext.Provider value={{ theme, themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>
        {includeGlobalStyle && <GlobalStyle theme={theme} />}
        {children}
      </ThemeProvider>
    </ShallotContext.Provider>
  )
}

export const useShallot = () => useContext(ShallotContext)
export const useTheme = () => useShallot().theme
export const useThemeMode = () => useShallot().themeMode
