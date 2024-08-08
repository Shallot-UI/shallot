import 'styled-components'
import { DEFAULT_NEXT_THEME } from '@shallot-ui/platform-nextjs'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode?: string
    tokens: (typeof DEFAULT_NEXT_THEME)['tokens']
    variants: (typeof DEFAULT_NEXT_THEME)['variants']
    globals: (typeof DEFAULT_NEXT_THEME)['globals']
  }
}
