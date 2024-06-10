import { DEFAULT_WEB_THEME } from './src'
import 'styled-components'

type Theme = typeof DEFAULT_WEB_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
