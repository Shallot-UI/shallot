import { ComponentType } from 'react'
import { DefaultTheme } from 'styled-components'
import { AllColorShades } from '@shallot-ui/theme'
import {
  ShallotProp,
  applyStyles,
  getColorShade,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
  getTypeface,
  getUnits,
} from '@shallot-ui/core'

type TextShallot = ShallotProp

export type TextStyleProps<
  T extends keyof DefaultTheme['typefaces'] = 'System',
> = {
  color?: AllColorShades
  backgroundColor?: AllColorShades
  typeface?: T
  font?: keyof DefaultTheme['typefaces'][T]['fonts']
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
  centerText?: boolean

  letterSpacing?: keyof DefaultTheme['letterSpacings']
  lineHeight?: keyof DefaultTheme['lineHeights']
  fontSize?: keyof DefaultTheme['fontSizes']
}

export type TextProps<T = {}> = T & TextStyleProps & { shallot?: TextShallot }

export const withTextStyleProps =
  <T,>(TextComponent: ComponentType<T & { shallot?: TextShallot }>) =>
  (props: TextProps<T>) => {
    const {
      color,
      backgroundColor,
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

      // Typography
      typeface = 'Body',
      font,
      lineHeight = 'md',
      letterSpacing = 'md',
      fontSize = 'md',

      ...nonStyleProps
    } = props

    let textShallot: TextShallot = {
      display: 'flex',
      ...(backgroundColor && {
        backgroundColor: getColorShade(backgroundColor),
      }),
      typeface: getTypeface(typeface, font),
      ...(color && { color: getColorShade(color) }),
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
      ...(fontSize && { fontSize: getFontSize(fontSize) }),
      ...(letterSpacing && { letterSpacing: getLetterSpacing(letterSpacing) }),
      ...(lineHeight && { lineHeight: getLineHeight(lineHeight) }),
    }

    textShallot = applyStyles(textShallot, shallot)

    return <TextComponent {...(nonStyleProps as T)} shallot={textShallot} />
  }
