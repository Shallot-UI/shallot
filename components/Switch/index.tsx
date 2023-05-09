import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName } from '@shallot-ui/theme'
import { applyStyles, ShallotProp } from '@shallot-ui/core'

export type SwitchStyleProps = {
  color?: ColorName
  size?: number
  iconSize?: number
  radius?: keyof DefaultTheme['radii']
}

export type SwitchShallot = {
  container: ShallotProp<CSSObject>
  handle: ShallotProp<CSSObject>
}

export type SwitchState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export type SwitchProps<T> = T &
  SwitchStyleProps & {
    shallot: SwitchShallot
    state?: SwitchState
  }

// TODO: Update this so that getSwitchStyles returns both the styles and the
// props that should be passed to the Switch as separate objects.

export const getSwitchStyles = <T,>(
  props: SwitchProps<T>,
): [SwitchShallot, Omit<T, 'shallot' | 'state' | keyof SwitchStyleProps>] => {
  const {
    color = 'Primary',
    size = 4 / 3,
    iconSize = 1,
    radius = 'sm',

    shallot,
    state = {},

    ...nonStyleProps
  } = props

  let styles: SwitchShallot = {
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
    container: shallot?.container,
    handle: shallot?.handle,
  })

  return [styles, nonStyleProps]
}
