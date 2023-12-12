import { DefaultTheme } from 'styled-components'
import { MixinFunction } from '../types'

import { valueNotFoundError } from '../utils'
/**
 * Get a variant from the theme using its component name and variant name.
 * @param component  - The name of the component. Name must be capitalized.
 * @param name - The name of the variant
 * @returns The variant object.
 */
export const getVariant =
  <T = any>(
    component: keyof DefaultTheme['variants'] | string,
    name: string = 'Default',
  ): MixinFunction<T> =>
  ({ theme }) => {
    const variant =
      theme?.variants?.[component as keyof DefaultTheme['variants']]?.[name]

    if (!variant && name !== 'Default') {
      console.warn(valueNotFoundError('variants', `${component}.${name}`))
    }

    return variant as T
  }
