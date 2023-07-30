import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getElevation,
  getRadius,
  getUnits,
} from '@shallot-ui/core'

export type CheckboxStyleProps = {
  color?: ColorName
  size?: number
  iconSize?: number
  radius?: keyof DefaultTheme['radii']

  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
}

export type CheckboxShallot = {
  container: ShallotProp
  icon: ShallotProp
}

export type CheckboxState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export type CheckboxProps<T> = T &
  CheckboxStyleProps & {
    shallot?: CheckboxShallot
    state?: CheckboxState
    variant?: string
  }

export const withCheckboxStyleProps =
  <T,>(CheckboxComponent: ComponentType<T>) =>
  (props: CheckboxProps<T>) => {
    const {
      color = 'Primary',
      size = 4 / 3,
      iconSize = 1,
      radius = 'sm',

      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,

      shallot,
      state = {},

      variant = 'default',

      ...checkboxProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.Checkbox?.[variant] as
      | Variant<CheckboxShallot>
      | undefined

    console.log(themeVariant)

    let styles: CheckboxShallot = {
      container: {
        backgroundColor: getColor('Shading', 100),
        borderColor: getColor('Shading', 300),
        borderRadius: getRadius(radius),
        borderWidth: 1,
        borderStyle: 'solid',
        transition: `
          border-color 0.2s ease-in-out,
          background-color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out
        `,
        // Configurable
        height: getUnits(size),
        width: getUnits(size),
        // Layout
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        // Units
        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),

        // Variants (overrides)
        ...themeVariant?.container,
      },
      icon: {
        height: getUnits(iconSize),
        width: getUnits(iconSize),
        fillColor: getColor('Shading', 500),
        display: 'none',

        // Variants (overrides)
        ...themeVariant?.icon,
      },
    }

    // Focused
    if (state.focused)
      styles = applyStyles(styles, {
        container: {
          ...getElevation('focused'),

          // Variants (overrides)
          ...themeVariant?.state?.focused?.container,
        },
      })

    // Hovered
    if (state.hovered)
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor('Shading', 100),

          // Variants (overrides)
          ...themeVariant?.state?.hovered?.container,
        },
      })

    // Checked
    if (state.checked)
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor(color, 500),
          borderColor: getColor(color, 500),

          // Variants (overrides)
          ...themeVariant?.state?.checked?.container,
        },
        icon: {
          display: 'block',

          // Variants (overrides)
          ...themeVariant?.state?.checked?.icon,
        },
      })

    // Hovered and Checked
    if (state.hovered && state.checked)
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor(color, 500),
          borderColor: getColor(color, 500),

          // Variants (overrides)
          // Defaults to the styles applied to the checked state
          ...themeVariant?.state?.checked?.container,
        },
      })

    styles = applyStyles(styles, {
      container: shallot?.container,
      icon: shallot?.icon,
    })

    return <CheckboxComponent {...(checkboxProps as T)} shallot={styles} />
  }
