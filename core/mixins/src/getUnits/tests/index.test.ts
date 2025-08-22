import { makeTheme } from '@shallot-ui/core-theme'
import { getUnits } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getUnits', () => {
  it('should calculate units without suffix (returns number)', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        gridUnit: 8,
      },
    })

    const result = getUnits(2)({ theme })

    expect(result).toBe(16)
  })

  it('should calculate units with suffix (returns string)', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        gridUnit: 8,
      },
    })

    const result = getUnits(2, 'px')({ theme })

    expect(result).toBe('16px')
  })

  it('should handle decimal multipliers', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        gridUnit: 8,
      },
    })

    const result = getUnits(1.5, 'px')({ theme })

    expect(result).toBe('12px')
  })

  it('should handle negative multipliers', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        gridUnit: 8,
      },
    })

    const result = getUnits(-1, 'px')({ theme })

    expect(result).toBe('-8px')
  })

  it('should handle zero multiplier', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        gridUnit: 8,
      },
    })

    const result = getUnits(0, 'px')({ theme })

    expect(result).toBe('0px')
  })

  it('should use default gridUnit when not overridden', () => {
    const theme: DefaultTheme = makeTheme({})

    const result = getUnits(2)({ theme })

    expect(result).toBe(24) // default is 12, so 12 * 2 = 24
  })

  it('should return undefined when gridUnit is not a number', () => {
    const theme = makeTheme({
      tokens: {
        gridUnit: 'invalid' as any,
      },
    })

    const result = getUnits(2)({ theme })

    expect(result).toBeUndefined()
  })

  it('should handle custom suffix like rem', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {
        gridUnit: 1,
      },
    })

    const result = getUnits(2, 'rem')({ theme })

    expect(result).toBe('2rem')
  })
})