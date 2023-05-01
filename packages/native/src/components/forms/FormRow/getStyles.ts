import { applyStyles } from '@shallot-ui/core'

import {
  FormRowComponentStyles,
  FormRowProps,
  FormRowStyleProps,
} from './types'

export const getFormRowStyles = (props: FormRowStyleProps & FormRowProps) => {
  const {
    // Typography
    typeface,
    font,

    labelColor,
    labelFontSize,

    // Units Around
    unitsAround,
    unitsAbove,
    unitsBelow,
    unitsLeft,
    unitsRight,

    // Non-Style Props
    ...formRowProps
  } = props

  return {
    ...formRowProps,
    getStyles: () => {
      let styles: FormRowComponentStyles = {
        container: { alignMiddle: true, ...props },
        label: {
          // lineHeight: 'md',
          // letterSpacing: 'md',
          typeface: 'Body',
          cursor: 'pointer',
          fontSize: labelFontSize || 'md',
          textColor: labelColor || 'Shading.400',
        },
        details: { unitsLeft: 1 },
        requiredStar: { typeface: 'Body', textColor: 'Danger.300' },
        helperText: {
          fontSize: 'sm',
          textColor: 'Shading.275',
          transition: 'color 350ms ease-in-out',
          typeface: 'Body',
          unitsAbove: 1 / 4,
        },
        errorText: {
          fontSize: 'sm',
          textColor: 'Danger.300',
          typeface: 'Body',
          unitsAbove: 1 / 4,
        },
      }

      styles = applyStyles(styles, {
        container: {
          unitsAround,
          unitsAbove,
          unitsBelow,
          unitsLeft,
          unitsRight,
        },
        label: { typeface, font },
        requiredStar: { typeface, font },
        helperText: { typeface, font },
        errorText: { typeface, font },
      })

      return styles
    },
  }
}
