import { makeTheme } from '@shallot-ui/core-theme'
import { getGlobal } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getGlobal', () => {
  it('should return global value when it exists', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        color: '#ffffff',
        backgroundColor: '#000000',
      },
    })

    const result = getGlobal('color')({ theme })

    expect(result).toBe('#ffffff')
  })

  it('should return function-based global value when it exists', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        color: ({ theme }: any) => theme.tokens.colors?.Primary?.[500] || '#blue',
      },
      tokens: {
        colors: {
          Primary: { 500: '#2196f3' },
        },
      },
    })

    const result = getGlobal('color')({ theme })

    expect(result).toBe('#2196f3')
  })

  it('should return undefined and warn when global property not found', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        backgroundColor: '#ffffff',
      },
    })

    console.warn = jest.fn()

    const result = getGlobal('color')({ theme })

    expect(result).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "color" not found for theme property "globals". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should handle missing globals object', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {},
    })

    console.warn = jest.fn()

    const result = getGlobal('color')({ theme })

    expect(result).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "color" not found for theme property "globals". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should handle complex nested function values', () => {
    const complexFunction = jest.fn(({ theme }: any) => {
      const baseColor = theme.tokens.colors?.Primary?.[500] || '#000'
      return `rgba(${baseColor}, 0.8)`
    })

    const theme: DefaultTheme = makeTheme({
      globals: {
        shadowColor: complexFunction,
      },
      tokens: {
        colors: {
          Primary: { 500: '#2196f3' },
        },
      },
    })

    const result = getGlobal('shadowColor')({ theme })

    expect(complexFunction).toHaveBeenCalledWith({ theme })
    expect(result).toBe('rgba(#2196f3, 0.8)')
  })
})