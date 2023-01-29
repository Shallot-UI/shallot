import { FunctionComponent } from 'react'
import { BaseFormCheckbox } from './base'
import { FormCheckboxProps } from './types'

export const FormCheckbox: FunctionComponent<FormCheckboxProps> = (props) => (
  <BaseFormCheckbox
    fullWidth
    styles={{
      container: {
        alignMiddle: true,
      },
      label: {
        textColor: 'Shading.400',
        letterSpacing: 'sm',
        font: 'Medium',
        fontSize: 'sm',
      },
      details: {
        unitsLeft: 1,
      },
      helperText: {
        fontSize: 'sm',
        textColor: 'Shading.275',
        unitsAbove: 1 / 2,
        transition: 'color 350ms ease-in-out',
        animation: 'fadeInDown',
      },
      errorText: {
        fontSize: 'sm',
        textColor: 'Danger.300',
        unitsAbove: 1 / 2,
        animation: 'fadeInDown',
      },
      states: {
        error: {},
        disabled: {},
        focused: {
          helperText: {
            textColor: 'Primary.300',
          },
        },
      },
    }}
    {...props}
  />
)
