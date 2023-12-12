import { makeTheme } from '@shallot-ui/theme'
import { getFontSize } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getFontSize', () => {
  it('should return font size if font size key is valid', () => {
    const theme: DefaultTheme = makeTheme({
      fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
      },
    })

    const fontSize = getFontSize('md')({ theme })

    expect(fontSize).toBe(16)
  })

  it('should return undefined and log warning if font size key is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
      },
    })

    console.warn = jest.fn()

    const fontSize = getFontSize('invalid')({ theme })

    expect(fontSize).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "invalid" not found for theme property "fontSizes". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})
