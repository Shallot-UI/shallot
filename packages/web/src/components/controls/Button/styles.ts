import { ButtonComponentStyles, DisplayButtonProps } from './types'

const defaultStyles: DisplayButtonProps['styles'] = {
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

// default:focused
const focusedStyles: DisplayButtonProps['styles'] = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    elevation: 'focused',
  },
}

// default:hovered
const hoveredStyles: DisplayButtonProps['styles'] = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: 'Primary.250',
    borderColor: 'Primary.250',
    elevation: 'hover',
  },
}

// default:pressed
const pressedStyles: DisplayButtonProps['styles'] = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: 'Primary.350',
    borderColor: 'Primary.350',
    elevation: 'pressed',
  },
}

export const buttonStyles: Record<string, ButtonComponentStyles> = {
  default: defaultStyles,
  'default:focused': focusedStyles,
  'default:hovered': hoveredStyles,
  'default:hovered:focused': hoveredStyles,
  'default:hovered:pressed': pressedStyles,
  'default:hovered:focused:pressed': pressedStyles,
}
