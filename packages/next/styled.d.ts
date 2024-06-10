import { DEFAULT_NEXT_THEME } from '@shallot-ui/platform-nextjs'
import 'styled-components'

type Theme = typeof DEFAULT_NEXT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
