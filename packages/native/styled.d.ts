import { DEFAULT_NATIVE_THEME } from '@shallot-ui/platform-react-native'
import 'styled-components'
import 'styled-components/native'

type Theme = typeof DEFAULT_NATIVE_THEME

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
