import { FormSelectStyleProps } from './types'

export const DEFAULT_FORM_SELECT_SKIN: FormSelectStyleProps = {
  wrapperProps: {
    fullWidth: true,
  },
  labelProps: {
    textColor: 'Shading.400',
    letterSpacing: 'sm',
    font: 'Medium',
    fontSize: 'sm',
    unitsBelow: 1,
  },
  helperTextProps: {
    fontSize: 'sm',
    textColor: 'Shading.275',
    unitsAbove: 1 / 2,
  },
  errorTextProps: {
    fontSize: 'sm',
    textColor: 'Danger.300',
    unitsAbove: 1 / 2,
    animation: 'fadeInDown',
  },
  states: {
    // error: {
    //   controlProps: {
    //     borderColor: 'Danger.300',
    //     glowColor: 'Danger.100',
    //   },
    // },
    disabled: {},
    // focused: {
    //   controlProps: {
    //     borderColor: 'Shading.400',
    //     glowColor: 'Shading.150',
    //   },
    // },
  },
}
