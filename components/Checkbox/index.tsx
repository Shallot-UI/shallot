import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName } from '@shallot-ui/theme'
import { applyStyles, ShallotProp } from '@shallot-ui/core'

export type CheckboxStyleProps = {
  color?: ColorName
  size?: number
  iconSize?: number
  radius?: keyof DefaultTheme['radii']
}

export type CheckboxShallot = {
  container: ShallotProp<CSSObject>
  icon: ShallotProp<CSSObject>
}

export type CheckboxState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export type CheckboxProps<T> = T &
  CheckboxStyleProps & {
    shallot: CheckboxShallot
    state?: CheckboxState
  }

// TODO: Update this so that getCheckboxStyles returns both the styles and the
// props that should be passed to the Checkbox as separate objects.

export const getCheckboxStyles = <T,>(
  props: CheckboxProps<T>,
): [
  CheckboxShallot,
  Omit<T, 'shallot' | 'state' | keyof CheckboxStyleProps>,
] => {
  const {
    color = 'Primary',
    size = 4 / 3,
    iconSize = 1,
    radius = 'sm',

    shallot,
    state = {},

    ...CheckboxProps
  } = props

  let styles: CheckboxShallot = {
    container: {
      cursor: 'pointer',
      backgroundColor: 'Shading.125',
      borderColor: 'Shading.250',
      borderWidth: 1,
      transition: `
        border-color 0.2s ease-in-out,
        background-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out
      `,
      // Configurable
      unitHeight: size,
      unitWidth: size,
      // Layout
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      unitHeight: iconSize,
      unitWidth: iconSize,
      fillColor: 'Shading.100',
      display: 'none',
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
      icon: { display: 'block' },
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
    icon: shallot?.icon,
  })

  return [styles, CheckboxProps]
}
