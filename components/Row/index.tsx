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

type RowShallot = ShallotProp

export type RowStyleProps = {
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
  wrap?: boolean | number
  borderWidth?: number
}

export type RowProps<T = {}> = T & RowStyleProps & { shallot?: RowShallot }

export const withRowStyleProps =
  <T,>(RowComponent: ComponentType<T & { shallot?: RowShallot }>) =>
  (props: RowProps<T>) => {
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
      fullWidth,
      fullHeight,
      alignTop,
      alignMiddle,
      alignBottom,
      alignLeft,
      alignCenter,
      alignRight,
      grow,
      shrink,
      flex,
      wrap,
      borderWidth,
      ...nonStyleProps
    } = props

    let boxShallot: RowShallot = {
      display: 'flex',
      flexDirection: 'row',
      borderStyle: 'solid',
      ...(radius && { borderRadius: getRadius(radius) }),
      ...(backgroundColor && {
        backgroundColor: getColorShade(backgroundColor),
      }),
      ...(textColor && { color: getColorShade(textColor) }),
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
      ...(alignTop && { alignItems: 'flex-start' }),
      ...(alignMiddle && { alignItems: 'center' }),
      ...(alignBottom && { alignItems: 'flex-end' }),
      ...(alignLeft && { justifyContent: 'flex-start' }),
      ...(alignCenter && { justifyContent: 'center' }),
      ...(alignRight && { justifyContent: 'flex-end' }),
      ...(wrap && { flexWrap: 'wrap' }),
    }

    boxShallot = applyStyles(boxShallot, shallot)

    return <RowComponent {...(nonStyleProps as T)} shallot={boxShallot} />
  }
