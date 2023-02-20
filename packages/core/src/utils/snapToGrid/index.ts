export const snapToGrid = (value: number, gridUnits: number[]) => {
  if (value === 0) return 0

  if (gridUnits.length === 0) return undefined

  // We'll deal with the value as an absolute number, and then add the sign
  // back in at the end. We can keep track of the sign by checking if the
  // value is negative at this point.
  const isNegative = value < 0
  const absValue = Math.abs(value)

  // We'll calculate the difference between the value and the nearest grid
  // unit, and then sort the grid units by that difference. The grid unit
  // with the smallest difference will be the one we want to snap to.
  const sortedGridUnits = gridUnits
    .map((u) => {
      const aligned = Math.ceil(absValue / u) * u
      const diff = Math.abs(absValue - aligned)
      return [aligned, diff] as [number, number]
    })
    .sort((a: [number, number], b: [number, number]) => a[1] - b[1])

  // The first item in the sorted array will be the grid unit with the
  // smallest difference, so we'll return that.
  const [alignedValue] = sortedGridUnits[0]

  // If the original value was negative, we'll return the negative of the
  // aligned value.
  return isNegative ? -1 * alignedValue : alignedValue
}
