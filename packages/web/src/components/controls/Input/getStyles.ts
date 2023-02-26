import { ColorName } from '@shallot-ui/theme'
import { BoxProps, ColumnProps, pullColumnProps } from '../../containers'

import { InputState, DisplayInputProps } from './types'

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

interface GetInputStylesProps extends ColumnProps {
  color?: ColorName
  size?: number
  iconSize?: number
  outline?: boolean
  state?: InputState
}

export const getInputStyles = ({
  color = 'Primary',
  size = 4 / 3,
  iconSize = 1,
  radius = 'sm',
  state = {},
  ...rest
}: GetInputStylesProps = {}) => {
  const [containerOverrides] = pullColumnProps({ radius, ...rest })

  let styles: DisplayInputProps['styles'] = {
    container: {
      ...formControlSurface,
      radius: 'sm',
      transition: `
        border-color 0.2s ease-in-out,
        background-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out
      `,
    },
    input: {
      unitHeight: 4 / 3,
      unitWidth: 4 / 3,
      backgroundColor: 'transparent',
      fontSize: 'md',
      unitsPadding: 1,
      grow: true,
    },
  }

  if (state.hovered) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: 'Shading.100',
      },
    }
  }

  if (state.focused) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        elevation: 'focused',
        backgroundColor: 'Shading.100',
      },
    }
  }

  styles = {
    ...styles,
    container: { ...styles.container, ...containerOverrides },
  }

  return styles
}
