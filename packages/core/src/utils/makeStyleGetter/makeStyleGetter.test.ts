import { DefaultTheme } from 'styled-components'

import { makeStyleGetter } from '.'
import { PropsConfig, ThemeGetter } from '../../types'

describe('makeStyleGetter', () => {
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

  it('calls the getter functions and concatenates their return values', () => {
    const getStyle = makeStyleGetter(propsConfig)
    expect(getProps({ borderWidth: 1, animated: true })).toEqual([
      'border-width: 1px;',
      'animation: spin 1s linear infinite;',
    ])
  })

  it('returns functions when theme getters are required', () => {
    const getStyle = makeStyleGetter(propsConfig)
    const results = getProps({ textColor: 'Shading.100' })
    expect(results).toHaveLength(1)
    expect(results[0]).toBeInstanceOf(Function)
    const getterResult = (results[0] as ThemeGetter<ButtonProps>)({
      theme: { colors: { 'Shading.100': '#fff' } } as DefaultTheme,
    })
    expect(getterResult).toEqual('color: #fff;')
  })

  it('ignores falsy return values from getter functions', () => {
    const getStyle = makeStyleGetter(propsConfig)
    expect(getProps({ animated: false })).toEqual([])
  })

  it('returns an empty string if there are no getter functions', () => {
    const getStyle = makeStyleGetter(propsConfig)
    expect(getProps({})).toEqual([])
  })
})
