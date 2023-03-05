import { ColorName } from '@shallot-ui/theme'
import { BoxProps, ColumnProps, pullColumnProps } from '../../containers'

import { CheckboxState, DisplayCheckboxProps } from './types'

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

export interface CheckboxStyleProps extends ColumnProps {
  color?: ColorName
  size?: number
  iconSize?: number
  outline?: boolean
}

export const getCheckboxStyles = (
  state: CheckboxState = {},
  {
    color = 'Primary',
    size = 4 / 3,
    iconSize = 1,
    radius = 'sm',
    ...rest
  }: CheckboxStyleProps = {},
) => {
  const [containerOverrides] = pullColumnProps({ radius, ...rest })

  let styles: DisplayCheckboxProps['styles'] = {
    container: {
      ...formControlSurface,
      // Configurable
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
    styles = {
      container: {
        ...styles.container,
        borderColor: `${color}.300`,
        backgroundColor: `${color}.300`,
      },
      icon: { ...styles.icon, display: 'block' },
    }
  }

  if (state.hovered && state.checked) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: `${color}.250`,
        borderColor: `${color}.250`,
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

  styles = {
    ...styles,
    container: { ...styles.container, ...containerOverrides },
  }

  return styles
}
