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

type FoldShallot = ShallotProp

export type FoldStyleProps = {
  backgroundColor?: AllColorShades
  borderColor?: AllColorShades
  textColor?: AllColorShades
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
  alignTop?: boolean
  alignMiddle?: boolean
  alignBottom?: boolean
  alignLeft?: boolean
  alignCenter?: boolean
  alignRight?: boolean
  grow?: boolean | number
  shrink?: boolean | number
  flex?: boolean | number
}

export type FoldProps<T = {}> = T & FoldStyleProps & { shallot?: FoldShallot }

export const withFoldStyleProps =
  <T,>(FoldComponent: ComponentType<T & { shallot?: FoldShallot }>) =>
  (props: FoldProps<T>) => {
    const {
      backgroundColor,
      borderColor,
      textColor,
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
      alignTop,
      alignMiddle,
      alignBottom,
      alignLeft,
      alignCenter,
      alignRight,
      fullWidth,
      fullHeight,
      grow,
      shrink,
      flex,
      ...nonStyleProps
    } = props

    let boxShallot: FoldShallot = {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100vw',
      ...(radius && { borderRadius: getRadius(radius) }),
      ...(textColor && { color: getColorShade(textColor) }),
      ...(backgroundColor && {
        backgroundColor: getColorShade(backgroundColor),
      }),
      ...(borderColor && { borderColor: getColorShade(borderColor) }),
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
      ...(alignTop && { justifyContent: 'flex-start' }),
      ...(alignMiddle && { justifyContent: 'center' }),
      ...(alignBottom && { justifyContent: 'flex-end' }),
      ...(alignLeft && { alignItems: 'flex-start' }),
      ...(alignCenter && { alignItems: 'center' }),
      ...(alignRight && { alignItems: 'flex-end' }),
    }

    boxShallot = applyStyles(boxShallot, shallot)

    return <FoldComponent {...(nonStyleProps as T)} shallot={boxShallot} />
  }