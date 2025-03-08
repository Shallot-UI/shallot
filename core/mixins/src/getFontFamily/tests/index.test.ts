import { makeTheme } from '@shallot-ui/core-theme'
import { DefaultTheme } from 'styled-components'
import { getFontFamily } from '../index'

describe('getFontFamily', () => {
  it('should return font family if font family name is valid', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        fontFamilies: {
          System: 'Arial',
          Body: 'Verdana',
          Monospace: 'Courier New',
        },
      },
    })

    const fontFamily = getFontFamily('Body')({ theme })

    expect(fontFamily).toBe('Verdana')
  })

  it('should return undefined and log warning if font family name is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        fontFamilies: {
          System: 'Arial',
          Body: 'Verdana',
          Monospace: 'Courier New',
        },
      },
    })

    console.warn = jest.fn()

    const fontFamily = getFontFamily('Invalid')({ theme })

    expect(fontFamily).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "Invalid" not found for theme property "fontFamilies". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})
