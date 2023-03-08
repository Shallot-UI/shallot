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

    return {
      ...buttonProps,
      getStyles: (state) => {
        let styles: ButtonComponentStyles = {
          container: {
            backgroundColor: `${color}.300`,
            borderColor: `${color}.300`,
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
          },
        })

        return styles
      },
    }
  },
)
