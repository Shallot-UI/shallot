import { MixinFunction } from '../types'

/**
 * Get a full width value from the theme using the number of units on the left, right, or around.
 * @param unitsLeft - The number of units on the left.
 * @param unitsRight - The number of units on the right.
 * @param unitsAround - The number of units around.
 * @returns The full width value.
 */
export const getFullWidth =
  ({
    unitsLeft,
    unitsRight,
    unitsAround,
  }: {
    unitsLeft?: number
    unitsRight?: number
    unitsAround?: number
  }): MixinFunction<string> =>
  ({ theme }): string | undefined => {
    const baseUnit = theme.gridUnit
    if (typeof baseUnit !== 'number') return undefined
    const leftMargin = baseUnit * (unitsLeft ?? unitsAround ?? 0)
    const rightMargin = baseUnit * (unitsRight ?? unitsAround ?? 0)
    return `calc(100% - ${leftMargin + rightMargin}px)`
  }
