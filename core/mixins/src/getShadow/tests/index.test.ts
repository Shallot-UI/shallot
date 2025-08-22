import { makeTheme } from '@shallot-ui/core-theme'
import { getShadow } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getShadow', () => {
  it('should return shadow by string key', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        shadows: {
          sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
          md: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        },
      },
    })

    const result = getShadow('md')({ theme })

    expect(result).toBe('0 4px 6px rgba(0, 0, 0, 0.1)')
  })

  it('should return shadow by numeric key', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        shadows: {
          100: '0 1px 2px rgba(0, 0, 0, 0.1)',
          200: '0 4px 6px rgba(0, 0, 0, 0.1)',
          300: '0 10px 15px rgba(0, 0, 0, 0.1)',
        },
      },
    })

    const result = getShadow(200)({ theme })

    expect(result).toBe('0 4px 6px rgba(0, 0, 0, 0.1)')
  })

  it('should return empty string and warn when shadow key not found', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        shadows: {
          sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
      },
    })

    console.warn = jest.fn()

    const result = getShadow('lg')({ theme })

    expect(result).toBe('')
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "lg" not found for theme property "shadows". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should handle missing shadows object', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {},
    })

    console.warn = jest.fn()

    const result = getShadow('md')({ theme })

    expect(result).toBe('')
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "md" not found for theme property "shadows". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})