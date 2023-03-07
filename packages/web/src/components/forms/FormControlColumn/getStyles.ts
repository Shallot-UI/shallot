import {
  FormControlColumnComponentStyles,
  FormControlColumnState,
} from './types'

export const getFormControlColumnStyles = (
  _state: FormControlColumnState = {},
): FormControlColumnComponentStyles => ({
  container: { alignMiddle: true },
  label: {
    textColor: 'Shading.400',
    letterSpacing: 'md',
    font: 'Medium',
    fontSize: 'md',
  },
  details: { unitsLeft: 1 },
  requiredStar: { textColor: 'Danger.300' },
  helperText: {
    fontSize: 'sm',
    letterSpacing: 'md',
    textColor: 'Shading.275',
    unitsAbove: 1 / 4,
    transition: 'color 350ms ease-in-out',
    animation: 'fadeInDown',
    typeface: 'Body',
  },
  errorText: {
    fontSize: 'sm',
    letterSpacing: 'md',
    textColor: 'Danger.300',
    unitsAbove: 1 / 4,
    animation: 'fadeInDown',
    typeface: 'Body',
  },
})
