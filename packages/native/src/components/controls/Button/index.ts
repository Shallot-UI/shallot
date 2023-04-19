import { applyStyles, withStyleProps } from '../../../utils'
import { StatefulButton } from './Components'
import { ButtonProps, ButtonStyleProps, ButtonComponentStyles } from './types'

export * from './Components'
export * from './types'

export const Button = withStyleProps<ButtonStyleProps, ButtonProps>(
  StatefulButton,
  (props) => {
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

      // Underline
      underline,

      // Non-Style Props
      ...buttonProps
    } = props

    // If the button uses the Shading color, we switch to the shading
    // foreground color rather than the mid-range color. This is because other
    // palette colors extend to shades darker and lighter than their foreground.
    const defaultShade = color === 'Shading' ? 500 : 300

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
            fontSize: 'md',
            textColor: 'Shading.100',
            transition: 'color 300ms ease-in-out',
            unitsAround: 2,
            unitsAbove: 1,
            unitsBelow: 1,
            centerText: true,
            flex: 1,
            cursor: 'pointer',
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
  },
)
