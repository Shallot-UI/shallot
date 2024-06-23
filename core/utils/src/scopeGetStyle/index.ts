import { DefaultTheme } from 'styled-components'
import { getVariant } from '@shallot-ui/core-mixins'

/**
 * Returns a function that generates CSS styles based on a `shallot` object with optional variant styles.
 * The `shallot` object is a set of key-value pairs where the key is a CSS property and the value is either a string or a function that returns a string.
 * If the value is a function, it will be called with the `theme` object as its argument.
 * If the value is an object, `getStyle` will be called recursively on that object.
 * @param variantNamespace - The namespace of the variant styles to use.
 * @returns A function that generates CSS styles based on the `shallot` object with optional variant styles.
 */
export const scopeGetStyle =
  (variantNamespace?: string) =>
  <T extends { shallot?: {}; variant?: string }>({
    shallot = {},
    variant = 'Default',
  }: T) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const variantShallot =
      (variantNamespace
        ? getVariant(variantNamespace, variant)({ theme })
        : {}) ?? {}

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
