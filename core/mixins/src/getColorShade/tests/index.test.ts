import { makeTheme } from '@shallot-ui/core-theme'
import { getColorShade } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getColorShade', () => {
  it('should return undefined if address is undefined', () => {
    const color = getColorShade(undefined)({ theme: makeTheme({}) })

    expect(color).toBeUndefined()
  })

  it('should return "transparent" if address is "transparent"', () => {
    const color = getColorShade('transparent')({ theme: makeTheme({}) })

    expect(color).toBe('transparent')
  })

  it('should return color if address is valid', () => {
    const theme: DefaultTheme = makeTheme({
      colors: {
        Primary: { 100: '#ffffff', 200: '#000000' },
      },
    })

    const color = getColorShade('Primary.100')({ theme })

    expect(color).toBe('#ffffff')
  })

  it('should return undefined and log warning if address is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      colors: {
        Primary: {
          100: '#ffffff',
          200: '#000000',
        },
      },
    })

    console.warn = jest.fn()

    const color = getColorShade('invalid.100')({ theme })

    expect(color).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "invalid.100" not found for theme property "colors". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})
