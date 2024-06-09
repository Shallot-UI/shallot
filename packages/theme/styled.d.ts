// styled.d.ts
import { Theme } from './src/theme'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
