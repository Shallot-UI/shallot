import type { DefaultTheme } from 'styled-components'
import type { CSS, Theme } from '@shallot-ui/core-theme'
import type { MixinFunction } from '../types'

import { valueNotFoundError } from '../utils'

/**
 * Get a line height value from the theme using its name.
 * @param value - The line height name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The line height value.
 */
export const getLineHeight =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['lineHeights'],
  ): MixinFunction<string | number> =>
  ({ theme }): CSS.Properties['lineHeight'] => {
    const key = rawKey as keyof (typeof theme)['lineHeights']
    const value = theme?.lineHeights?.[key]
    if (!value) console.warn(valueNotFoundError('lineHeights', String(key)))
    return value
  }
