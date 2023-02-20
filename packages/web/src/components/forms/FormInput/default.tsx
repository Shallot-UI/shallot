import { FunctionComponent } from 'react'
import { BaseFormInput } from './base'
import { FormInputProps } from './types'

export const FormInput: FunctionComponent<FormInputProps> = (props) => (
  <BaseFormInput
    fullWidth
    styles={{
      label: {
        textColor: 'Shading.400',
        letterSpacing: 'sm',
        font: 'Medium',
        fontSize: 'sm',
        unitsBelow: 1,
      },
      input: {
        fontSize: 'sm',
        textColor: 'Shading.500',
        backgroundColor: 'Shading.100',
        borderColor: 'Shading.250',
        unitsPadding: 3 / 4,
        borderWidth: 2,
        radius: 'sm',
        transition: 'border-color 350ms ease-in-out',
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
        error: {
          input: {
            borderColor: 'Danger.300',
          },
        },
        disabled: {
          input: {
            backgroundColor: 'Shading.150',
          },
        },
        focused: {
          input: {
            borderColor: 'Primary.300',
          },
          helperText: {
            textColor: 'Primary.300',
          },
        },
      },
    }}
    {...props}
  />
)
