import { DefaultTheme } from 'styled-components'

import { MixinFunction } from '../types'

/**
 * Get a value in grid units from the theme using a number.
 * @param value - The number of grid units.
 * @returns The value in grid units.
 */
export const getUnits =
  (value: number): MixinFunction<number> =>
  ({ theme }) =>
    theme.gridUnit * value
