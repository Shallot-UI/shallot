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
  ThemeModes,
  ThemeTokens,
  ThemeVariants,
  makeTheme,
} from '@shallot-ui/core-theme'
import {
  GlobalStyle,
  GlobalStyleProps,
  webVariants,
  reactThemeModes,
} from '@shallot-ui/platform-react'
import { DEFAULT_NEXT_THEME } from '@shallot-ui/platform-nextjs'
import { applyStyles } from '@shallot-ui/core-utils'

type ShallotContextValue = {
  theme: DefaultTheme
  themeMode: string | undefined
  setThemeMode: (mode: string) => void
  clearThemeMode: () => void
}

export const ShallotContext = createContext<ShallotContextValue>({
  theme: DEFAULT_NEXT_THEME,
  themeMode: undefined,
  setThemeMode: () => {
    throw new Error('ShallotContext not provided')
  },
  clearThemeMode: () => {
    throw new Error('ShallotContext not provided')
  },
})

type ShallotProviderProps = {
  children: ReactNode
  tokens?: ThemeTokens
  variants?: ThemeVariants
  modes?: ThemeModes
  includeGlobalStyle?: boolean
} & GlobalStyleProps

const extendVariants = (variants: ThemeVariants, extended?: ThemeVariants) => {
  const newVariants = { ...variants }
  Object.keys(variants).forEach((name) => {
    if (!extended?.[name]) return
    variants[name] = applyStyles(variants[name], extended[name])
  })
  return newVariants
}

export const ShallotProvider: FunctionComponent<ShallotProviderProps> = ({
  children,
  tokens = {},
  variants = webVariants,
  modes = reactThemeModes,
  includeGlobalStyle = true,
  ...rest
}: ShallotProviderProps) => {
  const [themeMode, setThemeMode] = useState<string>()
  const clearThemeMode = () => setThemeMode(undefined)

  const baseTheme = useMemo(
    () => makeTheme(tokens, variants, modes),
    [tokens, variants, modes],
  )

  const theme = useMemo(
    () =>
      ({
        ...baseTheme,
        tokens: {
          ...baseTheme.tokens,
          ...(themeMode && baseTheme?.modes?.[themeMode]?.tokens),
        },
        variants: extendVariants(
          baseTheme.variants,
          themeMode ? baseTheme?.modes?.[themeMode]?.variants : {},
        ),
      }) as DefaultTheme,
    [baseTheme, themeMode],
  )

  return (
    <ShallotContext.Provider
      value={{ theme, themeMode, setThemeMode, clearThemeMode }}
    >
      <ThemeProvider theme={theme}>
        {includeGlobalStyle && <GlobalStyle {...rest} />}
        {children}
      </ThemeProvider>
    </ShallotContext.Provider>
  )
}

export const useShallot = () => useContext(ShallotContext)
export const useTheme = () => useShallot().theme
export const useThemeMode = () => useShallot().themeMode
