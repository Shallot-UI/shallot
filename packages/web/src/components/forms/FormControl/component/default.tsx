import { FunctionComponent } from 'react'
import { BaseFormControl } from './base'
import { FormControlProps } from '../types'

export const FormControl: FunctionComponent<FormControlProps> = (props) => (
  <BaseFormControl
    fullWidth
    labelProps={{
      textColor: 'Shading.400',
      letterSpacing: 'sm',
      font: 'Medium',
      fontSize: 'sm',
      unitsBelow: 1,
    }}
    helperTextProps={{
      fontSize: 'sm',
      textColor: 'Shading.275',
      unitsAbove: 1 / 2,
    }}
    errorTextProps={{
      fontSize: 'sm',
      textColor: 'Danger.300',
      unitsAbove: 1 / 2,
      animation: 'fadeInDown',
    }}
    {...props}
  />
)
