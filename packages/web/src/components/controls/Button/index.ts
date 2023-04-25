import { TextAlignProps } from '@shallot-ui/theme'
import { applyStyles, withStyleProps } from '../../../utils'
import { StatefulButton } from './Components'
import { ButtonProps, ButtonStyleProps, ButtonComponentStyles } from './types'
import { DefaultTheme } from 'styled-components'

export * from './Components'
export * from './types'

export const Button = withStyleProps<
  ButtonStyleProps,
  ButtonProps,
  TextAlignProps
>(StatefulButton, (props) => {
  const {
    // General
    color = 'Shading',
    radius = 'md',
    animation,
    outline,

    // Typography
    typeface = 'Monospace',
    font = 'Bold',
    letterSpacing = 'md',
    fontSize = 'md',

    backgroundColor,
    borderColor,
    textColor,

    // Units Around
    unitsAround,
    unitsAbove,
    unitsBelow,
    unitsLeft,
    unitsRight,

    // Casing
    uppercase,
    lowercase,
    capitalize,

    // Text Alignment
    leftText,
    rightText,
    centerText,

    // Underline
    underline,

    // Non-Style Props
    ...buttonProps
  } = props

  // If the button uses the Shading color, we switch to the shading
  // foreground color rather than the mid-range color. This is because other
  // palette colors extend to shades darker and lighter than their foreground.
  const shades: Record<string, keyof DefaultTheme['colors']['Shading']> =
    color === 'Shading'
      ? { default: 500, hovered: 450, pressed: 500, focused: 450 }
      : { default: 300, hovered: 250, pressed: 350, focused: 300 }

  return {
    ...buttonProps,
    getStyles: (state) => {
      let styles: ButtonComponentStyles = {
        container: {
          backgroundColor: `${color}.${shades.default}`,
          borderColor: `${color}.${shades.default}`,
          borderWidth: 2,
          elevation: 'pressable',
          cursor: 'pointer',
          transition: `
            background-color 200ms ease-in-out,
            border-color 200ms ease-in-out,
            transform 300ms ease-in-out,
            box-shadow 300ms ease-in-out
          `,
        },
        label: {
          // Hide the label if there is no title
          display: buttonProps.title ? 'flex' : 'none',

          fontSize: 'md',
          textColor: 'Shading.100',
          lineHeight: 'md',
          transition: 'color 300ms ease-in-out',
          unitsAround: 2,
          unitsAbove: 1,
          unitsBelow: 1,
          flex: 1,
          cursor: 'pointer',
          userSelect: 'none',
          leftText,
          rightText,
          centerText: !leftText && !rightText,
        },
      }

      if (state.hovered)
        styles = applyStyles(styles, {
          container: {
            backgroundColor: `${color}.${shades.hovered}`,
            borderColor: `${color}.${shades.hovered}`,
            elevation: 'hover',
          },
        })

      if (state.pressed)
        styles = applyStyles(styles, {
          container: {
            backgroundColor: `${color}.${shades.pressed}`,
            borderColor: `${color}.${shades.pressed}`,
            elevation: 'pressed',
          },
        })

      if (state.focused)
        styles = applyStyles(styles, {
          container: { elevation: 'focused' },
        })

      if (outline)
        styles = applyStyles(styles, {
          container: { backgroundColor: 'Shading.100' },
          label: { textColor: `${color}.${shades.default}` },
        })

      styles = applyStyles(styles, {
        container: {
          radius,
          animation,
          unitsAround,
          unitsAbove,
          unitsBelow,
          unitsLeft,
          unitsRight,
          backgroundColor,
          borderColor,
        },
        label: {
          typeface,
          font,
          underline,
          uppercase,
          lowercase,
          capitalize,
          letterSpacing,
          fontSize,
          textColor,
        },
      })

      return styles
    },
  }
})
