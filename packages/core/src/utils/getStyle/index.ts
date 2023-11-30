import { CSSObject, DefaultTheme } from 'styled-components'
import { ShallotProp, makeTheme } from '@shallot-ui/theme'
import { getVariant } from '../mixins'

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
 * Defines the type of the state object for a Shallot component.
 */
type ShallotState = Record<string, ShallotProp>

/**
 * Defines the type of a Shallot prop that can contain a state object.
 */
export type StatefulShallotProp = Record<
  string, // componentName
  ShallotProp | ShallotState
>

/**
 * Returns a function that generates CSS styles based on a nested `shallot` object.
 * The `shallot` object is a set of key-value pairs where the key is a CSS property and the value is either a string or a function that returns a string.
 * If the value is a function, it will be called with the `theme` object as its argument.
 * If the value is an object, `getStyle` will be called recursively on that object.
 * @param componentName - The name of the component to generate styles for.
 * @param state - The name of the state object to generate styles for.
 * @returns A function that generates CSS styles based on the nested `shallot` object.
 */
export const getNestedStyle =
  (componentName: string, state?: string) =>
  <T extends { shallot?: StatefulShallotProp }>({ shallot = {} }: T) =>
  ({ theme }: { theme: DefaultTheme }): CSSObject => {
    const nestedShallot = (state ? shallot?.[state] : shallot)?.[componentName]
    return getStyle({ shallot: nestedShallot as ShallotProp })({ theme })
  }

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

export const getVariantStyle =
  (variantNamespace: string, defaultVariant: string = 'Default') =>
  <T extends { shallot?: {}; variant?: string }>({
    variant = defaultVariant,
  }: T) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const variantShallot =
      (variantNamespace
        ? getVariant(variantNamespace, variant)({ theme })
        : {}) ?? {}

    return Object.entries(variantShallot).map(([key, getter]) => {
      let value = typeof getter === 'function' ? getter({ theme }) : getter

      // In some cases, values can be objects. When they are, we want to
      // merge them into the shallot object directly rather than under their
      // key. For example, "Shadow" is an object containing box shadow,
      // border, and transform values.
      value = typeof value === 'object' ? value : { [key]: value }

      return value
    })
  }

/**
 * Get a set of media query breakpoints from the theme using a font size.
 * @param fontSize - The font size name.
 * @returns The set of media query breakpoints.
 */
export const getBreakpointsStyle =
  <T extends { shallot?: ShallotProp }>({ shallot = {} }: T) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme.breakpoints) return
    const modifiers: any = {}

    // only certain properties are supported by breakpoints.
    const supportedShallot: ShallotProp = {}

    // if the font size is a mixin, we'll update it against the theme.
    if (typeof shallot.fontSize === 'function') {
      supportedShallot.fontSize = shallot.fontSize
    }

    Object.entries(theme.breakpoints).forEach(([width, subtheme]) => {
      const value = getStyle({ shallot: supportedShallot })({
        theme: makeTheme(subtheme),
      })

      // Ensure `value` is not empty
      if (Object.keys(value).length > 0) {
        modifiers[`@media(min-width: ${width}px)`] = value
      }
    })

    return modifiers
  }
