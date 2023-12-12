import { makeTheme } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components'

import { getLineHeight } from '../index'

describe('getLineHeight', () => {
  it('should return line height if line height key is valid', () => {
    const theme: DefaultTheme = makeTheme({
      lineHeights: {
        sm: '1.2',
        md: '1.5',
        lg: '1.8',
      },
    })

    const lineHeight = getLineHeight('md')({ theme })

    expect(lineHeight).toBe('1.5')
  })

  it('should return undefined and log warning if line height key is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      lineHeights: {
        sm: '1.2',
        md: '1.5',
        lg: '1.8',
      },
    })

    console.warn = jest.fn()

    const lineHeight = getLineHeight('invalid')({ theme })

    expect(lineHeight).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "invalid" not found for theme property "lineHeights". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})
