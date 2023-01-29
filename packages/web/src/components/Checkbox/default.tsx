import { FunctionComponent } from 'react'
import { BaseCheckbox } from './base'
import { CheckboxProps } from './types'

export const Checkbox: FunctionComponent<CheckboxProps> = (props) => (
  <BaseCheckbox
    styles={{
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
    }}
    {...props}
  />
)
