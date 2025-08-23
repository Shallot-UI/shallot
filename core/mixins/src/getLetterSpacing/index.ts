import type { DefaultTheme } from 'styled-components'
import type { MixinFunction } from '@shallot-ui/core-theme'

import { valueNotFoundError } from '../utils'

/**
 * Get a letter spacing value from the theme using its name.
 * @param value - The letter spacing name.  The default names for the sizes are `sm`, `md` and `lg`
 * @returns The letter spacing value.
 */
export const getLetterSpacing =
  <T extends DefaultTheme = DefaultTheme>(
    rawKey: keyof T['tokens']['letterSpacings'],
  ): MixinFunction<string | number | undefined> =>
  ({ theme }): string | number | undefined => {
    const key = rawKey as keyof (typeof theme)['tokens']['letterSpacings']
    const value = theme?.tokens?.letterSpacings?.[key]
    if (value === undefined) {
      console.warn(valueNotFoundError('letterSpacings', String(key)))
    }
    return value
  }
