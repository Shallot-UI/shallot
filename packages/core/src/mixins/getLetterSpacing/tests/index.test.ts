import { DefaultTheme } from 'styled-components'
import { getLetterSpacing } from '../index'
import { makeTheme } from '@shallot-ui/theme'

describe('getLetterSpacing', () => {
  it('should return letter spacing if letter spacing key is valid', () => {
    const theme: DefaultTheme = makeTheme({
      letterSpacings: {
        sm: '0.5px',
        md: '1px',
        lg: '1.5px',
      },
    })

    const letterSpacing = getLetterSpacing('md')({ theme })

    expect(letterSpacing).toBe('1px')
  })

  it('should return undefined and log warning if letter spacing key is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      letterSpacings: {
        sm: '0.5px',
        md: '1px',
        lg: '1.5px',
      },
    })

    console.warn = jest.fn()

    const letterSpacing = getLetterSpacing('invalid')({ theme })

    expect(letterSpacing).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "invalid" not found for theme property "letterSpacings". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})
