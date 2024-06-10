import { getBorderShallot } from '../index'

describe('getBorderShallot', () => {
  it('should return correct border width for top position', () => {
    const borderProps = {
      borderPosition: 'top',
      borderWidth: 2,
    } as const

    const border = getBorderShallot(borderProps)

    expect(border).toEqual({ borderTopWidth: 2 })
  })

  it('should return correct border width for right position', () => {
    const borderProps = {
      borderPosition: 'right',
      borderWidth: 2,
    } as const

    const border = getBorderShallot(borderProps)

    expect(border).toEqual({ borderRightWidth: 2 })
  })

  it('should return correct border width for bottom position', () => {
    const borderProps = {
      borderPosition: 'bottom',
      borderWidth: 2,
    } as const

    const border = getBorderShallot(borderProps)

    expect(border).toEqual({ borderBottomWidth: 2 })
  })

  it('should return correct border width for left position', () => {
    const borderProps = {
      borderPosition: 'left',
      borderWidth: 2,
    } as const

    const border = getBorderShallot(borderProps)

    expect(border).toEqual({ borderLeftWidth: 2 })
  })

  it('should return correct border width for all position', () => {
    const borderProps = {
      borderPosition: 'all',
      borderWidth: 2,
    } as const

    const border = getBorderShallot(borderProps)

    expect(border).toEqual({ borderWidth: 2 })
  })

  it('should return undefined if no border width is provided', () => {
    const borderProps = {
      borderPosition: 'all',
    } as const

    const border = getBorderShallot(borderProps)

    expect(border).toBeUndefined()
  })
})
