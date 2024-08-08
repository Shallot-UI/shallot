import 'styled-components'
import { DEFAULT_REACT_THEME } from '@shallot-ui/platform-react'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode?: string
    tokens: (typeof DEFAULT_REACT_THEME)['tokens']
    variants: (typeof DEFAULT_REACT_THEME)['variants']
    globals: (typeof DEFAULT_REACT_THEME)['globals']
  }
}
