import { makeTheme } from '@shallot-ui/core-theme'
import { getMediaQueries } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getMediaQueries', () => {
  it('should return empty string if no breakpoints are defined', () => {
    const theme: DefaultTheme = makeTheme({
      fontSizes: { md: 16 },
      breakpoints: undefined,
    })
    const getStyle = jest.fn()

    const result = getMediaQueries(theme, getStyle)

    expect(result).toBe('')
    expect(getStyle).not.toHaveBeenCalled()
  })

  it('should return media queries if breakpoints are defined', () => {
    const theme: DefaultTheme = makeTheme({
      fontSizes: { md: 16 },
      breakpoints: {
        600: { fontSizes: { md: 18 } },
        900: { fontSizes: { md: 24 } },
      },
    })
    const getStyle = jest
      .fn()
      .mockImplementation((theme) => `font-size: ${theme.fontSizes.md}px;`)

    const result = getMediaQueries(theme, getStyle)

    const expected =
      '@media (min-width: 600px) { font-size: 18px; }@media (min-width: 900px) { font-size: 24px; }'
    expect(result).toBe(expected)
    expect(getStyle).toHaveBeenCalledTimes(2)
  })
})
