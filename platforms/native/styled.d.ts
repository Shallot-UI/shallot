// styled.d.ts
import { DEFAULT_THEME } from '@repo/theme'
import 'styled-components/native'

type Theme = typeof DEFAULT_THEME

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
