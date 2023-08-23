import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  getColor,
  getShadow,
  getRadius,
  getUnits,
  applyStyles,
} from '@shallot-ui/core'

export type CheckboxStyleProps = {
  color?: ColorName
  size?: number
  iconSize?: number
  radius?: keyof DefaultTheme['radii']
}

export type BaseCheckboxShallot = {
  Container?: ShallotProp
  Icon?: ShallotProp
}

export type CheckboxShallot = BaseCheckboxShallot & {
  ':focus'?: BaseCheckboxShallot
  ':hover'?: BaseCheckboxShallot
  ':checked'?: BaseCheckboxShallot
  ':disabled'?: BaseCheckboxShallot
}

export type CheckboxProps<T> = T &
  CheckboxStyleProps & {
    shallot?: CheckboxShallot
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

      shallot,
      variant = 'default',

      ...checkboxProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.Checkbox?.[variant] as
      | Variant<CheckboxShallot>
      | undefined

    let checkboxShallot: CheckboxShallot = {
      Container: {
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
        cursor: 'pointer',
      },
      Icon: {
        height: getUnits(iconSize),
        width: getUnits(iconSize),
        fillColor: getColor('Shading', 500),
        display: 'none',
      },
      ':focus': {
        Container: {
          boxShadow: getShadow('focused'),
        },
      },
      ':hover': {
        Container: {
          backgroundColor: getColor(color, 400),
          borderColor: getColor(color, 400),
        },
      },
      ':checked': {
        Icon: { display: 'block' },
        Container: {
          backgroundColor: getColor(color, 500),
          borderColor: getColor(color, 500),
        },
      },
      ':disabled': {},
    }

    checkboxShallot = applyStyles(checkboxShallot, themeVariant)
    checkboxShallot = applyStyles(checkboxShallot, shallot)

    return (
      <CheckboxComponent {...(checkboxProps as T)} shallot={checkboxShallot} />
    )
  }
