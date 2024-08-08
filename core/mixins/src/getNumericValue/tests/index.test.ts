import { getNumericValue } from '../index'

describe('getNumericValue', () => {
  it('should return 1 if value is true', () => {
    const value = getNumericValue(true)

    expect(value).toBe(1)
  })

  it('should return 0 if value is false', () => {
    const value = getNumericValue(false)

    expect(value).toBe(0)
  })

  it('should return the same number if value is a number', () => {
    const value = getNumericValue(123)

    expect(value).toBe(123)
  })
})
