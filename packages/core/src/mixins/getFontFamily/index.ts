import { DefaultTheme } from 'styled-components'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a font family value from the theme using its name.
 * @param fontFamily - The font family name. The default font families are `System`, `Body`, and `Monospace`
 * @returns The font family value.
 */
export const getFontFamily =
  (key: keyof DefaultTheme['fontFamilies'] | string): MixinFunction<string> =>
  ({ theme }) => {
    const value =
      theme?.fontFamilies?.[key as keyof DefaultTheme['fontFamilies']]
    if (!value) console.warn(valueNotFoundError('fontFamilies', `${key}`))
    return value
  }
