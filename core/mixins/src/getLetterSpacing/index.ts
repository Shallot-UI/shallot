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
    rawKey: keyof T['letterSpacings'],
  ): MixinFunction<string | number> =>
  ({ theme }): string | number => {
    const key = rawKey as keyof (typeof theme)['letterSpacings']
    const value = theme?.letterSpacings?.[key]
    if (!value) console.warn(valueNotFoundError('letterSpacings', String(key)))
    return value
  }
