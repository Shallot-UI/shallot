import { ComponentType } from 'react'
import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getRadius,
  getLetterSpacing,
  getLineHeight,
  getFontSize,
  getUnits,
  ShallotProp,
  getElevation,
} from '@shallot-ui/core'

export type ButtonStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
  outline?: boolean
  underline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  textAlign?: CSSObject['textAlign']
}

export type ButtonShallot = {
  container: ShallotProp<CSSObject>
  title: ShallotProp<CSSObject>
}

export type ButtonState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export type ButtonProps<T> = T &
  ButtonStyleProps & {
    shallot?: ButtonShallot
    state?: ButtonState
  }

export const withButtonStyleProps =
  <T,>(ButtonComponent: ComponentType<T>) =>
  (props: ButtonProps<T>) => {
    const {
      // General
      color = 'Shading',
      radius = 'md',
      outline,

      // Typography
      // typeface = 'Body',
      // font = 'Bold',
      letterSpacing = 'md',
      fontSize = 'md',

      // Casing
      uppercase,

      // Text Alignment
      textAlign = 'center',

      verticalUnitPadding = 1,
      horizontalUnitPadding = 2,

      // Underline
      underline,

      shallot,
      state = {},

      ...buttonProps
    } = props

    // If the button uses the Shading color, we switch to the shading
    // foreground color rather than the mid-range color. This is because other
    // palette colors extend to shades darker and lighter than their foreground.
    const shades: Record<string, keyof DefaultTheme['colors']['Shading']> =
      color === 'Shading'
        ? { default: 500, hovered: 450, pressed: 500, focused: 450 }
        : { default: 300, hovered: 250, pressed: 350, focused: 300 }

    let buttonShallot: ButtonShallot = {
      container: {
        elevation: getElevation('pressable'),
        borderRadius: getRadius(radius),
        backgroundColor: getColor(color, shades.default),
        borderColor: getColor(color, shades.default),
        borderWidth: 2,
        cursor: 'pointer',
        transition: `
          background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out,
          transform 0.2s ease-in-out
        `,
      },
      title: {
        display: 'block',
        textAlign,
        typeface: 'Body',
        flex: 1,
        color: getColor('Shading', 100),
        fontSize: getFontSize(fontSize),
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        textDecoration: underline ? 'underline' : 'none',
        textTransform: uppercase ? 'uppercase' : 'none',
        letterSpacing: getLetterSpacing(letterSpacing),
        lineHeight: getLineHeight(fontSize),
      },
    }

    if (state.hovered)
      buttonShallot = applyStyles(buttonShallot, {
        container: {
          elevation: getElevation('hover'),
          backgroundColor: getColor(color, shades.hovered),
          borderColor: getColor(color, shades.hovered),
        },
      })

    if (state.pressed)
      buttonShallot = applyStyles(buttonShallot, {
        container: {
          elevation: getElevation('pressed'),
          backgroundColor: getColor(color, shades.pressed),
          borderColor: getColor(color, shades.pressed),
        },
      })

    if (state.focused)
      buttonShallot = applyStyles(buttonShallot, {
        container: { elevation: getElevation('focused') },
      })

    if (outline)
      buttonShallot = applyStyles(buttonShallot, {
        container: { backgroundColor: getColor('Shading', 100) },
        title: { textColor: getColor(color, shades.default) },
      })

    buttonShallot = applyStyles(buttonShallot, {
      container: shallot?.container,
      title: shallot?.title,
    })

    return <ButtonComponent {...(buttonProps as T)} shallot={buttonShallot} />
  }
