import { RowProps } from '../../containers'
import { FormControlRowComponentStyles, FormControlRowState } from './types'

export const getFormControlRowStyles = (
  _state: FormControlRowState = {},
  props: RowProps = {},
): FormControlRowComponentStyles => ({
  container: { alignMiddle: true, ...props },
  label: {
    cursor: 'pointer',
    font: 'Bold',
    fontSize: 'md',
    letterSpacing: 'md',
    textColor: 'Shading.400',
    typeface: 'Body',
    userSelect: 'none',
  },
  details: { unitsLeft: 1 },
  requiredStar: { typeface: 'Body', textColor: 'Danger.300' },
  helperText: {
    animation: 'fadeInDown',
    fontSize: 'sm',
    textColor: 'Shading.275',
    transition: 'color 350ms ease-in-out',
    typeface: 'Body',
    unitsAbove: 1 / 4,
  },
  errorText: {
    animation: 'fadeInDown',
    fontSize: 'sm',
    textColor: 'Danger.300',
    typeface: 'Body',
    unitsAbove: 1 / 4,
  },
})
