import { DEFAULT_NEXT_THEME } from './src'
import 'styled-components'

type Theme = typeof DEFAULT_NEXT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}