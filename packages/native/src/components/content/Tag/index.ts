import { applyStyles, withStyleProps } from '../../../utils'
import { StatefulTag } from './Components'
import { TagProps, TagStyleProps, TagComponentStyles } from './types'

export * from './Components'
export * from './types'

export const Tag = withStyleProps<TagStyleProps, TagProps>(
  StatefulTag,
  (props) => {
    const {
      // General
      color = 'Shading',
      radius = 'sm',
      animation,
      outline,

      // Typography
      typeface,
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

    return {
      ...buttonProps,
      getStyles: () => {
        let styles: TagComponentStyles = {
          container: {
            backgroundColor: `${color}.125`,
            transition: `
              background-color 200ms ease-in-out,
              border-color 300ms ease-in-out,
              transform 300ms ease-in-out,
              box-shadow 300ms ease-in-out
            `,
          },
          label: {
            fontSize: 'md',
            textColor: `${color}.400`,
            transition: 'color 300ms ease-in-out',
            unitsAround: 1,
            unitsAbove: 1 / 2,
            unitsBelow: 1 / 2,
            centerText: true,
            flex: 1,
          },
        }

        if (outline)
          styles = applyStyles(styles, {
            container: { backgroundColor: 'Shading.100' },
            label: { textColor: `${color}.300` },
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
