// styled.d.ts
import DEFAULT_THEME_OPTIONS from './src/theme/defaultThemeOptions'
import 'styled-components'

type Theme = typeof DEFAULT_THEME_OPTIONS

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
