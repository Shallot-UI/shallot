import type { DefaultTheme } from 'styled-components'
import type { Theme } from '@shallot-ui/core-theme'
import type { MixinFunction } from '../types'

import { valueNotFoundError } from '../utils'

/**
 * Get a font size value from the theme using its name.
 * @param value - The font size name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The font size value.
 */
export const getFontSize =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['fontSizes'],
  ): MixinFunction<string | number> =>
  ({ theme }): number => {
    const key = rawKey as keyof (typeof theme)['fontSizes']
    const value = theme?.fontSizes?.[key]
    if (!value) console.warn(valueNotFoundError('fontSizes', String(key)))
    return value
  }
