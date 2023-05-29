import { ComponentType } from 'react'
import { DefaultTheme } from 'styled-components'
import { AllColorShades } from '@shallot-ui/theme'
import {
  ShallotProp,
  applyStyles,
  getColorShade,
  getFullHeight,
  getFullWidth,
  getNumericValue,
  getRadius,
  getUnits,
} from '@shallot-ui/core'

type BoxShallot = ShallotProp

export type BoxStyleProps = {
  backgroundColor?: AllColorShades
  borderColor?: AllColorShades
  radius?: keyof DefaultTheme['radii']
  unitsAround?: number
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
  fullWidth?: boolean
  fullHeight?: boolean
  grow?: boolean | number
  shrink?: boolean | number
  flex?: boolean | number
  borderWidth?: number
}

export type BoxProps<T = {}> = T & BoxStyleProps & { shallot?: BoxShallot }

export const withBoxStyleProps =
  <T,>(BoxComponent: ComponentType<T & { shallot?: BoxShallot }>) =>
  (props: BoxProps<T>) => {
    const {
      backgroundColor,
      borderColor,
      radius,
      unitsAround,
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
      fullWidth,
      fullHeight,
      grow,
      shrink,
      flex,
      borderWidth,
      ...nonStyleProps
    } = props

    let boxShallot: BoxShallot = {
      display: 'flex',
      borderStyle: 'solid',
      ...(radius && { borderRadius: getRadius(radius) }),
      ...(backgroundColor && {
        backgroundColor: getColorShade(backgroundColor),
      }),
      ...(borderColor && { borderColor: getColorShade(borderColor) }),
      ...(borderWidth !== undefined && { borderWidth }),
      ...(unitsAround !== undefined && { margin: getUnits(unitsAround) }),
      ...(unitsAbove !== undefined && { marginTop: getUnits(unitsAbove) }),
      ...(unitsBelow !== undefined && { marginBottom: getUnits(unitsBelow) }),
      ...(unitsLeft !== undefined && { marginLeft: getUnits(unitsLeft) }),
      ...(unitsRight !== undefined && { marginRight: getUnits(unitsRight) }),
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
      ...(grow !== undefined && { flexGrow: getNumericValue(grow) }),
      ...(shrink !== undefined && { flexShrink: getNumericValue(shrink) }),
      ...(flex !== undefined && { flex: getNumericValue(flex) }),
    }

    boxShallot = applyStyles(boxShallot, shallot)

    return <BoxComponent {...(nonStyleProps as T)} shallot={boxShallot} />
  }
