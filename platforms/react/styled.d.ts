import { DEFAULT_REACT_THEME } from './src'
import 'styled-components'

type Theme = typeof DEFAULT_REACT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
