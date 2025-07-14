import { ComponentType } from 'react'
import { useTheme } from 'styled-components'
import { applyStyles } from '@shallot-ui/core-utils'
import {
  getColor,
  getShadow,
  getRadius,
  getUnits,
  getVariant,
  getGlobal,
} from '@shallot-ui/core-mixins'

import { CheckboxProps, CheckboxShallot } from './types'

export * from './types'

export const withCheckboxStyleProps =
  <T,>(CheckboxComponent: ComponentType<T>) =>
  (props: CheckboxProps<T>) => {
    const {
      color = 'Primary',
      size = 4 / 3,
      iconSize = 3 / 4,
      radius = 'sm',

      shallot,
      variant = 'Default',

      ...checkboxProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<CheckboxShallot>(
      'Checkbox',
      variant,
    )({ theme })

    let checkboxShallot: CheckboxShallot = {
      Container: {
        backgroundColor: getGlobal('backgroundColor'),
        borderColor: getGlobal('borderColor'),
        borderRadius: getRadius(String(radius)),
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
          backgroundColor: getColor(String(color), 400),
          borderColor: getColor(String(color), 400),
        },
      },
      ':checked': {
        Icon: { display: 'flex' },
        Container: {
          backgroundColor: getColor(String(color), 500),
          borderColor: getColor(String(color), 500),
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
