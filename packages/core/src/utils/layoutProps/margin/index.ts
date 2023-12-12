import { getUnits } from '../../../mixins'

export type MarginProps = {
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
}

export const getMarginShallot = ({
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
}: MarginProps) => ({
  ...(unitsAround !== undefined && { margin: getUnits(unitsAround) }),
  ...(unitsAbove !== undefined && { marginTop: getUnits(unitsAbove) }),
  ...(unitsBelow !== undefined && { marginBottom: getUnits(unitsBelow) }),
  ...(unitsLeft !== undefined && { marginLeft: getUnits(unitsLeft) }),
  ...(unitsRight !== undefined && { marginRight: getUnits(unitsRight) }),
})

export const pullMarginProps = <T extends MarginProps>({
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  ...rest
}: T) => rest
