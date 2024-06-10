import { NextTheme } from './src'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends NextTheme {}
}
