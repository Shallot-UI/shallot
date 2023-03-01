import { snapToGrid } from '.'

describe('snapToGrid', () => {
  it('should snap a value to the nearest grid unit', () => {
    const value = 12
    const gridUnits = [5, 10, 15, 20]
    const snappedValue = snapToGrid(value, gridUnits)
    expect(snappedValue).toEqual(15)
  })

  it('should snap negative values to the nearest grid unit', () => {
    const value = -17
    const gridUnits = [5, 10, 15, 20]
    const snappedValue = snapToGrid(value, gridUnits)
    expect(snappedValue).toEqual(-20)
  })

  it('should snap a value to the first grid unit if it is already aligned', () => {
    const value = 25
    const gridUnits = [5, 10, 15, 20]
    const snappedValue = snapToGrid(value, gridUnits)
    expect(snappedValue).toEqual(25)
  })

  it('should return undefined if the gridUnits array is empty', () => {
    const value = 12
    const gridUnits: number[] = []
    const snappedValue = snapToGrid(value, gridUnits)
    expect(snappedValue).toBeUndefined()
  })
})
