import { MixinFunction } from '../types'

/**
 * Get a full height value from the theme using the number of units above, below, or around.
 * @param unitsAbove - The number of units above.
 * @param unitsBelow - The number of units below.
 * @param unitsAround - The number of units around.
 * @returns The full height value.
 */
export const getFullHeight =
  ({
    unitsAbove,
    unitsBelow,
    unitsAround,
  }: {
    unitsAbove?: number
    unitsBelow?: number
    unitsAround?: number
  }): MixinFunction<string> =>
  ({ theme }): string | undefined => {
    const baseUnit = theme?.tokens?.gridUnit
    if (typeof baseUnit !== 'number') return undefined
    const topMargin = baseUnit * (unitsAbove ?? unitsAround ?? 0)
    const bottomMargin = baseUnit * (unitsBelow ?? unitsAround ?? 0)
    return `calc(100% - ${topMargin + bottomMargin}px)`
  }
