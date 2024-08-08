import type { DefaultTheme } from 'styled-components'
import type { CSS, Theme, MixinFunction } from '@shallot-ui/core-theme'

import { valueNotFoundError } from '../utils'

/**
 * Get a font family value from the theme using its name.
 * @param fontFamily - The font family name. The default font families are `System`, `Body`, and `Monospace`
 * @returns The font family value.
 */
export const getFontFamily =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['tokens']['fontFamilies'],
  ): MixinFunction<string> =>
  ({ theme }): CSS.Properties['fontFamily'] => {
    const key = rawKey as keyof (typeof theme)['tokens']['fontFamilies']
    const value = theme?.tokens?.fontFamilies?.[key]
    if (!value) console.warn(valueNotFoundError('fontFamilies', String(key)))
    return value
  }
