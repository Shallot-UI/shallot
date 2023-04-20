import { FontSizeProps, makeTheme } from '@shallot-ui/theme'

import getResponsiveFontSizes from './getResponsiveFontSizes'
import { ThemeGetter, minifyCss } from '@shallot-ui/core'

describe('getResponsiveFontSizes', () => {
  const theme = makeTheme({
    fontSizes: { sm: 12, md: 16, lg: 20 },
    breakpoints: {
      600: { fontSizes: { sm: 14, md: 18, lg: 22 } },
      960: { fontSizes: { sm: 16, md: 20, lg: 24 } },
    },
  })

  it('should return an empty string when no font size is specified', () => {
    const result = getResponsiveFontSizes({})
    expect(result).toBe('')
  })

  it('should return a static font size declaration when no breakpoints are specified', () => {
    const themeWithoutBreakpoints = makeTheme({
      fontSizes: { sm: 12, md: 16, lg: 20 },
      breakpoints: {},
    })

    const fontSize = 'md'
    const result = getResponsiveFontSizes({ fontSize })
    // the result should a ThemeGetter function
    expect(typeof result).toBe('function')
    // the result should return a CSS string
    expect(
      (result as ThemeGetter<FontSizeProps>)({
        theme: themeWithoutBreakpoints,
      }),
    ).toBe('font-size: 16px;')
  })

  it('should return a CSS string with media queries for each breakpoint', () => {
    const fontSize = 'md'
    const result = getResponsiveFontSizes({ fontSize })
    // the result should a ThemeGetter function
    expect(typeof result).toBe('function')
    // the result should return a CSS string
    const expected = minifyCss(`
      font-size: 16px;
      @media (min-width: 600px) {
        font-size: 18px;
      }
      @media (min-width: 960px) {
        font-size: 20px;
      }
    `)

    const themesResult = (result as ThemeGetter<FontSizeProps>)({ theme })
    const normalized = minifyCss(themesResult as string)

    expect(normalized).toBe(expected)
  })

  it('should generate the correct font sizes for each breakpoint', () => {
    const fontSize = 'sm'
    const result = getResponsiveFontSizes({ fontSize })
    // the result should a ThemeGetter function
    expect(typeof result).toBe('function')
    // the result should return a CSS string
    const expected = minifyCss(`
      font-size: 12px;
      @media (min-width: 600px) {
        font-size: 14px;
      }
      @media (min-width: 960px) {
        font-size: 16px;
      }
    `)

    const themesResult = (result as ThemeGetter<FontSizeProps>)({ theme })
    const normalized = minifyCss(themesResult as string)

    expect(normalized).toBe(expected)
  })
})
