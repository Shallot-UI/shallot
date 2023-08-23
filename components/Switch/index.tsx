import { ComponentType } from 'react'
import { useTheme } from 'styled-components'
import { ColorName, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  getColor,
  getShadow,
  getRadius,
  getUnits,
  applyStyles,
} from '@shallot-ui/core'

export type SwitchStyleProps = {
  color?: ColorName
  size?: number
  iconSize?: number
}

type BaseSwitchShallot = {
  Container?: ShallotProp
  Handle?: ShallotProp
}

export type SwitchShallot = BaseSwitchShallot & {
  ':focus'?: BaseSwitchShallot
  ':hover'?: BaseSwitchShallot
  ':checked'?: BaseSwitchShallot
}

export type SwitchProps<T> = T &
  SwitchStyleProps & {
    shallot?: SwitchShallot
    variant?: string
    inverted?: boolean
  }

export const withSwitchStyleProps =
  <T,>(SwitchComponent: ComponentType<T>) =>
  (props: SwitchProps<T>) => {
    const {
      color = 'Primary',
      size = 4 / 3,
      iconSize = 1,

      shallot,
      variant = 'default',

      ...nonStyleProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.Switch?.[variant] as
      | Variant<SwitchShallot>
      | undefined

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
        backgroundColor: getColor('Shading', 100),
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
          backgroundColor: getColor('Shading', 100),
          borderColor: getColor('Shading', 100),
          left: size * 12 - 3,
        },
      },
    }

    switchShallot = applyStyles(switchShallot, themeVariant)
    switchShallot = applyStyles(switchShallot, shallot)

    return <SwitchComponent {...(nonStyleProps as T)} shallot={switchShallot} />
  }
