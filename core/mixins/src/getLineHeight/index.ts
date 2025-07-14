import type { DefaultTheme } from 'styled-components'
import type { CSS } from '@shallot-ui/core-theme'
import type { MixinFunction } from '@shallot-ui/core-theme'

import { valueNotFoundError } from '../utils'

/**
 * Get a line height value from the theme using its name.
 * @param value - The line height name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The line height value.
 */
export const getLineHeight =
  <T extends DefaultTheme = DefaultTheme>(
    rawKey: keyof T['tokens']['lineHeights'],
  ): MixinFunction<string | number> =>
  ({ theme }): string | number => {
    const key = rawKey as keyof (typeof theme)['tokens']['lineHeights']
    const value = theme?.tokens?.lineHeights?.[key]
    if (value === undefined) {
      console.warn(valueNotFoundError('lineHeights', String(key)))
    }
    return value
  }
