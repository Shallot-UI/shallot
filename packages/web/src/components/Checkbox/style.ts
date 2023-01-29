import { CheckboxStyleProps } from '..'

export const checkboxDefaultStyle: CheckboxStyleProps = {
  containerProps: {
    radius: 'sm',
    cursor: 'pointer',
    unitHeight: 2,
    unitWidth: 2,
    backgroundColor: 'Shading.100',
    borderColor: 'Primary.300',
    transition: 'background-color 0.2s ease-in-out',
  },
  fillProps: {
    backgroundColor: 'Primary.300',
    radius: 'sm',
    unitHeight: 2,
    unitWidth: 2,
    animation: 'fadeIn',
    alignMiddle: true,
    alignCenter: true,
  },
  checkmarkProps: {
    unitHeight: 4 / 3,
    unitWidth: 4 / 3,
    fillColor: 'Shading.100',
    animation: 'fadeInUp',
  },
  states: {
    hover: {
      containerProps: {
        backgroundColor: 'Primary.100',
      },
    },
  },
}
