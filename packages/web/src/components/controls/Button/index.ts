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
    color = 'Primary',
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
  const defaultShade = (
    color === 'Shading' ? 500 : 300
  ) as keyof DefaultTheme['colors']['Shading']

  return {
    ...buttonProps,
    getStyles: (state) => {
      let styles: ButtonComponentStyles = {
        container: {
          backgroundColor: `${color}.${defaultShade}`,
          borderColor: `${color}.${defaultShade}`,
          borderWidth: 2,
          elevation: 'pressable',
          cursor: 'pointer',
          transition: `
              background-color 200ms ease-in-out,
              border-color 300ms ease-in-out,
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
            backgroundColor: `${color}.250`,
            borderColor: `${color}.250`,
            elevation: 'hover',
          },
        })

      if (state.pressed)
        styles = applyStyles(styles, {
          container: {
            backgroundColor: `${color}.350`,
            borderColor: `${color}.350`,
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
          label: { textColor: `${color}.300` },
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
