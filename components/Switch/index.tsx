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

import { SwitchProps, SwitchShallot } from './types'

export * from './types'

export const withSwitchStyleProps =
  <T,>(SwitchComponent: ComponentType<T>) =>
  (props: SwitchProps<T>) => {
    const {
      color = 'Primary',
      unitSize = 4 / 3,

      shallot,
      variant = 'Default',

      ...nonStyleProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<SwitchShallot>('Switch', variant)({ theme })

    let switchShallot: SwitchShallot = {
      Container: {
        width: getUnits(2 * unitSize - 1 / 3),
        height: getUnits(unitSize),
        borderRadius: getRadius('pill'),
        backgroundColor: getGlobal('backgroundFadeColor'),
        borderColor: 'transparent',
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
        height: getUnits(unitSize - 1 / 3),
        width: getUnits(unitSize - 1 / 3),
        borderRadius: getRadius('pill'),
        backgroundColor: getGlobal('backgroundColor'),
        borderColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        position: 'absolute',
        top: 1,
        left: 1,
        transition: 'left 200ms ease-in-out',
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
          backgroundColor: getGlobal('backgroundColor'),
          borderColor: getGlobal('backgroundColor'),
          left: unitSize * 12 - 3,
        },
      },
    }

    switchShallot = applyStyles(switchShallot, themeVariant)
    switchShallot = applyStyles(switchShallot, shallot)

    return <SwitchComponent {...(nonStyleProps as T)} shallot={switchShallot} />
  }
