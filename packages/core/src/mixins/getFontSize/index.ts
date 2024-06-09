import { DefaultTheme } from 'styled-components'
import { Theme } from '@shallot-ui/theme'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a font size value from the theme using its name.
 * @param value - The font size name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The font size value.
 */
export const getFontSize =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['fontSizes'],
  ): MixinFunction<string | number> =>
  ({ theme }) => {
    const key = rawKey as keyof (typeof theme)['fontSizes']
    const value = theme?.fontSizes?.[key]
    if (!value) console.warn(valueNotFoundError('fontSizes', String(key)))
    return value
  }
