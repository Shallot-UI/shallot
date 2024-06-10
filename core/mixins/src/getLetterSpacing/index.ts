import type { DefaultTheme } from 'styled-components'
import type { CSS, Theme } from '@shallot-ui/core-theme'
import type { MixinFunction } from '../types'

import { valueNotFoundError } from '../utils'

/**
 * Get a letter spacing value from the theme using its name.
 * @param value - The letter spacing name.  The default names for the sizes are `sm`, `md` and `lg`
 * @returns The letter spacing value.
 */
export const getLetterSpacing =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['tokens']['letterSpacings'],
  ): MixinFunction<string | number> =>
  ({ theme }): string | number | undefined => {
    const key = rawKey as keyof (typeof theme)['tokens']['letterSpacings']
    const value = theme?.tokens?.letterSpacings?.[key]
    if (value === undefined) {
      console.warn(valueNotFoundError('letterSpacings', String(key)))
    }
    return value
  }
