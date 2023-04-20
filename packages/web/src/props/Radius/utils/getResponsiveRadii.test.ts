import { FontSizeProps, makeTheme } from '@shallot-ui/theme'
import { ThemeGetter, minifyCss } from '@shallot-ui/core'

import getResponsiveRadii from './getResponsiveRadii'

describe('getResponsiveRadii', () => {
  const theme = makeTheme({
    radii: { sm: 12, md: 16, lg: 20 },
    breakpoints: {
      600: { radii: { sm: 14, md: 18, lg: 22 } },
      960: { radii: { sm: 16, md: 20, lg: 24 } },
    },
  })

  it('should return an empty string when no font size is specified', () => {
    const result = getResponsiveRadii({})
    expect(result).toBe('')
  })

  it('should return a static font size declaration when no breakpoints are specified', () => {
    const themeWithoutBreakpoints = makeTheme({
      radii: { sm: 12, md: 16, lg: 20 },
      breakpoints: {},
    })

    const radius = 'md'
    const result = getResponsiveRadii({ radius })
    // the result should a ThemeGetter function
    expect(typeof result).toBe('function')
    // the result should return a CSS string
    expect(
      (result as ThemeGetter<FontSizeProps>)({
        theme: themeWithoutBreakpoints,
      }),
    ).toBe('border-radius: 16px;')
  })

  it('should return a CSS string with media queries for each breakpoint', () => {
    const radius = 'md'
    const result = getResponsiveRadii({ radius })
    // the result should a ThemeGetter function
    expect(typeof result).toBe('function')
    // the result should return a CSS string
    const expected = minifyCss(`
      border-radius: 16px;
      @media (min-width: 600px) {
        border-radius: 18px;
      }
      @media (min-width: 960px) {
        border-radius: 20px;
      }
    `)

    const themesResult = (result as ThemeGetter<FontSizeProps>)({ theme })
    const normalized = minifyCss(themesResult as string)

    expect(normalized).toBe(expected)
  })

  it('should generate the correct font sizes for each breakpoint', () => {
    const radius = 'sm'
    const result = getResponsiveRadii({ radius })
    // the result should a ThemeGetter function
    expect(typeof result).toBe('function')
    // the result should return a CSS string
    const expected = minifyCss(`
      border-radius: 12px;
      @media (min-width: 600px) {
        border-radius: 14px;
      }
      @media (min-width: 960px) {
        border-radius: 16px;
      }
    `)

    const themesResult = (result as ThemeGetter<FontSizeProps>)({ theme })
    const normalized = minifyCss(themesResult as string)

    expect(normalized).toBe(expected)
  })
})
