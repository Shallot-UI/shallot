import { DefaultTheme } from 'styled-components'
import { Theme } from '@shallot-ui/theme'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a shadow value from the theme using its name.
 * @param value - The shadow value as a number ranging from `100` to `900` (in increments of `100`).
 * @returns The shadow value as a valid CSS box-shadow.
 */
export const getShadow =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['shadows'],
  ): MixinFunction<string> =>
  ({ theme }) => {
    const key = rawKey as keyof (typeof theme)['shadows']
    const value = theme?.shadows?.[key]
    if (!value) console.warn(valueNotFoundError('shadows', String(key)))
    return value
  }
