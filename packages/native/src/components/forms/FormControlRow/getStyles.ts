import { RowProps } from '../../containers'
import { FormControlRowComponentStyles, FormControlRowState } from './types'

export const getFormControlRowStyles = ({
  state = {},
  ...props
}: {
  state?: FormControlRowState
} & RowProps = {}): FormControlRowComponentStyles => ({
  container: { alignMiddle: true, ...props },
  label: {
    textColor: 'Shading.400',
    typeface: 'Body',
    font: 'Bold',
    fontSize: 'md',
    cursor: 'pointer',
  },
  details: { unitsLeft: 1 },
  requiredStar: { textColor: 'Danger.300' },
  helperText: {
    fontSize: 'sm',
    textColor: 'Shading.275',
    unitsAbove: 1 / 4,
    typeface: 'Body',
  },
  errorText: {
    fontSize: 'sm',
    textColor: 'Danger.300',
    unitsAbove: 1 / 4,
    typeface: 'Body',
  },
})
