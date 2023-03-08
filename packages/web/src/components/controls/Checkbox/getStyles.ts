import { applyStyles } from '../../../utils'
import {
  CheckboxComponentStyles,
  CheckboxProps,
  CheckboxState,
  CheckboxStyleProps,
} from './types'

export const getCheckboxStyles = (
  props: CheckboxStyleProps & Omit<CheckboxProps, 'getStyles'>,
) => {
  const {
    // General
    color = 'Primary',
    size = 4 / 3,
    iconSize = 1,
    radius = 'sm',

    // Units Around
    unitsAround,
    unitsAbove,
    unitsBelow,
    unitsLeft,
    unitsRight,

    // Non-Style Props
    ...buttonProps
  } = props

  return {
    ...buttonProps,
    getStyles: (state: CheckboxState) => {
      let styles: CheckboxComponentStyles = {
        container: {
          cursor: 'pointer',
          backgroundColor: 'Shading.125',
          borderColor: 'Shading.250',
          borderWidth: 1,
          transition: `
            border-color 0.2s ease-in-out,
            background-color 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out
          `,
          // Configurable
          unitHeight: size,
          unitWidth: size,
          // Layout
          alignCenter: true,
          alignMiddle: true,
        },
        icon: {
          unitHeight: iconSize,
          unitWidth: iconSize,
          fillColor: 'Shading.100',
          display: false,
        },
      }

      // Focused
      if (state.focused)
        styles = applyStyles(styles, {
          container: { elevation: 'focused' },
        })

      // Hovered
      if (state.hovered)
        styles = applyStyles(styles, {
          container: { backgroundColor: 'Shading.100' },
        })

      // Checked
      if (state.checked)
        styles = applyStyles(styles, {
          container: {
            backgroundColor: `${color}.300`,
            borderColor: `${color}.300`,
          },
          icon: { display: 'block' },
        })

      // Hovered and Checked
      if (state.hovered && state.checked)
        styles = applyStyles(styles, {
          container: {
            backgroundColor: `${color}.250`,
            borderColor: `${color}.250`,
          },
        })

      styles = applyStyles(styles, {
        container: {
          radius,
          unitsAround,
          unitsAbove,
          unitsBelow,
          unitsLeft,
          unitsRight,
        },
      })

      return styles
    },
  }
}
