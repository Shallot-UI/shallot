import { DEFAULT_THEME } from '@repo/theme'
import 'styled-components'

type Theme = typeof DEFAULT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
