import { ComponentType } from 'react'
import { DefaultTheme } from 'styled-components'
import { AllColorShades } from '@shallot-ui/theme'
import {
  ShallotProp,
  applyStyles,
  getColorShade,
  getFullHeight,
  getFullWidth,
  getRadius,
  getUnits,
} from '@shallot-ui/core'

type FoldShallot = ShallotProp

export type FoldStyleProps = {
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
}

export type FoldProps<T = {}> = T & FoldStyleProps & { shallot?: FoldShallot }

export const withFoldStyleProps =
  <T,>(FoldComponent: ComponentType<T & { shallot?: FoldShallot }>) =>
  (props: FoldProps<T>) => {
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
      ...nonStyleProps
    } = props

    let boxShallot: FoldShallot = {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100vw',
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
      ...(fullWidth && {
        width: getFullWidth({ unitsLeft, unitsRight, unitsAround }),
      }),
      ...(fullHeight && {
        height: getFullHeight({ unitsAbove, unitsBelow, unitsAround }),
      }),
    }

    boxShallot = applyStyles(boxShallot, shallot)

    return <FoldComponent {...(nonStyleProps as T)} shallot={boxShallot} />
  }
