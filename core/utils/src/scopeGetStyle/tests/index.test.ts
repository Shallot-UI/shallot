import { makeTheme } from '@shallot-ui/core-theme'
import { scopeGetStyle } from '../index'
import { DefaultTheme } from 'styled-components'

describe('scopeGetStyle', () => {
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

  it('should merge variant styles with shallot prop styles', () => {
    const result = scopeGetStyle('Button')({
      variant: 'Primary',
      shallot: {
        Container: {
          padding: '8px',
        },
      },
    })({ theme })

    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('should handle shallot prop only (no variant)', () => {
    const result = scopeGetStyle()({
      shallot: {
        Container: {
          backgroundColor: '#red',
          padding: '8px',
        },
      },
    })({ theme })

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContainEqual({
      backgroundColor: '#red',
      padding: '8px',
    })
  })

  it('should handle variant only (no shallot prop)', () => {
    const result = scopeGetStyle('Button')({
      variant: 'Primary',
    })({ theme })

    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('should handle function values in shallot prop', () => {
    const dynamicValue = jest.fn(({ theme }) => '#dynamic-color')

    const result = scopeGetStyle()({
      shallot: {
        color: dynamicValue,
      },
    })({ theme })

    expect(dynamicValue).toHaveBeenCalledWith({ theme })
    expect(Array.isArray(result)).toBe(true)
    expect(result).toContainEqual({
      color: '#dynamic-color',
    })
  })

  it('should handle empty inputs', () => {
    const result = scopeGetStyle()({})({ theme })

    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual([])
  })
})