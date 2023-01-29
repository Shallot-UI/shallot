import { InputStyleProps } from '.'

export const inputDefaultStyle: InputStyleProps = {
  fontSize: 'md',
  backgroundColor: 'Shading.125',
  borderColor: 'Shading.250',
  radius: 'md',
  style: {
    padding: 12,
  },
  states: {
    disabled: {
      fontSize: 'md',
      backgroundColor: 'Shading.150',
      radius: 'md',
      style: {
        padding: 12,
      },
    },
    focused: {
      fontSize: 'md',
      borderColor: 'Primary.300',
      backgroundColor: 'Shading.150',
      radius: 'md',
      style: {
        padding: 12,
      },
    },
  },
}
