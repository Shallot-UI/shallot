import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { AllColorShades, ShallotProp } from '@shallot-ui/theme'
import {
  applyStyles,
  getBreakpoints,
  getColorShade,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
  getTypeface,
  getUnits,
} from '@shallot-ui/core'

type TextShallot = ShallotProp

export type TextStyleProps = {
  textColor?: AllColorShades
  backgroundColor?: AllColorShades
  typeface?: keyof DefaultTheme['typefaces']
  font?: string
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
  leftText?: boolean
  centerText?: boolean
  rightText?: boolean

  letterSpacing?: keyof DefaultTheme['letterSpacings']
  lineHeight?: keyof DefaultTheme['lineHeights']
  fontSize?: keyof DefaultTheme['fontSizes']

  underline?: 'under' | boolean
  uppercase?: boolean
}

export type TextProps<T = {}> = T &
  TextStyleProps & { shallot?: TextShallot; variant?: string }

export const withTextStyleProps =
  <T,>(TextComponent: ComponentType<T & { shallot?: TextShallot }>) =>
  (props: TextProps<T>) => {
    const {
      textColor,
      backgroundColor,
      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,
      unitHeight,
      unitWidth,
      maxUnitHeight,
      maxUnitWidth,
      minUnitHeight,
      minUnitWidth,

      // Typography
      typeface,
      font,
      lineHeight,
      letterSpacing,
      fontSize,
      leftText,
      centerText,
      rightText,

      underline,
      uppercase,

      shallot,
      variant = 'default',

      ...nonStyleProps
    } = props

    const theme = useTheme()

    let textShallot: TextShallot = {
      display: 'flex',
      ...(theme?.variants?.Text?.[variant] as ShallotProp),
      ...(typeface && { typeface: getTypeface(typeface, font) }),
      ...(uppercase && { textTransform: 'uppercase' }),
      ...(textColor && { color: getColorShade(textColor) }),
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
      ...(leftText && { textAlign: 'left' }),
      ...(centerText && { textAlign: 'center' }),
      ...(rightText && { textAlign: 'right' }),
      ...(underline === true && { textDecoration: 'underline' }),
      ...(underline === false && { textDecoration: 'none' }),
      ...(underline === 'under' && {
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
      }),
      breakpoints: getBreakpoints({ fontSize }),
      ...(backgroundColor && {
        backgroundColor: getColorShade(backgroundColor),
      }),
    }

    textShallot = applyStyles(textShallot, shallot)

    return <TextComponent {...(nonStyleProps as T)} shallot={textShallot} />
  }
