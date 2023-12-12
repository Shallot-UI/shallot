import { DefaultTheme } from 'styled-components'

import { MixinFunction } from '../types'
import { valueNotFoundError } from '../utils'

/**
 * Get a color from the theme using its color name and shade.
 * @param value - The color name. The color names in the default theme are `Primary`, `Success`, `Warning`, `Danger`, and `Shading`.
 * @param shade - The color shade. Values range from `100` to `900` in increments of `100`.
 * @returns A valid CSS color value.
 */
export const getColor =
  <
    C extends keyof DefaultTheme['colors'],
    S extends keyof DefaultTheme['colors'][C] extends infer R ? R : never,
  >(
    value: C | string,
    shade: S | number,
  ): MixinFunction<string> =>
  ({ theme }: { theme: DefaultTheme }) => {
    const color = (theme.colors as any)?.[value]?.[shade]
    if (!color) console.warn(valueNotFoundError('colors', `${value}.${shade}`))
    return color
  }
