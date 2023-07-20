import { ColorShadingValue, Typeface } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components'

export const getColor =
  (value: keyof DefaultTheme['colors'], shade: ColorShadingValue) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const color =
      theme.colors?.[value]?.[shade as keyof typeof theme.colors.Shading]
    if (!color)
      console.warn(
        `Color not found for value "${value}" and shade "${shade}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
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
      `Color shade not found for value "${address}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
    )
  }
  return getColor(color, shade)
}

export const getRadius =
  (value: keyof DefaultTheme['radii']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.radii?.[value])
      console.warn(
        `Radius not found for value "${value}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
      )
    return theme.radii[value]
  }

export const getLetterSpacing =
  (value: keyof DefaultTheme['letterSpacings']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.letterSpacings?.[value])
      console.warn(
        `Letter spacing not found for value "${value}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
      )
    return theme.letterSpacings[value]
  }
export const getLineHeight =
  (value: keyof DefaultTheme['lineHeights']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.lineHeights?.[value])
      console.warn(
        `Line height not found for value "${value}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
      )
    return theme.lineHeights[value]
  }

export const getFontSize =
  (value: keyof DefaultTheme['fontSizes']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.fontSizes?.[value])
      console.warn(
        `Font size not found for value "${value}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
      )
    return theme.fontSizes[value]
  }

export const getUnits =
  (value: number) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.gridUnits?.[value])
      console.warn(
        `gridUnit not found for value "${value}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
      )
    return theme.gridUnits[value]
  }

export const getElevation =
  (value: keyof DefaultTheme['elevations']) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme?.elevations?.[value])
      console.warn(
        `Elevation not found for value "${value}". Are you sure it's defined in your theme and you're using a ThemeProvider?`,
      )
    return theme.elevations[value]
  }

export const getNumericValue = (value: boolean | number) => {
  if (typeof value === 'boolean') return value ? 1 : 0
  return value
}

const getDefaultTypeface = (theme: DefaultTheme) => {
  const name = theme?.defaults?.typeface
  const typeface =
    name && theme?.typefaces?.[name as keyof typeof theme.typefaces]
  return typeface || undefined
}

const getFontForTypeface = (typeface: Typeface, font?: string) =>
  font && typeface.fonts[font]
    ? typeface.fonts[font]
    : typeface.fonts[typeface.defaults.font]

export const getTypeface =
  <T extends keyof DefaultTheme['typefaces']>(
    typeface?: T,
    font?: keyof DefaultTheme['typefaces'][T]['fonts'],
  ) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!font && !typeface) return
    const defaultTypeface = getDefaultTypeface(theme)
    const typefaceDef =
      (typeface && theme?.typefaces?.[typeface]) || defaultTypeface
    return typefaceDef
      ? getFontForTypeface(typefaceDef, font as string)
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
