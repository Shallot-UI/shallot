import { ColorName } from '@shallot-ui/theme'

import { pullRowProps } from '../../containers'
import { pullTextProps } from '../../content'
import { ButtonState, DisplayButtonProps } from './types'

export interface ButtonStyleProps extends DisplayButtonProps {
  color?: ColorName
  outline?: boolean
}

export const getButtonStyles = (
  state: ButtonState = {},
  { color = 'Primary', outline = false, ...rest }: ButtonStyleProps = {},
) => {
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
      transition: 'color 300ms ease-in-out',
      unitsAround: 1,
      unitsAbove: 3 / 4,
      unitsBelow: 3 / 4,
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
        backgroundColor: `${color}.250`,
        borderColor: `${color}.250`,
        elevation: 'hover',
      },
    }
  }

  if (state.pressed) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: `${color}.350`,
        borderColor: `${color}.350`,
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

  if (outline) {
    styles = {
      ...styles,
      container: { ...styles.container, backgroundColor: 'Shading.100' },
      label: { ...styles.label, textColor: `${color}.300` },
    }
  }

  styles = {
    ...styles,
    container: { ...styles.container, ...containerOverrides },
    label: { ...styles.label, ...labelOverrides },
  }

  return styles
}
