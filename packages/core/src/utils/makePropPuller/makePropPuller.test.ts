import { DefaultTheme } from 'styled-components'

import { makePropPuller } from '.'
import { PropsConfig } from '../../types'

describe('makePropPuller', () => {
  interface ButtonProps {
    textColor?: keyof DefaultTheme['colors']
    backgroundColor?: keyof DefaultTheme['colors']
    borderWidth?: number
    animated?: boolean
  }

  const propsConfig: PropsConfig<ButtonProps> = {
    textColor: {
      get: ({ textColor }) =>
        textColor ? ({ theme }) => `color: ${theme.colors[textColor]};` : '',
    },
    backgroundColor: {
      get: ({ backgroundColor }) =>
        backgroundColor
          ? ({ theme }) => `background-color: ${theme.colors[backgroundColor]};`
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
      textColor: 'Shading.100',
      backgroundColor: 'Shading.900',
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
