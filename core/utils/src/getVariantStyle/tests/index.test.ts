import { makeTheme } from '@shallot-ui/core-theme'
import { getVariantStyle } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getVariantStyle', () => {
  const theme: DefaultTheme = makeTheme({
    variants: {
      Button: {
        Primary: {
          Container: {
            backgroundColor: '#blue',
          },
          Title: {
            color: '#white',
          },
        },
        Default: {
          Container: {
            backgroundColor: '#gray',
          },
        },
      },
    },
  })

  it('should return styles for specified variant', () => {
    const result = getVariantStyle('Button')({ variant: 'Primary' })({ theme })

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContainEqual({
      backgroundColor: '#blue',
    })
    expect(result).toContainEqual({
      color: '#white',
    })
  })

  it('should return styles for default variant when variant not specified', () => {
    const result = getVariantStyle('Button')({})({ theme })

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContainEqual({
      backgroundColor: '#gray',
    })
  })

  it('should handle non-existent variant namespace', () => {
    const result = getVariantStyle('NonExistent')({ variant: 'Primary' })({ theme })

    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual([])
  })

  it('should handle function values in variant', () => {
    const themeWithFunctionVariant: DefaultTheme = makeTheme({
      variants: {
        Button: {
          Dynamic: {
            Container: ({ theme }: any) => ({
              backgroundColor: theme.tokens.colors?.Primary?.[500] || '#fallback',
            }),
          },
        },
      },
      tokens: {
        colors: {
          Primary: { 500: '#dynamic-blue' },
        },
      },
    })

    const result = getVariantStyle('Button')({ variant: 'Dynamic' })({ theme: themeWithFunctionVariant })

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContainEqual({
      backgroundColor: '#dynamic-blue',
    })
  })
})