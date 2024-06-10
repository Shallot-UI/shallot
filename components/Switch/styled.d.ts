import { Theme } from '@shallot-ui/core-theme'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
