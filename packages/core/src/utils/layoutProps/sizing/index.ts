import { getFullHeight, getFullWidth, getUnits } from '../../../mixins'
import { MarginProps } from '../margin'

export type SizingProps = {
  unitHeight?: number
  unitWidth?: number
  maxUnitHeight?: number
  maxUnitWidth?: number
  minUnitHeight?: number
  minUnitWidth?: number
  fullWidth?: boolean
  fullHeight?: boolean
  unitGap?: number
  unitFlexBasis?: number
}

export const getSizingShallot = ({
  unitHeight,
  unitWidth,
  maxUnitHeight,
  maxUnitWidth,
  minUnitHeight,
  minUnitWidth,
  fullWidth,
  fullHeight,
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  unitGap,
  unitFlexBasis,
}: SizingProps & MarginProps) => ({
  ...(unitHeight !== undefined && { height: getUnits(unitHeight) }),
  ...(unitWidth !== undefined && { width: getUnits(unitWidth) }),
  ...(maxUnitHeight !== undefined && {
    maxHeight: getUnits(maxUnitHeight),
  }),
  ...(maxUnitWidth !== undefined && { maxWidth: getUnits(maxUnitWidth) }),
  ...(minUnitHeight !== undefined && {
    minHeight: getUnits(minUnitHeight),
  }),
  ...(minUnitWidth !== undefined && { minWidth: getUnits(minUnitWidth) }),
  ...(fullWidth && {
    width: getFullWidth({ unitsLeft, unitsRight, unitsAround }),
  }),
  ...(fullHeight && {
    height: getFullHeight({ unitsAbove, unitsBelow, unitsAround }),
  }),
  ...(unitGap !== undefined && { gap: getUnits(unitGap) }),
  ...(unitFlexBasis !== undefined && { flexBasis: getUnits(unitFlexBasis) }),
})
