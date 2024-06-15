import 'styled-components'
import 'styled-components/native'
import { DEFAULT_REACT_NATIVE_THEME } from '@shallot-ui/platform-react-native'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode?: string
    tokens: (typeof DEFAULT_REACT_NATIVE_THEME)['tokens']
    variants: (typeof DEFAULT_REACT_NATIVE_THEME)['variants']
    globals: (typeof DEFAULT_REACT_NATIVE_THEME)['globals']
  }
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    mode?: string
    tokens: (typeof DEFAULT_REACT_NATIVE_THEME)['tokens']
    variants: (typeof DEFAULT_REACT_NATIVE_THEME)['variants']
    globals: (typeof DEFAULT_REACT_NATIVE_THEME)['globals']
  }
}
