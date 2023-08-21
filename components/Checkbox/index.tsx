import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getShadow,
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

export type BaseCheckboxShallot = {
  container?: ShallotProp
  icon?: ShallotProp
}

export type CheckboxShallot = BaseCheckboxShallot & {
  ':focus'?: BaseCheckboxShallot
  ':hover'?: BaseCheckboxShallot
  ':checked'?: BaseCheckboxShallot
  ':disabled'?: BaseCheckboxShallot
}

// export type CheckboxState = {
//   disabled?: boolean
//   focused?: boolean
//   hovered?: boolean
//   checked?: boolean
// }

export type CheckboxProps<T> = T &
  CheckboxStyleProps & {
    shallot?: CheckboxShallot
    // state?: CheckboxState
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
      // state = {},

      variant = 'default',

      ...checkboxProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.Checkbox?.[variant] as
      | Variant<CheckboxShallot>
      | undefined

    let checkboxShallot: CheckboxShallot = {
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
      ':focus': {
        container: {
          boxShadow: getShadow('focused'),

          // Variants (overrides)
          ...themeVariant?.state?.focused?.container,
        },
      },
      ':hover': {
        container: {
          backgroundColor: getColor('Shading', 100),

          // Variants (overrides)
          ...themeVariant?.state?.hovered?.container,
        },
      },
      ':checked': {
        container: {
          backgroundColor: getColor(color, 500),
          borderColor: getColor(color, 500),

          // Variants (overrides)
          ...themeVariant?.state?.checked?.container,
        },
      },
      ':disabled': {
        container: {},
      },
    }

    return (
      <CheckboxComponent {...(checkboxProps as T)} shallot={checkboxShallot} />
    )
  }
