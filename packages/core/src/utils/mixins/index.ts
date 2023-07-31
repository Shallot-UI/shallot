import { ColorShadingValue, FontFamily, Typeface } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components'

export const getVariant =
  (component: keyof DefaultTheme['variants'], name: string = 'default') =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme?.variants?.[component]?.[name]

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

// Get a color from the theme using its dot notation address.
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

export const getRadius =
  (value: keyof DefaultTheme['radii']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.radii?.[value])
      console.warn(
        `Radius not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.radii[value]
  }

export const getLetterSpacing =
  (value: keyof DefaultTheme['letterSpacings']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.letterSpacings?.[value])
      console.warn(
        `Letter spacing not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.letterSpacings[value]
  }
export const getLineHeight =
  (value: keyof DefaultTheme['lineHeights']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.lineHeights?.[value])
      console.warn(
        `Line height not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.lineHeights[value]
  }

export const getFontSize =
  (value: keyof DefaultTheme['fontSizes']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.fontSizes?.[value])
      console.warn(
        `Font size not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.fontSizes[value]
  }

export const getUnits =
  (value: number) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.gridUnits[0] * value

export const getShadow =
  (value: keyof DefaultTheme['shadows']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.shadows?.[value])
      console.warn(
        `Elevation not found for value "${value}". Are you sure it's defined in your theme and you're using a ShallotProvider?`,
      )
    return theme.shadows[value]
  }

export const getNumericValue = (value: boolean | number) => {
  if (typeof value === 'boolean') return value ? 1 : 0
  return value
}

const getDefaultFontFamily = (theme: DefaultTheme) => {
  const name = theme?.defaults?.fontFamily
  const fontFamily =
    name && theme?.fontFamilies?.[name as keyof typeof theme.fontFamilies]
  return fontFamily || undefined
}

const getFontForFontFamily = (fontFamilies: FontFamily, font?: string) => {
  return font && fontFamilies.fonts[font]
    ? fontFamilies.fonts[font]
    : fontFamilies.fonts[fontFamilies.defaults.font]
}

export const getFontFamily =
  <T extends keyof DefaultTheme['fontFamilies']>(
    fontFamily?: T,
    font?: keyof DefaultTheme['fontFamily'][T]['fonts'],
  ) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!font && !fontFamily) return
    const defaultFontFamily = getDefaultFontFamily(theme)
    const fontFamilyDef =
      (fontFamily && theme?.fontFamilies?.[font]) || defaultFontFamily
    console.log(
      // 'defaultFontFamily',
      // defaultFontFamily,
      'tff',
      theme?.fontFamilies?.[font],
      'ff',
      fontFamilyDef,
    )
    return fontFamilyDef
      ? getFontForFontFamily(fontFamilyDef, font as string)
      : undefined
  }

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
