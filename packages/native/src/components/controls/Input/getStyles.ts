import { BoxProps, ColumnProps, pullColumnProps } from '../../containers'

import { InputState, DisplayInputProps } from './types'

const formControlSurface: BoxProps = {
  cursor: 'pointer',
  backgroundColor: 'Shading.125',
  borderColor: 'Shading.200',
  borderWidth: 1,
  transition: `
    border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out
  `,
}

interface GetInputStylesProps extends ColumnProps {
  state?: InputState
}

export const getInputStyles = ({
  state = {},
  ...rest
}: GetInputStylesProps = {}) => {
  const [containerOverrides] = pullColumnProps({ ...rest })

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
      unitHeight: 1,
      unitWidth: 1,
      backgroundColor: 'transparent',
      fontSize: 'md',
      unitsPadding: 1,
      grow: true,
      letterSpacing: 'md',
    },
  }

  if (state.hovered) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
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
        borderColor: 'Primary.300',
      },
    }
  }

  styles = {
    ...styles,
    container: { ...styles.container, ...containerOverrides },
  }

  return styles
}
