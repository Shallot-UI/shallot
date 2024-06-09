import { makeTheme } from '@repo/theme'
import { getFullHeight } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getFullHeight', () => {
  it('should return full height if baseUnit is a number', () => {
    const theme: DefaultTheme = makeTheme({ gridUnit: 10 })
    const height = getFullHeight({ unitsAbove: 1, unitsBelow: 1 })({ theme })

    expect(height).toBe('calc(100% - 20px)')
  })

  it('should use unitsAround if unitsAbove or unitsBelow are not provided', () => {
    const theme: DefaultTheme = makeTheme({ gridUnit: 10 })
    const height = getFullHeight({ unitsAround: 2 })({ theme })

    expect(height).toBe('calc(100% - 40px)')
  })

  it('should return "calc(100%)" if no units are provided', () => {
    const theme: DefaultTheme = makeTheme({ gridUnit: 10 })
    const height = getFullHeight({})({ theme })

    expect(height).toBe('calc(100% - 0px)')
  })
})
