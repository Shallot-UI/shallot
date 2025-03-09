import 'styled-components'
import { DEFAULT_REACT_EMAIL_THEME } from '@shallot-ui/platform-react-email'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode?: string
    tokens: (typeof DEFAULT_REACT_EMAIL_THEME)['tokens']
    variants: (typeof DEFAULT_REACT_EMAIL_THEME)['variants']
    globals: (typeof DEFAULT_REACT_EMAIL_THEME)['globals']
  }
}
