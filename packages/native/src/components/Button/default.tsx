import { FunctionComponent } from 'react'
import { BaseButton } from './base'
import { ButtonProps } from './types'

export const Button: FunctionComponent<ButtonProps> = (props) => (
  <BaseButton
    styles={{
      container: {
        backgroundColor: 'Primary.300',
        borderColor: 'Primary.300',
        radius: 'md',
        elevation: 'pressable',
      },
      label: {
        font: 'Bold',
        textColor: 'Shading.100',
        letterSpacing: 'md',
        unitsAround: 1,
        centerText: true,
        flex: 1,
      },
      states: {
        hover: {
          container: {
            backgroundColor: 'Primary.250',
            borderColor: 'Primary.250',
            elevation: 'hover',
          },
        },
        active: {
          container: {
            backgroundColor: 'Primary.350',
            borderColor: 'Primary.350',
            elevation: 'pressed',
          },
        },
        disabled: {
          container: {
            backgroundColor: 'Shading.250',
            borderColor: 'Shading.250',
            elevation: 'none',
          },
          label: {
            textColor: 'Shading.350',
          },
        },
      },
    }}
    {...props}
  />
)
