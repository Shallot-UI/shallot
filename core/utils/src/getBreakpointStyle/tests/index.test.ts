import { makeTheme } from '@shallot-ui/core-theme'
import { getBreakpointsStyle } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getBreakpointsStyle', () => {
  it('should return undefined when no breakpoints are defined', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        breakpoints: undefined as any,
      },
    })

    const result = getBreakpointsStyle({ shallot: {} })({ theme })

    expect(result).toEqual({})
  })

  it('should handle empty shallot object', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        breakpoints: {
          768: {
            fontSizes: {
              sm: 14,
              md: 18,
            },
          },
        },
      },
    })

    const result = getBreakpointsStyle({ shallot: {} })({ theme })

    expect(result).toEqual({})
  })

  it('should create media queries for breakpoints', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        breakpoints: {
          768: {
            fontSizes: {
              md: 18,
            },
          },
          1024: {
            fontSizes: {
              md: 20,
            },
          },
        },
        fontSizes: {
          md: 16,
        },
      },
    })

    // Mock function that represents fontSize mixin
    const fontSizeMixin = jest.fn(({ theme }) => theme.tokens.fontSizes?.md || 16)

    const result = getBreakpointsStyle({
      shallot: {
        fontSize: fontSizeMixin,
      },
    })({ theme })

    expect(result).toHaveProperty('@media(min-width: 768px)')
    expect(result).toHaveProperty('@media(min-width: 1024px)')
  })
})