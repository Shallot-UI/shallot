import { Theme } from './src'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
