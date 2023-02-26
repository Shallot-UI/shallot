import { DefaultTheme } from 'styled-components'

import { ButtonState, DisplayButtonProps } from './types'

export const getButtonStyles = ({
  color = 'Primary',
  radius = 'sm',
  state = {},
}: {
  color?: 'Primary' | 'Success' | 'Danger' | 'Warning'
  radius?: keyof DefaultTheme['radii']
  state?: ButtonState
} = {}) => {
  let styles: DisplayButtonProps['styles'] = {
    container: {
      backgroundColor: 'Primary.300',
      borderColor: 'Primary.300',
      radius: 'md',
      elevation: 'pressable',
      cursor: 'pointer',
      transition:
        'background-color 200ms ease-in-out,\
          border-color 300ms ease-in-out,\
          transform 300ms ease-in-out,\
          box-shadow 300ms ease-in-out\
        ',
    },
    label: {
      font: 'Bold',
      textColor: 'Shading.100',
      letterSpacing: 'md',
      transition: 'color 300ms ease-in-out',
      unitsAround: 1,
      centerText: true,
      flex: 1,
      cursor: 'pointer',
    },
  }

  if (state.hovered) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: 'Primary.250',
        borderColor: 'Primary.250',
        elevation: 'hover',
      },
    }
  }

  if (state.pressed) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: 'Primary.350',
        borderColor: 'Primary.350',
        elevation: 'pressed',
      },
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
