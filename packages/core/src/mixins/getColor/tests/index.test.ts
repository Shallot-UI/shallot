import { makeTheme } from '@repo/theme'
import { getColor } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getColor', () => {
  it('should return color if color name and shade are valid', () => {
    const theme: DefaultTheme = makeTheme({
      colors: {
        Primary: { 100: '#ffffff', 200: '#000000' },
      },
    })

    const color = getColor('Primary', 100)({ theme })

    expect(color).toBe('#ffffff')
  })

  it('should return undefined and log warning if color name is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      colors: {
        Primary: { 100: '#ffffff', 200: '#000000' },
      },
    })

    console.warn = jest.fn()

    const color = getColor('invalid', 100)({ theme })

    expect(color).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "invalid.100" not found for theme property "colors". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should return undefined and log warning if color shade is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      colors: {
        Primary: { 100: '#ffffff', 200: '#000000' },
      },
    })

    console.warn = jest.fn()

    const color = getColor('Primary', 300)({ theme })

    expect(color).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "Primary.300" not found for theme property "colors". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})
