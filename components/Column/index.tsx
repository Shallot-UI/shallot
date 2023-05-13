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

type ColumnShallot = ShallotProp

export type ColumnStyleProps = {
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

export type ColumnProps<T = {}> = T &
  ColumnStyleProps & { shallot?: ColumnShallot }

export const withColumnStyleProps =
  <T,>(ColumnComponent: ComponentType<T & { shallot?: ColumnShallot }>) =>
  (props: ColumnProps<T>) => {
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
      alignTop,
      alignMiddle,
      alignBottom,
      alignLeft,
      alignCenter,
      alignRight,
      grow,
      shrink,
      flex,
      ...nonStyleProps
    } = props

    let boxShallot: ColumnShallot = {
      display: 'flex',
      flexDirection: 'column',
      ...(radius && { borderRadius: getRadius(radius) }),
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
    }

    boxShallot = applyStyles(boxShallot, shallot)

    return <ColumnComponent {...(nonStyleProps as T)} shallot={boxShallot} />
  }
