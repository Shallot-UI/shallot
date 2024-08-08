import type { DefaultTheme } from 'styled-components'
import type { Theme, MixinFunction } from '@shallot-ui/core-theme'

import { valueNotFoundError } from '../utils'

/**
 * Get a font size value from the theme using its name.
 * @param value - The font size name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The font size value.
 */
export const getFontSize =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['tokens']['fontSizes'],
  ): MixinFunction<string | number> =>
  ({ theme }): number | undefined => {
    const key = rawKey as keyof (typeof theme)['tokens']['fontSizes']
    const value = theme?.tokens?.fontSizes?.[key]
    if (value === undefined) {
      console.warn(valueNotFoundError('fontSizes', String(key)))
    }
    return value
  }
