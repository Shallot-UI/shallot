import { DisplayInputProps, InputComponentStyles } from './types'

// default
const defaultStyles: DisplayInputProps['styles'] = {
  container: {
    radius: 'sm',
    cursor: 'pointer',
    backgroundColor: 'Shading.125',
    borderColor: 'Shading.250',
    borderWidth: 1,
    transition:
      'border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
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

// default:hover
const hoverStyles: DisplayInputProps['styles'] = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: 'Shading.100',
  },
}

// default:hover:focused
const hoverFocusedStyles: DisplayInputProps['styles'] = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: 'Shading.100',
    elevation: 'focused',
  },
}

// default:focused
const focusedStyles: DisplayInputProps['styles'] = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: 'Shading.100',
    elevation: 'focused',
  },
}

export const inputStyles: Record<string, InputComponentStyles> = {
  default: defaultStyles,
  'default:hovered': hoverStyles,
  'default:hovered:focused': hoverFocusedStyles,
  'default:focused': focusedStyles,
}
