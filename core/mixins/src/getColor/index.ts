import type { DefaultTheme } from 'styled-components'
import type { CSS, Theme } from '@shallot-ui/core-theme'

import type { MixinFunction } from '../types'
import { valueNotFoundError } from '../utils'

/**
 * Get a color from the theme using its color name and shade.
 * @param value - The color name. The color names in the default theme are `Primary`, `Success`, `Warning`, `Danger`, and `Shading`.
 * @param shade - The color shade. Values range from `100` to `900` in increments of `100`.
 * @returns A valid CSS color value.
 */
export const getColor =
  <
    C extends keyof T['colors'],
    S extends keyof T['colors'][C] extends infer R ? R : never,
    T extends Theme = DefaultTheme,
  >(
    value: C | string,
    shade: S | number,
  ): MixinFunction<string> =>
  ({ theme }: any): CSS.Properties['color'] => {
    const color = theme.colors?.[value]?.[shade]

    if (!color) {
      console.warn(
        valueNotFoundError('colors', [String(value), shade].join('.')),
      )
    }

    return color
  }
