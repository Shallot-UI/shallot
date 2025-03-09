import { getMarginShallot } from '../index'

jest.mock('@shallot-ui/core-mixins', () => ({
  getUnits: jest.fn((units) => `${units}px`),
}))

describe('getMarginShallot', () => {
  it('should return correct margin properties', () => {
    const marginProps = {
      unitsAround: 1,
      unitsAbove: 2,
      unitsBelow: 3,
      unitsLeft: 4,
      unitsRight: 5,
    }

    const margin = getMarginShallot(marginProps)

    expect(margin).toEqual({
      margin: '1px',
      marginTop: '2px',
      marginBottom: '3px',
      marginLeft: '4px',
      marginRight: '5px',
    })
  })

  it('should return undefined for properties not provided', () => {
    const marginProps = {}

    const margin = getMarginShallot(marginProps)

    expect(margin).toEqual({})
  })
})
