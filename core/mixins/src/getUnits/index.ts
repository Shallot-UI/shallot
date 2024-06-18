import { MixinFunction } from '@shallot-ui/core-theme'

/**
 * Get a value in grid units from the theme using a number.
 * @param value - The number of grid units.
 * @returns The value in grid units.
 */
export const getUnits =
  (value: number, suffix?: string): MixinFunction<number | string> =>
  ({ theme }): string | number | undefined => {
    if (typeof theme?.tokens?.gridUnit !== 'number') return undefined
    return suffix
      ? [theme.tokens.gridUnit * value, suffix].join('')
      : theme.tokens.gridUnit * value
  }
