import { MixinFunction } from '../types'

/**
 * Get a value in grid units from the theme using a number.
 * @param value - The number of grid units.
 * @returns The value in grid units.
 */
export const getUnits =
  (value: number, suffix?: string): MixinFunction<number | string> =>
  ({ theme }) =>
    suffix ? [theme.gridUnit * value, suffix].join() : theme.gridUnit * value
