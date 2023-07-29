import { ShallotProp } from '@shallot-ui/theme'
import { CSSObject, DefaultTheme } from 'styled-components'

export const getStyle =
  <T extends { shallot?: ShallotProp }>({ shallot = {} }: T) =>
  ({ theme }: { theme: DefaultTheme }): CSSObject =>
    Object.entries(shallot).reduce((acc, [key, raw]) => {
      // If this value is a getter, we need to call it with the theme.
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
