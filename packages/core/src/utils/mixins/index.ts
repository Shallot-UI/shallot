import { ColorShadingValue } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components'

/**
 * Get a variant from the theme using its component name and variant name.
 * @param component  - The name of the component. Name must be capitalized.
 * @param name - The name of the variant
 * @returns The variant object.
 */
export const getVariant =
  (component: keyof DefaultTheme['variants'], name: string = 'default') =>
  ({ theme }: { theme: DefaultTheme }) => {
    const variant = theme?.variants?.[component]?.[name]
    if (!variant)
      console.warn(
        `Variant not found for component "${component}" and name "${name}". Are you sure it's defined correctly in your theme and you're using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs`,
      )
    return variant
  }

/**
 * Get a color from the theme using its color name and shade.
 * @param value - The color name. The color names in the default theme are `Primary`, `Success`, `Warning`, `Danger`, and `Shading`.
 * @param shade - The color shade. Values range from `100` to `900` in increments of `100`.
 * @returns A valid CSS color value.
 */
export const getColor =
  (value: keyof DefaultTheme['colors'], shade: ColorShadingValue) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const color =
      theme.colors?.[value]?.[shade as keyof typeof theme.colors.Shading]
    if (!color)
      console.warn(
        `Color not found for value "${value}" and shade "${shade}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return color
  }

/**
 * Get a color from the theme using its dot notation address.
 * @param address - The dot notation address of the color.
 * @returns A valid CSS color value.
 */
export const getColorShade = (address: string | undefined) => {
  // if the color is falsy, return an empty string.
  if (!address) return
  // If the color is transparent, return the transparent keyword.
  if (address === 'transparent') return `transparent`
  // Split the color key into its color name and shade.
  const [color, shade] = address.split('.') as [
    keyof DefaultTheme['colors'],
    ColorShadingValue,
  ]
  if (!shade) {
    console.warn(
      `Color shade not found for value "${address}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
    )
  }
  return getColor(color, shade)
}

/**
 * Get a radius value from the theme using its name.
 * @param value - The name of the radius size. The default names for the sizes are `sm`, `md`, `lg`, and `xl`, as well as a special radius called `pill`. The `pill` radius is used to create pill-shaped buttons and elements.
 * @returns A valid CSS radius value.
 */
export const getRadius =
  (value: keyof DefaultTheme['radii']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.radii?.[value])
      console.warn(
        `Radius not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.radii[value]
  }

/**
 * Get a letter spacing value from the theme using its name.
 * @param value - The letter spacing name.  The default names for the sizes are `sm`, `md` and `lg`
 * @returns The letter spacing value.
 */
export const getLetterSpacing =
  (value: keyof DefaultTheme['letterSpacings']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.letterSpacings?.[value])
      console.warn(
        `Letter spacing not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.letterSpacings[value]
  }

/**
 * Get a line height value from the theme using its name.
 * @param value - The line height name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The line height value.
 */
export const getLineHeight =
  (value: keyof DefaultTheme['lineHeights']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.lineHeights?.[value])
      console.warn(
        `Line height not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.lineHeights[value]
  }

/**
 * Get a font size value from the theme using its name.
 * @param value - The font size name. The default names for the sizes are `xs`, `sm`, `md`, `lg` and `xl`
 * @returns The font size value.
 */
export const getFontSize =
  (value: keyof DefaultTheme['fontSizes']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.fontSizes?.[value])
      console.warn(
        `Font size not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.fontSizes[value]
  }

/**
 * Get a value in grid units from the theme using a number.
 * @param value - The number of grid units.
 * @returns The value in grid units.
 */
export const getUnits =
  (value: number) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.gridUnits[0] * value

/**
 * Get a shadow value from the theme using its name.
 * @param value - The shadow value as a number ranging from `100` to `900` (in increments of `100`).
 * @returns The shadow value as a valid CSS box-shadow.
 */
export const getShadow =
  (value: keyof DefaultTheme['shadows']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.shadows?.[value])
      console.warn(
        `Shadow not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.shadows[value]
  }

/**
 * Get a numeric value from a boolean or number.
 * @param value - The boolean or number value.
 * @returns The numeric value.
 */
export const getNumericValue = (value: boolean | number) => {
  if (typeof value === 'boolean') return value ? 1 : 0
  return value
}

/**
 * Get a font family value from the theme using its name.
 * @param fontFamily - The font family name. The default font families are `System`, `Body`, and `Monospace`
 * @returns The font family value.
 */
export const getFontFamily =
  (fontFamily: keyof DefaultTheme['fontFamilies']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.fontFamilies?.[fontFamily])
      console.warn(
        `Font Family not found for "${fontFamily}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme?.fontFamilies?.[fontFamily]
  }

/**
 * Get a full width value from the theme using the number of units on the left, right, or around.
 * @param unitsLeft - The number of units on the left.
 * @param unitsRight - The number of units on the right.
 * @param unitsAround - The number of units around.
 * @returns The full width value.
 */
export const getFullWidth =
  ({
    unitsLeft,
    unitsRight,
    unitsAround,
  }: {
    unitsLeft?: number
    unitsRight?: number
    unitsAround?: number
  }) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const baseUnit = theme.gridUnits?.[0]
    if (typeof baseUnit !== 'number') return ''
    const leftMargin = baseUnit * (unitsLeft ?? unitsAround ?? 0)
    const rightMargin = baseUnit * (unitsRight ?? unitsAround ?? 0)
    return `calc(100% - ${leftMargin + rightMargin}px)`
  }

/**
 * Get a full height value from the theme using the number of units above, below, or around.
 * @param unitsAbove - The number of units above.
 * @param unitsBelow - The number of units below.
 * @param unitsAround - The number of units around.
 * @returns The full height value.
 */
export const getFullHeight =
  ({
    unitsAbove,
    unitsBelow,
    unitsAround,
  }: {
    unitsAbove?: number
    unitsBelow?: number
    unitsAround?: number
  }) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const baseUnit = theme.gridUnits?.[0]
    if (typeof baseUnit !== 'number') return ''
    const topMargin = baseUnit * (unitsAbove ?? unitsAround ?? 0)
    const bottomMargin = baseUnit * (unitsBelow ?? unitsAround ?? 0)
    return `calc(100% - ${topMargin + bottomMargin}px)`
  }

/**
 * Get a set of media query breakpoints from the theme using a font size.
 * @param fontSize - The font size name.
 * @returns The set of media query breakpoints.
 */
export const getBreakpoints =
  ({ fontSize }: { fontSize?: keyof DefaultTheme['fontSizes'] }) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme.breakpoints) return
    const modifiers: any = {}
    Object.entries(theme.breakpoints).forEach(([width, subtheme]) => {
      const value: any = {}

      if (fontSize && subtheme?.fontSizes?.[fontSize] !== undefined) {
        value.fontSize = subtheme.fontSizes[fontSize]
      }

      // Ensure `value` is not empty
      if (Object.keys(value).length > 0) {
        modifiers[`@media(min-width: ${width}px)`] = value
      }
    })
    return modifiers
  }
