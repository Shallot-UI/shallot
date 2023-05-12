import { ComponentType } from 'react'
import { CSSObject, DefaultTheme } from 'styled-components'
import { AllColorShades } from '@shallot-ui/theme'
import {
  ShallotProp,
  applyStyles,
  getColorShade,
  getFontSize,
  getLineHeight,
  getTypeface,
  getUnits,
} from '@shallot-ui/core'

type TextShallot = ShallotProp

export type TextStyleProps = {
  textColor?: AllColorShades
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
  fontSize?: keyof DefaultTheme['fontSizes']
  lineHeight?: keyof DefaultTheme['lineHeights']
  typeface?: keyof DefaultTheme['typefaces']
  font?: string
}

export type TextProps<T = {}> = T & TextStyleProps & { shallot?: TextShallot }

export const withTextStyleProps =
  <T,>(TextComponent: ComponentType<T & { shallot?: TextShallot }>) =>
  (props: TextProps<T>) => {
    const {
      textColor,
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
      typeface = 'Body',
      fontSize,
      lineHeight,
      font,
      ...boxProps
    } = props

    let boxShallot: TextShallot = {
      display: 'flex',
      typeface: getTypeface(typeface, font),
      ...(fontSize && { fontSize: getFontSize(fontSize) }),
      ...(lineHeight && { lineHeight: getLineHeight(lineHeight) }),
      ...(textColor && { color: getColorShade(textColor) }),
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

    return <TextComponent {...(boxProps as T)} shallot={boxShallot} />
  }
