import { DefaultTheme } from 'styled-components'
import { BoxProps } from '../../containers'

import { DisplayCheckboxProps } from './types'

const formControlSurface: BoxProps = {
  cursor: 'pointer',
  backgroundColor: 'Shading.125',
  borderColor: 'Shading.250',
  borderWidth: 1,
  transition: `
    border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out
  `,
}

export const getCheckboxStyles = ({
  color = 'Primary',
  size = 4 / 3,
  iconSize = 1,
  radius = 'sm',
  state = {},
}: {
  color?: 'Primary' | 'Success' | 'Danger' | 'Warning'
  size?: number
  iconSize?: number
  radius?: keyof DefaultTheme['radii']
  state?: {
    disabled?: boolean
    focused?: boolean
    hovered?: boolean
    checked?: boolean
  }
} = {}) => {
  let styles: DisplayCheckboxProps['styles'] = {
    container: {
      ...formControlSurface,
      // Configurable
      radius,
      unitHeight: size,
      unitWidth: size,
      // Layout
      alignCenter: true,
      alignMiddle: true,
    },
    icon: {
      unitHeight: iconSize,
      unitWidth: iconSize,
      fillColor: 'Shading.100',
      display: false,
    },
  }

  if (state.checked) {
    const fillColor = `${color}.300`
    styles = {
      container: {
        ...styles.container,
        borderColor: fillColor,
        backgroundColor: fillColor,
      },
      icon: { ...styles.icon, display: 'block' },
    }
  }

  if (state.hovered && state.checked) {
    const fillColor = `${color}.250`
    styles = {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: fillColor,
        borderColor: fillColor,
      },
    }
  }

  if (state.hovered && !state.checked) {
    styles = {
      ...styles,
      container: { ...styles.container, backgroundColor: 'Shading.100' },
    }
  }

  if (state.focused) {
    styles = {
      ...styles,
      container: { ...styles.container, elevation: 'focused' },
    }
  }

  return styles
}
