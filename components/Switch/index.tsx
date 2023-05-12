import { ComponentType } from 'react'
import { CSSObject } from 'styled-components'
import { ColorName } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getElevation,
  getRadius,
  getUnits,
  ShallotProp,
} from '@shallot-ui/core'

export type SwitchStyleProps = {
  color?: ColorName
  size?: number
  iconSize?: number
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
  unitHeight?: number
  unitWidth?: number
  inverted?: boolean
}

export type SwitchShallot = {
  container: ShallotProp
  handle: ShallotProp
}

export type SwitchState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export type SwitchProps<T> = T &
  SwitchStyleProps & {
    shallot?: SwitchShallot
    state?: SwitchState
  }

export const withSwitchStyleProps =
  <T,>(SwitchComponent: ComponentType<T>) =>
  (props: SwitchProps<T>) => {
    const {
      color = 'Primary',
      size = 4 / 3,
      iconSize = 1,

      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,

      inverted,

      shallot,
      state = {},

      ...nonStyleProps
    } = props

    let styles: SwitchShallot = {
      container: {
        cursor: 'pointer',
        backgroundColor: getColor('Shading', 125),
        borderColor: getColor('Shading', 200),
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: getRadius('pill'),
        transition: `
          background-color 500ms ease-in-out,
          border-color 500ms ease-in-out
        `,
        position: 'relative',
        // Configurable
        width: getUnits(2 * size - 1 / 3),
        height: getUnits(size),

        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),
      },
      handle: {
        height: getUnits(size - 1 / 3),
        width: getUnits(size - 1 / 3),
        backgroundColor: getColor('Shading', 100),
        borderColor: getColor('Shading', 200),
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: getRadius('pill'),
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
        container: { elevation: getElevation('focused') },
      })

    // Hovered
    if (state.hovered)
      styles = applyStyles(styles, {
        container: { backgroundColor: getColor('Shading', 100) },
      })

    // Checked
    if ((inverted && !state.checked) || (!inverted && state.checked))
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor(color, 300),
          borderColor: getColor(color, 300),
        },
        handle: {
          backgroundColor: getColor('Shading', 100),
          borderColor: getColor('Shading', 100),
          style: { left: size * 12 - 3 },
        },
      })

    // Hovered and Checked
    if (state.hovered && state.checked)
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor(color, 250),
          borderColor: getColor(color, 250),
        },
      })

    styles = applyStyles(styles, {
      container: shallot?.container,
      handle: shallot?.handle,
    })

    return <SwitchComponent {...(nonStyleProps as T)} shallot={styles} />
  }
