import type { DefaultTheme } from 'styled-components'
import type { CSS, Theme } from '@shallot-ui/core-theme'
import type { MixinFunction } from '../types'

import { valueNotFoundError } from '../utils'

/**
 * Get a shadow value from the theme using its name.
 * @param value - The shadow value as a number ranging from `100` to `900` (in increments of `100`).
 * @returns The shadow value as a valid CSS box-shadow.
 */
export const getShadow =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['tokens']['shadows'],
  ): MixinFunction<string> =>
  ({ theme }): CSS.Properties['boxShadow'] => {
    const key = rawKey as keyof (typeof theme)['tokens']['shadows']
    const value = theme?.tokens?.shadows?.[key]
    if (!value) console.warn(valueNotFoundError('shadows', String(key)))
    return value
  }
