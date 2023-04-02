import { applyStyles } from '../../../utils'
import {
  SwitchComponentStyles,
  SwitchProps,
  SwitchState,
  SwitchStyleProps,
} from './types'

export const getSwitchStyles = (
  props: SwitchStyleProps & Omit<SwitchProps, 'getStyles'>,
) => {
  const {
    // General
    color = 'Primary',
    size = 2,

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
    getStyles: (state: SwitchState) => {
      let styles: SwitchComponentStyles = {
        container: {
          cursor: 'pointer',
          backgroundColor: 'Shading.125',
          borderColor: 'Shading.200',
          borderWidth: 1,
          radius: 'pill',
          transition: `
            background-color 500ms ease-in-out,
            border-color 500ms ease-in-out
          `,
          style: { position: 'relative' },
          // Configurable
          unitWidth: 2 * size - 1 / 3,
          unitHeight: size,
        },
        handle: {
          unitHeight: size - 1 / 3,
          unitWidth: size - 1 / 3,
          backgroundColor: 'Shading.100',
          borderColor: 'Shading.200',
          borderWidth: 1,
          radius: 'pill',
          transition: `
            left 200ms ease-in-out,
            border-color 500ms ease-in-out
          `,
          style: {
            position: 'absolute',
            left: 1,
            top: 1,
          },
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
          handle: {
            backgroundColor: 'Shading.100',
            borderColor: 'Shading.100',
            style: { left: size * 12 - 3 },
          },
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
