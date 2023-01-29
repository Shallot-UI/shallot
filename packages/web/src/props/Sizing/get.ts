import { DefaultTheme } from 'styled-components'
import { SizingProps } from '@shallot-ui/theme'
import makeSize from './utils/makeSize'

export const getSizing =
  ({
    unitWidth,
    minUnitWidth,
    maxUnitWidth,
    unitHeight,
    minUnitHeight,
    maxUnitHeight,
  }: SizingProps) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const { gridUnits, breakpoints } = theme
    const grid = gridUnits[0]
    return [
      makeSize('width', unitWidth, grid, breakpoints),
      makeSize('min-width', minUnitWidth, grid, breakpoints),
      makeSize('max-width', maxUnitWidth, grid, breakpoints),
      makeSize('height', unitHeight, grid, breakpoints),
      makeSize('min-height', minUnitHeight, grid, breakpoints),
      makeSize('max-height', maxUnitHeight, grid, breakpoints),
    ].join('')
  }
