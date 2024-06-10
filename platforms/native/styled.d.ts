import { NativeTheme } from '@/theme'
import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme extends NativeTheme {}
}
