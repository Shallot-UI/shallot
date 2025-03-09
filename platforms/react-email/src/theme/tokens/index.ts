import {
  ThemeTokens,
  makeThemeTokens,
  mergeThemeTokens,
} from '@shallot-ui/core-theme'

const System = 'system-ui, Roboto, Helvetica, Arial, sans-serif'

const Monospace = `ui-monospace, Menlo, Monaco, Cascadia Mono, Segoe UI Mono, \
Roboto Mono, Oxygen Mono, Ubuntu Monospace, Source Code Pro, Fira Mono, \
Droid Sans Mono, Courier New, monospace`

export const REACT_EMAIL_THEME_TOKENS = makeThemeTokens({
  fontFamilies: {
    System,
    Body: System,
    Display: System,
    UI: System,
    Monospace,
  },
})

export const makeReactEmailThemeTokens = <T extends Readonly<ThemeTokens>>(
  tokens?: T,
) => mergeThemeTokens(REACT_EMAIL_THEME_TOKENS, tokens)
