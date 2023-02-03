import { DefaultTheme } from 'styled-components'
import { SizingProps } from '@shallot-ui/theme'
import makeStaticSize from './utils/makeStaticSize'

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
    const { gridUnits } = theme
    const grid = gridUnits[0]
    return [
      unitWidth && makeStaticSize('width', unitWidth, grid),
      minUnitWidth && makeStaticSize('min-width', minUnitWidth, grid),
      maxUnitWidth && makeStaticSize('max-width', maxUnitWidth, grid),
      unitHeight && makeStaticSize('height', unitHeight, grid),
      minUnitHeight && makeStaticSize('min-height', minUnitHeight, grid),
      maxUnitHeight && makeStaticSize('max-height', maxUnitHeight, grid),
    ]
      .filter((style) => typeof style === 'string')
      .join('')
  }
