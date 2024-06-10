import { makeTheme } from '@shallot-ui/core-theme'
import { getFullWidth } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getFullWidth', () => {
  it('should return full width if baseUnit is a number', () => {
    const theme: DefaultTheme = makeTheme({ gridUnit: 10 })
    const width = getFullWidth({ unitsLeft: 1, unitsRight: 1 })({ theme })

    expect(width).toBe('calc(100% - 20px)')
  })

  it('should use unitsAround if unitsAbove or unitsBelow are not provided', () => {
    const theme: DefaultTheme = makeTheme({ gridUnit: 10 })
    const width = getFullWidth({ unitsAround: 2 })({ theme })

    expect(width).toBe('calc(100% - 40px)')
  })

  it('should return "calc(100%)" if no units are provided', () => {
    const theme: DefaultTheme = makeTheme({ gridUnit: 10 })
    const width = getFullWidth({})({ theme })

    expect(width).toBe('calc(100% - 0px)')
  })
})
