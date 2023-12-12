import { ComponentType } from 'react'
import { useTheme } from 'styled-components'
import {
  getColor,
  getShadow,
  getRadius,
  getUnits,
  applyStyles,
  getVariant,
} from '@shallot-ui/core'

import { SwitchProps, SwitchShallot } from './types'

export * from './types'

export const withSwitchStyleProps =
  <T,>(SwitchComponent: ComponentType<T>) =>
  (props: SwitchProps<T>) => {
    const {
      color = 'Primary',
      size = 4 / 3,
      iconSize = 1,

      shallot,
      variant = 'Default',

      ...nonStyleProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<SwitchShallot>('Switch', variant)({ theme })

    let switchShallot: SwitchShallot = {
      Container: {
        width: getUnits(2 * size - 1 / 3),
        height: getUnits(size),
        borderRadius: getRadius('pill'),
        backgroundColor: getColor('Shading', 200),
        borderColor: getColor('Shading', 200),
        position: 'relative',
        cursor: 'pointer',
        borderWidth: 1,
        borderStyle: 'solid',
        transition: `
          background-color 500ms ease-in-out,
          border-color 500ms ease-in-out
        `,
      },
      Handle: {
        height: getUnits(size - 1 / 3),
        width: getUnits(size - 1 / 3),
        borderRadius: getRadius('pill'),
        backgroundColor: getColor('Shading', 50),
        borderColor: getColor('Shading', 200),
        borderWidth: 1,
        borderStyle: 'solid',
        position: 'absolute',
        top: 1,
        left: 1,
        transition: `
          left 200ms ease-in-out,
          border-color 500ms ease-in-out
        `,
      },
      ':focus': {
        Container: { boxShadow: getShadow('focused') },
      },
      ':checked': {
        Container: {
          backgroundColor: getColor(color, 500),
          borderColor: getColor(color, 500),
        },
        Handle: {
          backgroundColor: getColor('Shading', 50),
          borderColor: getColor('Shading', 50),
          left: size * 12 - 3,
        },
      },
    }

    switchShallot = applyStyles(switchShallot, themeVariant)
    switchShallot = applyStyles(switchShallot, shallot)

    return <SwitchComponent {...(nonStyleProps as T)} shallot={switchShallot} />
  }
