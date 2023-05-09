import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName, ColorShadingValue } from '@shallot-ui/theme'
import { applyStyles, getColor, ShallotProp } from '@shallot-ui/core'

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
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  textAlign?: CSSObject['textAlign']
}

export type InputShallot = {
  container: ShallotProp<CSSObject>
  input: ShallotProp<CSSObject>
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
    shallot: InputShallot
    state?: InputState
  }

// TODO: Update this so that getInputStyles returns both the styles and the
// props that should be passed to the button as separate objects.

export const getInputStyles = <T,>(
  props: InputProps<T>,
): [InputShallot, Omit<T, 'shallot' | 'state' | keyof InputStyleProps>] => {
  const {
    // General
    radius = 'md',
    outline,

    // Colors
    colors = {
      default: {
        background: ['Shading', 125],
        border: ['Shading', 250],
      },
      focused: {
        background: ['Shading', 125],
        border: ['Shading', 250],
      },
      error: {
        background: ['Danger', 100],
        border: ['Danger', 300],
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

    verticalUnitPadding = 1,
    horizontalUnitPadding = 2,

    // Underline
    underline,

    shallot,
    state = {},

    ...buttonProps
  } = props

  let styles: InputShallot = {
    container: {
      backgroundColor: getColor(...colors.default?.background),
      borderColor: getColor(...colors.default?.border),
      radius,
      cursor: 'text',
      borderWidth: 1,
      transition: `
        border-color 0.2s ease-in-out,
        background-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out
      `,
    },
    input: {
      unitWidth: 1,
      backgroundColor: 'transparent',
      textColor: 'Shading.500',
      placeholderColor: 'Shading.300',
      fontSize: 'md',
      unitsAround: 3 / 4,
      flexGrow: 1,
      letterSpacing: 'md',
    },
  }

  if (state.focused)
    styles = applyStyles(styles, {
      container: {
        elevation: 'focused',
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

  return [styles, buttonProps]
}
