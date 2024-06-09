import { DefaultTheme } from 'styled-components'
import { Theme } from '@shallot-ui/theme'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a font family value from the theme using its name.
 * @param fontFamily - The font family name. The default font families are `System`, `Body`, and `Monospace`
 * @returns The font family value.
 */
export const getFontFamily =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['fontFamilies'],
  ): MixinFunction<string> =>
  ({ theme }) => {
    const key = rawKey as keyof (typeof theme)['fontFamilies']
    const value = theme?.fontFamilies?.[key]
    if (!value) console.warn(valueNotFoundError('fontFamilies', String(key)))
    return value
  }
