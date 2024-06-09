import { DefaultTheme } from 'styled-components'
import { Theme } from '@shallot-ui/theme'

import { valueNotFoundError } from '../utils'
import { MixinFunction } from '../types'

/**
 * Get a radius value from the theme using its name.
 * @param value - The name of the radius size. The default names for the sizes are `sm`, `md`, `lg`, and `xl`, as well as a special radius called `pill`. The `pill` radius is used to create pill-shaped buttons and elements.
 * @returns A valid CSS radius value.
 */
export const getRadius =
  <T extends Theme = DefaultTheme>(
    rawKey: keyof T['radii'],
    unitPadding?: number,
  ): MixinFunction<string | number> =>
  ({ theme }) => {
    const key = rawKey as keyof (typeof theme)['radii']
    const value = theme?.radii?.[key]

    if (!value) console.warn(valueNotFoundError('radii', String(key)))

    // Unit padding is used to adjust the radius value to account for the
    // padding of the element's container.
    // e.g., https://www.30secondsofcode.org/css/s/nested-border-radius/
    if (unitPadding && typeof theme.gridUnit === 'number') {
      return Number(value) - unitPadding * theme.gridUnit
    }

    return value
  }
