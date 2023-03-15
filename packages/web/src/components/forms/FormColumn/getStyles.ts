import { applyStyles } from '../../../utils'
import {
  FormColumnComponentStyles,
  FormColumnProps,
  FormColumnStyleProps,
} from './types'

export const getFormColumnStyles = (
  props: FormColumnStyleProps & Omit<FormColumnProps, 'getStyles'>,
) => {
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
    ...formColumnProps
  } = props

  return {
    ...formColumnProps,
    getStyles: () => {
      let styles: FormColumnComponentStyles = {
        container: { alignMiddle: true },
        label: {
          typeface: 'Body',
          lineHeight: 'md',
          letterSpacing: 'md',
          fontSize: labelFontSize || 'md',
          textColor: labelColor || 'Shading.400',
        },
        details: { unitsLeft: 1 },
        requiredStar: { textColor: 'Danger.300' },
        helperText: {
          fontSize: 'sm',
          letterSpacing: 'md',
          textColor: 'Shading.275',
          unitsAbove: 1 / 4,
          transition: 'color 350ms ease-in-out',
          animation: 'fadeInDown',
          typeface: 'Body',
        },
        errorText: {
          fontSize: 'sm',
          letterSpacing: 'md',
          textColor: 'Danger.300',
          unitsAbove: 1 / 4,
          animation: 'fadeInDown',
          typeface: 'Body',
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
