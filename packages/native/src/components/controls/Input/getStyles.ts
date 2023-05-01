import { applyStyles } from '@shallot-ui/core'

import {
  InputComponentStyles,
  InputProps,
  InputState,
  InputStyleProps,
} from './types'

export const getInputStyles = (props: InputStyleProps & InputProps) => {
  const {
    // General
    backgroundColor = 'Shading.125',
    borderColor = 'Shading.200',
    radius = 'md',

    // Animation
    animation,

    // Border
    borderWidth,
    borderPosition,

    // Display
    display,

    // Elevation
    elevation,

    // Flex
    grow,
    shrink,
    wrap,

    // Typography
    font,
    typeface,
    fontSize,
    lineHeight,
    letterSpacing,

    // Units Around
    unitsAround,
    unitsAbove,
    unitsBelow,
    unitsLeft,
    unitsRight,

    // Transition
    transition,

    // Size
    unitHeight,
    unitWidth,
    fullHeight,
    fullWidth,

    // Padding
    unitsPadding,
    unitsPaddingAbove,
    unitsPaddingBelow,
    unitsPaddingLeft,
    unitsPaddingRight,

    // Non-Style Props
    ...buttonProps
  } = props

  return {
    ...buttonProps,
    getStyles: (state: InputState) => {
      let styles: InputComponentStyles = {
        container: {
          backgroundColor,
          borderColor,
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
          grow: true,
        },
      }

      if (state.focused)
        styles = applyStyles(styles, {
          container: {
            elevation: 'focused',
          },
        })

      if (state.error)
        styles = applyStyles(styles, {
          container: {
            borderColor: 'Danger.300',
            backgroundColor: 'Danger.100',
          },
        })

      styles = applyStyles(styles, {
        container: {
          unitsAround,
          unitsAbove,
          unitsBelow,
          unitsLeft,
          unitsRight,
          transition,
          unitHeight,
          unitWidth,
          display,
          elevation,
          grow,
          shrink,
          wrap,
          radius,
          borderWidth,
          borderPosition,
        },
        input: {
          font,
          typeface,
          fontSize,
          fullHeight,
          fullWidth,
          unitsPadding,
          unitsPaddingAbove,
          unitsPaddingBelow,
          unitsPaddingLeft,
          unitsPaddingRight,
        },
      })

      return styles
    },
  }
}
