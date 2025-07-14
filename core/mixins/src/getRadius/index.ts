import type { DefaultTheme } from 'styled-components'
import type { MixinFunction } from '@shallot-ui/core-theme'

import { valueNotFoundError } from '../utils'

/**
 * Get a radius value from the theme using its name.
 * @param value - The name of the radius size. The default names for the sizes are `sm`, `md`, `lg`, and `xl`, as well as a special radius called `pill`. The `pill` radius is used to create pill-shaped buttons and elements.
 * @returns A valid CSS radius value.
 */
export const getRadius =
  <T extends DefaultTheme = DefaultTheme>(
    rawKey: keyof T['tokens']['radii'],
    unitPadding?: number,
  ): MixinFunction<string | number> =>
  ({ theme }): number | string => {
    const key = rawKey as keyof (typeof theme)['tokens']['radii']
    const value = theme?.tokens?.radii?.[key]

    if (value === undefined) {
      console.warn(valueNotFoundError('radii', String(key)))
    }

    // Unit padding is used to adjust the radius value to account for the
    // padding of the element's container.
    // e.g., https://www.30secondsofcode.org/css/s/nested-border-radius/
    if (unitPadding && typeof theme?.tokens?.gridUnit === 'number') {
      return Number(value) - unitPadding * theme.tokens.gridUnit
    }

    return value ?? 0
  }
