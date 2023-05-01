import { DefaultTheme } from 'styled-components'
import { ElevationProps } from '@shallot-ui/theme'

export const elevation = ({ elevation }: ElevationProps) =>
  elevation
    ? ({ theme }: { theme: DefaultTheme }) => theme.elevations?.[elevation]
    : ''
