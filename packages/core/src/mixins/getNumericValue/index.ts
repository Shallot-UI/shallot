/**
 * Get a numeric value from a boolean or number.
 * @param value - The boolean or number value.
 * @returns The numeric value.
 */
export const getNumericValue = (value: boolean | number): number => {
  if (typeof value === 'boolean') return value ? 1 : 0
  return value
}
