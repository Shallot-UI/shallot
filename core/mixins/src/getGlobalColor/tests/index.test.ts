import { makeTheme } from '@shallot-ui/core-theme'
import { getGlobalBackgroundColor } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getGlobalColor', () => {
  it('should return backgroundColor from globals when it exists', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        color: '#ffffff',
        backgroundColor: '#000000',
      },
    })

    const result = getGlobalBackgroundColor({ theme })

    expect(result).toBe('#000000')
  })

  it('should return function-based backgroundColor when it exists', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        backgroundColor: ({ theme }: any) => theme.tokens.colors?.Primary?.[500] || '#blue',
      },
      tokens: {
        colors: {
          Primary: { 500: '#2196f3' },
        },
      },
    })

    const result = getGlobalBackgroundColor({ theme })

    expect(result).toBe('#2196f3')
  })

  it('should return empty string and warn when backgroundColor not found', () => {
    const theme: DefaultTheme = makeTheme({
      globals: {
        color: '#ffffff',
      },
    })

    console.warn = jest.fn()

    const result = getGlobalBackgroundColor({ theme })

    expect(result).toBe('')
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "globals.backgroundColor" not found for theme property "colors". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should handle missing globals object', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {},
    })

    console.warn = jest.fn()

    const result = getGlobalBackgroundColor({ theme })

    expect(result).toBe('')
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "globals.backgroundColor" not found for theme property "colors". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})