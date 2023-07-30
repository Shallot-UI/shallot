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

export const scopeGetStyle =
  (variantNamespace?: string) =>
  <T extends { shallot?: {}; variant?: string }>({
    shallot = {},
    variant = 'default',
  }: T) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const variantShallot = variantNamespace
      ? theme?.variants?.[variantNamespace]?.[variant] ?? {}
      : {}
    return Object.entries({ ...variantShallot, ...shallot }).map(
      ([key, getter]) => {
        let value = typeof getter === 'function' ? getter({ theme }) : getter

        // In some cases, values can be objects. When they are, we want to
        // merge them into the shallot object directly rather than under their
        // key. For example, "elevation" is an object containing box shadow,
        // border, and transform values.
        value = typeof value === 'object' ? value : { [key]: value }

        return value
      },
    )
  }
