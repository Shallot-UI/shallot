import { DefaultTheme } from 'styled-components'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a font size value from the theme using its name.
 * @param value - The font size name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The font size value.
 */
export const getFontSize =
  <T extends keyof DefaultTheme['fontSizes']>(
    key: T | string,
  ): MixinFunction<string | number> =>
  ({ theme }) => {
    const value = theme?.fontSizes?.[key as keyof DefaultTheme['fontSizes']]
    if (!value) console.warn(valueNotFoundError('fontSizes', `${key}`))
    return value
  }
