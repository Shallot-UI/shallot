import { applyStyles } from '../../../utils'
import {
  InputComponentStyles,
  InputProps,
  InputState,
  InputStyleProps,
} from './types'

export const getInputStyles = (
  props: InputStyleProps & Omit<InputProps, 'getStyles'>,
) => {
  const {
    // General
    backgroundColor = 'Shading.125',
    borderColor = 'Shading.200',
    focusedBackgroundColor = 'Shading.100',
    focusedBorderColor = 'Primary.300',
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
          fontSize: 'md',
          unitsAround: 3 / 4,
          grow: true,
          letterSpacing: 'md',
        },
      }

      if (state.focused)
        styles = applyStyles(styles, {
          container: {
            elevation: 'focused',
            backgroundColor: focusedBackgroundColor,
            borderColor: focusedBorderColor,
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
          animation,
          borderWidth,
          borderPosition,
        },
        input: {
          font,
          typeface,
          fontSize,
          lineHeight,
          letterSpacing,
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
