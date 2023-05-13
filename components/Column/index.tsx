import { ComponentType } from 'react'
import { DefaultTheme } from 'styled-components'
import { AllColorShades } from '@shallot-ui/theme'
import {
  ShallotProp,
  applyStyles,
  getColorShade,
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
      ...(unitsAround && { margin: getUnits(unitsAround) }),
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

    return <ColumnComponent {...(nonStyleProps as T)} shallot={boxShallot} />
  }
