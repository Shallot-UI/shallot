import getWrapValue from '../utils/getWrapValue'

describe('getWrapValue', () => {
  it('should return the same string if wrap is a string', () => {
    const wrap = 'wrap-reverse'

    const result = getWrapValue(wrap)

    expect(result).toBe('wrap-reverse')
  })

  it('should return "wrap" if wrap is true', () => {
    const wrap = true

    const result = getWrapValue(wrap)

    expect(result).toBe('wrap')
  })

  it('should return "nowrap" if wrap is false', () => {
    const wrap = false

    const result = getWrapValue(wrap)

    expect(result).toBe('nowrap')
  })
})
