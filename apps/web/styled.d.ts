// styled.d.ts
import { DEFAULT_THEME } from '@shallot-ui/next'
import 'styled-components'

type Theme = typeof DEFAULT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
