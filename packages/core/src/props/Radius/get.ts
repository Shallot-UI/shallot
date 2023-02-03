import { DefaultTheme } from 'styled-components'
import { RadiusProps } from '@shallot-ui/theme'

export const getRadius =
  ({ radius }: RadiusProps) =>
  ({ theme }: { theme: DefaultTheme }) =>
    radius ? `border-radius: ${theme.radii[radius]}px;` : ''
