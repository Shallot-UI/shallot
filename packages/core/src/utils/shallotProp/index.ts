import { DefaultTheme } from 'styled-components'

export const getStyle =
  <T extends { shallot?: {} }>({ shallot = {} }: T) =>
  ({ theme }: { theme: DefaultTheme }) =>
    Object.entries(shallot).map(([key, getter]) => {
      let value = typeof getter === 'function' ? getter({ theme }) : getter

      // In some cases, values can be objects. When they are, we want to
      // merge them into the shallot object directly rather than under their
      // key. For example, "elevation" is an object containing box shadow,
      // border, and transform values.
      value = typeof value === 'object' ? value : { [key]: value }

      return value
    })

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
