import {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
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
  const newVariants: ThemeVariants = {}
  Object.keys(variants).forEach((component) => {
    newVariants[component] = {}
    Object.keys(variants[component]).forEach((name) => {
      newVariants[component][name] = applyStyles(
        variants[component][name],
        extended?.[component]?.[name],
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
  const [mode, setMode] = useState('default')

  const baseTheme = makeTheme(tokens, variants, modes, globals)
  const theme = {
    mode,
    tokens: {
      ...baseTheme.tokens,
      ...(mode && baseTheme?.modes?.[mode]?.tokens),
    },
    variants: extendVariants(
      { ...baseTheme.variants },
      mode ? baseTheme?.modes?.[mode]?.variants : {},
    ),
    globals: {
      ...baseTheme.globals,
      ...(mode && baseTheme?.modes?.[mode]?.globals),
    },
  } as DefaultTheme

  return (
    <ShallotContext.Provider
      value={{ theme, themeMode: mode, setThemeMode: setMode }}
    >
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
