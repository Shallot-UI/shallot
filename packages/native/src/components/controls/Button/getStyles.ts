import { ColorName } from '@shallot-ui/theme'
import { pullRowProps } from '../../containers'
import { pullTextProps } from '../../content'

import { ButtonState, DisplayButtonProps } from './types'

interface GetButtonStylesProps extends DisplayButtonProps {
  color?: ColorName
  outline?: boolean
  state?: ButtonState
}

export const getButtonStyles = ({
  color = 'Primary',
  outline = false,
  state = {},
  ...rest
}: GetButtonStylesProps = {}) => {
  const [containerOverrides, otherProps] = pullRowProps({ ...rest })
  const [labelOverrides] = pullTextProps({ ...otherProps })

  let styles: DisplayButtonProps['styles'] = {
    container: {
      backgroundColor: `${color}.300`,
      borderColor: `${color}.300`,
      borderWidth: 2,
      elevation: 'pressable',
      cursor: 'pointer',
      transition: `
        background-color 200ms ease-in-out,
        border-color 300ms ease-in-out,
        transform 300ms ease-in-out,
        box-shadow 300ms ease-in-out
      `,
    },
    label: {
      font: 'Bold',
      textColor: 'Shading.100',
      letterSpacing: 'md',
      unitsAround: 1,
      unitsAbove: 3 / 4,
      unitsBelow: 3 / 4,
      centerText: true,
      flex: 1,
      cursor: 'pointer',
    },
  }

  if (outline) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: 'Shading.100',
      },
      label: {
        ...styles.label,
        textColor: `${color}.300`,
      },
    }
  }

  styles = {
    ...styles,
    container: { ...styles.container, ...containerOverrides },
    label: { ...styles.label, ...labelOverrides },
  }

  return styles
}
