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
  label: ShallotProp<CSSObject>
}

export type ButtonState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export type ButtonProps<T> = T &
  ButtonStyleProps & {
    shallot: ButtonShallot
    state?: ButtonState
  }

// TODO: Update this so that getButtonStyles returns both the styles and the
// props that should be passed to the button as separate objects.

export const getButtonStyles = <T,>(
  props: ButtonProps<T>,
): [ButtonShallot, Omit<T, 'shallot' | 'state' | keyof ButtonStyleProps>] => {
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

  let styles: ButtonShallot = {
    container: {
      radius: getRadius(radius),
      backgroundColor: getColor(color, shades.default),
      borderColor: getColor(color, shades.default),
      borderWidth: 2,
      elevation: 'pressable',
      cursor: 'pointer',
    },
    label: {
      textAlign,
      typeface: 'Body',
      fontSize: getFontSize(fontSize),
      marginLeft: getUnits(horizontalUnitPadding),
      marginRight: getUnits(horizontalUnitPadding),
      marginTop: getUnits(verticalUnitPadding),
      marginBottom: getUnits(verticalUnitPadding),
      flexGrow: 1,
      textDecoration: underline ? 'underline' : 'none',
      textTransform: uppercase ? 'uppercase' : 'none',
      letterSpacing: getLetterSpacing(letterSpacing),
      lineHeight: getLineHeight(fontSize),
    },
  }

  if (state.hovered)
    styles = applyStyles(styles, {
      container: {
        backgroundColor: getColor(color, shades.hovered),
        borderColor: getColor(color, shades.hovered),
        elevation: 'hover',
      },
    })

  if (state.pressed)
    styles = applyStyles(styles, {
      container: {
        backgroundColor: getColor(color, shades.pressed),
        borderColor: getColor(color, shades.pressed),
        elevation: 'pressed',
      },
    })

  if (state.focused)
    styles = applyStyles(styles, {
      container: { elevation: 'focused' },
    })

  if (outline)
    styles = applyStyles(styles, {
      container: { backgroundColor: getColor('Shading', 100) },
      label: { textColor: getColor(color, shades.default) },
    })

  styles = applyStyles(styles, {
    container: shallot?.container,
    label: shallot?.label,
  })

  return [styles, buttonProps]
}
