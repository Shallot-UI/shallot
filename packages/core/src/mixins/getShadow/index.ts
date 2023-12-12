import { DefaultTheme } from 'styled-components'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a shadow value from the theme using its name.
 * @param value - The shadow value as a number ranging from `100` to `900` (in increments of `100`).
 * @returns The shadow value as a valid CSS box-shadow.
 */
export const getShadow =
  (key: keyof DefaultTheme['shadows'] | string): MixinFunction<string> =>
  ({ theme }) => {
    const value = theme?.shadows?.[key as keyof DefaultTheme['shadows']]
    if (!value) console.warn(valueNotFoundError('shadows', `${key}`))
    return value
  }
