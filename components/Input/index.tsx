import { ComponentType } from 'react'
import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName, ColorShadingValue } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getColorShade,
  getElevation,
  getFontSize,
  getLetterSpacing,
  getRadius,
  getTypeface,
  getUnits,
  ShallotProp,
} from '@shallot-ui/core'

export type InputStyleProps = {
  colors?: {
    default: {
      background: [ColorName, ColorShadingValue]
      border: [ColorName, ColorShadingValue]
    }
    focused: {
      background: [ColorName, ColorShadingValue]
      border: [ColorName, ColorShadingValue]
    }
    error: {
      background: [ColorName, ColorShadingValue]
      border: [ColorName, ColorShadingValue]
    }
  }
  radius?: keyof DefaultTheme['radii']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
  outline?: boolean
  underline?: boolean
  uppercase?: boolean
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
  textAlign?: CSSObject['textAlign']
  typeface?: keyof DefaultTheme['typefaces']
  font?: string
}

export type InputShallot = {
  container: ShallotProp
  input: ShallotProp
}

export type InputState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
  error?: boolean
}

export type InputProps<T> = T &
  InputStyleProps & {
    shallot?: InputShallot
    state?: InputState
  }

export const withInputStyleProps =
  <T,>(InputComponent: ComponentType<T>) =>
  (props: InputProps<T>) => {
    const {
      // General
      radius = 'md',
      outline,

      // Colors
      colors = {
        default: {
          background: ['Shading', 50],
          border: ['Shading', 500],
        },
        focused: {
          background: ['Shading', 50],
          border: ['Shading', 500],
        },
        error: {
          background: ['Danger', 100],
          border: ['Danger', 500],
        },
      },

      // Typography
      // typeface = 'Body',
      // font = 'Bold',
      letterSpacing = 'md',
      fontSize = 'md',

      // Casing
      uppercase,

      // Text Alignment
      textAlign = 'center',

      // Underline
      underline,

      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,

      shallot,
      state = {},

      typeface = 'Body',
      font = 'Bold',

      ...inputProps
    } = props

    let styles: InputShallot = {
      container: {
        display: 'flex',
        backgroundColor: getColor(...colors.default?.background),
        borderColor: getColor(...colors.default?.border),
        borderRadius: getRadius(radius),
        cursor: 'text',
        borderWidth: 1,
        borderStyle: 'solid',
        transition: `
          border-color 0.2s ease-in-out,
          background-color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out
        `,
        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),
      },
      input: {
        unitWidth: 1,
        backgroundColor: 'transparent',
        color: getColorShade('Shading.900'),
        placeholderColor: getColorShade('Shading.500'),
        fontSize: getFontSize('md'),
        margin: getUnits(3 / 4),
        flexGrow: 1,
        letterSpacing: getLetterSpacing('md'),
        typeface: getTypeface(typeface, font),
      },
    }

    if (state.focused)
      styles = applyStyles(styles, {
        container: {
          elevation: getElevation('focused'),
          backgroundColor: getColor(...colors.focused?.background),
          borderColor: getColor(...colors.focused?.border),
        },
      })

    if (state.error)
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor(...colors.error?.background),
          borderColor: getColor(...colors.error?.border),
        },
      })

    styles = applyStyles(styles, {
      container: shallot?.container,
      input: shallot?.input,
    })

    return <InputComponent {...(inputProps as T)} shallot={styles} />
  }
