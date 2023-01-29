import { css, DefaultTheme } from 'styled-components'
import { ElevationProps } from '@shallot-ui/theme'

export const getElevation =
  ({ elevation }: ElevationProps) =>
  ({ theme }: { theme: DefaultTheme }) =>
    elevation
      ? css`
          ${theme.elevations[elevation]}
        `
      : ''
