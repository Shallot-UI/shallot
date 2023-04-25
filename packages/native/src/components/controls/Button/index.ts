import { DefaultTheme } from 'styled-components'
import { TextAlignProps } from '@shallot-ui/theme'

import { applyStyles, withStyleProps } from '../../../utils'
import { StatefulButton } from './Components'
import { ButtonProps, ButtonStyleProps, ButtonComponentStyles } from './types'

export * from './Components'
export * from './types'

export const Button = withStyleProps<
  ButtonStyleProps,
  ButtonProps,
  TextAlignProps & {
    verticalUnitPadding?: number
    horizontalUnitPadding?: number
  }
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

    verticalUnitPadding = 1,
    horizontalUnitPadding = 2,

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
    getStyles: () => {
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
          display: buttonProps.title ? 'block' : 'none',

          fontSize: 'md',
          textColor: 'Shading.100',
          backgroundColor: 'Danger.300',
          transition: 'color 300ms ease-in-out',
          unitsLeft: horizontalUnitPadding,
          unitsRight: horizontalUnitPadding,
          unitsAbove: verticalUnitPadding,
          unitsBelow: verticalUnitPadding,
          grow: true,
          cursor: 'pointer',
          leftText,
          rightText,
          centerText: !leftText && !rightText,
        },
      }

      if (outline)
        styles = applyStyles(styles, {
          container: { backgroundColor: 'Shading.100' },
          label: { textColor: `${color}.${defaultShade}` },
        })

      styles = applyStyles(styles, {
        container: {
          radius,
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
          fontSize,
          textColor,
        },
      })

      return styles
    },
  }
})
