import { DefaultTheme } from 'styled-components'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a line height value from the theme using its name.
 * @param value - The line height name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The line height value.
 */
export const getLineHeight =
  (
    key: keyof DefaultTheme['lineHeights'] | string,
  ): MixinFunction<string | number> =>
  ({ theme }) => {
    const value = theme?.lineHeights?.[key as keyof DefaultTheme['lineHeights']]
    if (!value) console.warn(valueNotFoundError('lineHeights', `${key}`))
    return value
  }
