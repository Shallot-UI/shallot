import { ComponentType } from 'react'
import { CSSObject, DefaultTheme } from 'styled-components'
import { AllColorShades } from '@shallot-ui/theme'
import {
  ShallotProp,
  applyStyles,
  getColorShade,
  getRadius,
  getUnits,
} from '@shallot-ui/core'

type BoxShallot = ShallotProp<CSSObject>

export type BoxStyleProps = {
  backgroundColor?: AllColorShades
  borderColor?: AllColorShades
  radius?: keyof DefaultTheme['radii']
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
  unitHeight?: number
  unitWidth?: number
  maxUnitHeight?: number
  maxUnitWidth?: number
  minUnitHeight?: number
  minUnitWidth?: number
}

export type BoxProps<T = {}> = T & BoxStyleProps & { shallot?: BoxShallot }

export const withBoxStyleProps =
  <T,>(BoxComponent: ComponentType<T & { shallot?: BoxShallot }>) =>
  (props: BoxProps<T>) => {
    const {
      backgroundColor,
      borderColor,
      radius,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,
      shallot,
      unitHeight,
      unitWidth,
      maxUnitHeight,
      maxUnitWidth,
      minUnitHeight,
      minUnitWidth,
      ...boxProps
    } = props

    let boxShallot: BoxShallot = {
      display: 'flex',
      ...(radius && { radius: getRadius(radius) }),
      ...(backgroundColor && {
        backgroundColor: getColorShade(backgroundColor),
      }),
      ...(borderColor && { borderColor: getColorShade(borderColor) }),
      ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
      ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
      ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
      ...(unitsRight && { marginRight: getUnits(unitsRight) }),
      ...(unitHeight && { height: getUnits(unitHeight) }),
      ...(unitWidth && { width: getUnits(unitWidth) }),
      ...(maxUnitHeight && { maxHeight: getUnits(maxUnitHeight) }),
      ...(maxUnitWidth && { maxWidth: getUnits(maxUnitWidth) }),
      ...(minUnitHeight && { minHeight: getUnits(minUnitHeight) }),
      ...(minUnitWidth && { minWidth: getUnits(minUnitWidth) }),
    }

    boxShallot = applyStyles(boxShallot, shallot)

    return <BoxComponent {...(boxProps as T)} shallot={boxShallot} />
  }
