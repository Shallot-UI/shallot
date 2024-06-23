import 'styled-components'

import { DEFAULT_THEME } from './src'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode?: string
    tokens: (typeof DEFAULT_THEME)['tokens']
    variants: (typeof DEFAULT_THEME)['variants']
    globals: (typeof DEFAULT_THEME)['globals']
  }
}
