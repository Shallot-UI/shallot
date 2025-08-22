import { makeTheme } from '@shallot-ui/core-theme'
import { getGlobalColor } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getGlobalBackgroundColor', () => {
  it('should return color from globals when it exists', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        color: '#ffffff',
        backgroundColor: '#000000',
      },
    })

    const result = getGlobalColor({ theme })

    expect(result).toBe('#ffffff')
  })

  it('should return function-based color when it exists', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        color: ({ theme }: any) => theme.tokens.colors?.Primary?.[100] || '#lightblue',
      },
      tokens: {
        colors: {
          Primary: { 100: '#e3f2fd' },
        },
      },
    })

    const result = getGlobalColor({ theme })

    expect(result).toBe('#e3f2fd')
  })

  it('should return empty string and warn when color not found', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        backgroundColor: '#ffffff',
      },
    })

    console.warn = jest.fn()

    const result = getGlobalColor({ theme })

    expect(result).toBe('')
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "globals.color" not found for theme property "colors". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should handle missing globals object', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {},
    })

    console.warn = jest.fn()

    const result = getGlobalColor({ theme })

    expect(result).toBe('')
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "globals.color" not found for theme property "colors". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})