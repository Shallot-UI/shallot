import { getFlexShallot } from '../index'

describe('getFlexShallot', () => {
  it('should return correct flex properties', () => {
    const flexProps = {
      grow: true,
      shrink: false,
      flex: 1,
      wrap: 'wrap-reverse',
    } as const

    const flex = getFlexShallot(flexProps)

    expect(flex).toEqual({
      flexGrow: 1,
      flexShrink: 0,
      flex: 1,
      flexWrap: 'wrap-reverse',
    })
  })

  it('should return undefined for properties not provided', () => {
    const flexProps = {}

    const flex = getFlexShallot(flexProps)

    expect(flex).toEqual({})
  })
})
