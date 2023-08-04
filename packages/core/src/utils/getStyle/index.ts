import { ShallotProp } from '@shallot-ui/theme'
import { CSSObject, DefaultTheme } from 'styled-components'

/**
 * Returns a function that generates CSS styles based on a given `shallot` object.
 * The `shallot` object is a set of key-value pairs where the key is a CSS property and the value is either a string or a function that returns a string.
 * If the value is a function, it will be called with the `theme` object as its argument.
 * If the value is an object, `getStyle` will be called recursively on that object.
 * @param shallot - An object containing CSS properties and values.
 * @returns A function that generates CSS styles based on the `shallot` object.
 */
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

/**
 * Returns a function that generates CSS styles based on a given `shallot` object and a `variant` string.
 * The `variant` string is used to select a variant from the `variants` object in the `theme` object.
 * The `shallot` object is a set of key-value pairs where the key is a CSS property and the value is either a string or a function that returns a string.
 * If the value is a function, it will be called with the `theme` object as its argument.
 * If the value is an object, `scopeGetStyle` will be called recursively on that object.
 * @param variantNamespace - An optional string representing the namespace of the variant.
 * @returns A function that generates CSS styles based on the `shallot` object and the `variant` string.
 */
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
        // key. For example, "Shadow" is an object containing box shadow,
        // border, and transform values.
        value = typeof value === 'object' ? value : { [key]: value }

        return value
      },
    )
  }
