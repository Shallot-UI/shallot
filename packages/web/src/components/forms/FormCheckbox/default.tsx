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
      checkbox: {
        container: {
          radius: 'sm',
          cursor: 'pointer',
          unitHeight: 2,
          unitWidth: 2,
          backgroundColor: 'Shading.100',
          borderColor: 'Shading.250',
          transition: 'background-color 0.2s ease-in-out',
          alignCenter: true,
          alignMiddle: true,
          style: {
            borderWidth: 2,
            overflow: 'hidden',
          },
        },
        fill: {
          unitHeight: 2,
          unitWidth: 2,
          animation: 'fadeIn',
          alignMiddle: true,
          alignCenter: true,
          style: {
            position: 'absolute',
          },
        },
        icon: {
          unitHeight: 4 / 3,
          unitWidth: 4 / 3,
          fillColor: 'Shading.100',
          animation: 'fadeInUp',
          display: false,
        },
        states: {
          hover: {
            container: {
              backgroundColor: 'Primary.100',
            },
          },
          checked: {
            container: {
              borderColor: 'Primary.300',
            },
            fill: {
              backgroundColor: 'Primary.300',
            },
            icon: {
              display: 'block',
            },
          },
        },
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
