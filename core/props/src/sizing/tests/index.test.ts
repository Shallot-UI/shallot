import { getSizingShallot } from '../index'

jest.mock('getUnits', () => ({
  getUnits: jest.fn((units) => `${units}px`),
}))

jest.mock('getFullWidth', () => ({
  getFullWidth: jest.fn(() => 'calc(100% - 2px)'),
}))

jest.mock('getFullHeight', () => ({
  getFullHeight: jest.fn(() => 'calc(100% - 2px)'),
}))

describe('getSizingShallot', () => {
  it('should return correct sizing properties when fullWidth and fullHeight are true', () => {
    const sizingProps = {
      fullWidth: true,
      fullHeight: true,
      unitsAround: 1,
      unitsAbove: 2,
      unitsBelow: 3,
      unitsLeft: 4,
      unitsRight: 5,
    }

    const sizing = getSizingShallot(sizingProps)

    expect(sizing).toEqual({
      width: 'calc(100% - 2px)',
      height: 'calc(100% - 2px)',
    })
  })

  it('should return correct sizing properties when unitHeight and unitWidth are provided', () => {
    const sizingProps = {
      unitHeight: 1,
      unitWidth: 2,
      maxUnitHeight: 3,
      maxUnitWidth: 4,
      minUnitHeight: 5,
      minUnitWidth: 6,
    }

    const sizing = getSizingShallot(sizingProps)

    expect(sizing).toEqual({
      height: '1px',
      width: '2px',
      maxHeight: '3px',
      maxWidth: '4px',
      minHeight: '5px',
      minWidth: '6px',
    })
  })

  it('should return undefined for properties not provided', () => {
    const sizingProps = {}

    const sizing = getSizingShallot(sizingProps)

    expect(sizing).toEqual({})
  })
})
