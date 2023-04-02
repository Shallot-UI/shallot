import { DefaultTheme } from 'styled-components'
import { AllColorShades, ColorName } from '@shallot-ui/theme'

import { makePropPuller } from '.'
import { PropsConfig } from '../../types'

describe('makePropPuller', () => {
  interface ButtonProps {
    textColor?: AllColorShades
    backgroundColor?: AllColorShades
    borderWidth?: number
    animated?: boolean
  }

  const propsConfig: PropsConfig<ButtonProps> = {
    textColor: {
      get: ({ textColor }) =>
        textColor
          ? ({ theme }) => {
              const [colorName, shade] = textColor.split('.')
              return `color: ${
                theme.colors[colorName as ColorName][
                  shade as unknown as keyof DefaultTheme['colors'][ColorName]
                ]
              };`
            }
          : '',
    },
    backgroundColor: {
      get: ({ backgroundColor }) =>
        backgroundColor
          ? ({ theme }) => {
              const [colorName, shade] = backgroundColor.split('.')
              return `background-color: ${
                theme.colors[colorName as ColorName][
                  shade as unknown as keyof DefaultTheme['colors'][ColorName]
                ]
              };`
            }
          : '',
    },
    borderWidth: {
      get: ({ borderWidth }) =>
        borderWidth ? `border-width: ${borderWidth}px;` : '',
    },
    animated: {
      get: ({ animated }) => animated && 'animation: spin 1s linear infinite;',
    },
  }

  it('picks the specified props and returns the remaining props', () => {
    const pullProps = makePropPuller(propsConfig)
    const [pickedProps, restProps] = pullProps({
      textColor: 'Shading.100' as AllColorShades,
      backgroundColor: 'Shading.900' as AllColorShades,
      borderWidth: 1,
      animated: true,
      foo: 'bar',
    })
    expect(pickedProps).toEqual({
      textColor: 'Shading.100',
      backgroundColor: 'Shading.900',
      borderWidth: 1,
      animated: true,
    })
    expect(restProps).toEqual({ foo: 'bar' })
  })

  it('returns an empty object if no props are specified', () => {
    const pullProps = makePropPuller(propsConfig)
    const [pickedProps, restProps] = pullProps({})
    expect(pickedProps).toEqual({})
    expect(restProps).toEqual({})
  })
})
