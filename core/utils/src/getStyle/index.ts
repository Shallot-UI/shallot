import type { CSSObject } from 'styled-components'
import type { ShallotProp, Theme } from '@shallot-ui/core-theme'
import type { Keyframes } from 'styled-components/dist/types'

/**
 * getStyle
 * --------
 * Get style takes a `ShallotProp` which is a collection of CSS properties and
 * getter functions. It returns a single getter function that can be used to
 * generate CSS styles based on the `ShallotProp` object.
 */
export const getStyle =
  <T extends { shallot?: ShallotProp | TemplateStringsArray | Keyframes }>({
    shallot = {},
  }: T) =>
  ({ theme }: { theme: Theme }): CSSObject =>
    Object.entries(shallot ?? {}).reduce((acc, [key, raw]) => {
      // Key is the CSS property name. (e.g., `color`, `fontSize`)
      // Raw is the value of the CSS property. (e.g., `primary`, `2rem`)
      // Keep in mind that raw can be a getter function.

      // If this value is a function, then it must be a getter.
      // We need to call it with the theme object to get its value.
      let value = typeof raw === 'function' ? raw({ theme }) : raw

      // If this value is an object, we need to recursively call `getStyle`.
      if (typeof value === 'object' && value !== null) {
        acc[key] = getStyle({ shallot: value })({ theme })
      }

      // Only strings and numbers are valid CSS values.
      if (typeof value === 'string' || typeof value === 'number') {
        acc[key] = value
      }

      return acc
    }, {} as CSSObject)
