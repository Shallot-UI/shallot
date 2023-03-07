import { pullColumnProps } from '../../../containers'
import { InputState, DisplayInputProps } from '../core/types'
import { InputStyleProps } from './types'

export const getInputStyles = (
  state: InputState = {},
  {
    backgroundColor = 'Shading.125',
    borderColor = 'Shading.200',
    focusedBackgroundColor = 'Shading.100',
    focusedBorderColor = 'Primary.300',
    ...rest
  }: InputStyleProps = {},
) => {
  const [containerOverrides] = pullColumnProps(rest)

  let styles: DisplayInputProps['styles'] = {
    container: {
      backgroundColor,
      borderColor,
      radius: 'sm',
      cursor: 'pointer',
      borderWidth: 1,
      transition: `
        border-color 0.2s ease-in-out,
        background-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out
      `,
    },
    input: {
      unitWidth: 1,
      backgroundColor: 'transparent',
      fontSize: 'md',
      unitsAround: 3 / 4,
      grow: true,
      letterSpacing: 'md',
    },
  }

  if (state.focused) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        elevation: 'focused',
        backgroundColor: focusedBackgroundColor,
        borderColor: focusedBorderColor,
      },
    }
  }

  if (state.error) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        borderColor: 'Danger.300',
        backgroundColor: 'Danger.100',
      },
    }
  }

  styles = {
    ...styles,
    container: { ...styles.container, ...containerOverrides },
  }

  return styles
}
