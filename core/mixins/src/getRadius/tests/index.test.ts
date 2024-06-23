import { makeTheme } from '@shallot-ui/core-theme'
import { getRadius } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getRadius', () => {
  it('should return radius if radius key is valid', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        radii: {
          sm: 2,
          md: 4,
          lg: 8,
          xl: 16,
          pill: 999999,
        },
      },
    })

    const radius = getRadius('md')({ theme })

    expect(radius).toBe(4)
  })

  it('should return undefined and log warning if radius key is invalid', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        radii: {
          sm: 2,
          md: 4,
          lg: 8,
          xl: 16,
          pill: 999999,
        },
      },
    })

    console.warn = jest.fn()

    const radius = getRadius('invalid')({ theme })

    expect(radius).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "invalid" not found for theme property "radii". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})
