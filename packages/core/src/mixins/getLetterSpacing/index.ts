import { DefaultTheme } from 'styled-components'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a letter spacing value from the theme using its name.
 * @param value - The letter spacing name.  The default names for the sizes are `sm`, `md` and `lg`
 * @returns The letter spacing value.
 */
export const getLetterSpacing =
  (
    key: keyof DefaultTheme['letterSpacings'] | string,
  ): MixinFunction<string | number> =>
  ({ theme }) => {
    const value =
      theme?.letterSpacings?.[key as keyof DefaultTheme['letterSpacings']]
    if (!value) console.warn(valueNotFoundError('letterSpacings', `${key}`))
    return value
  }
