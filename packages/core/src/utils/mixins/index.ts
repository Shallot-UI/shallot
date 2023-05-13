import { ColorShadingValue, Typeface } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components'

export const getColor =
  (value: keyof DefaultTheme['colors'], shade: ColorShadingValue) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.colors[value][shade as keyof typeof theme.colors.Shading]

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
  return getColor(color, shade)
}

export const getRadius =
  (value: keyof DefaultTheme['radii']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.radii[value]

export const getLetterSpacing =
  (value: keyof DefaultTheme['letterSpacings']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.letterSpacings[value]

export const getLineHeight =
  (value: keyof DefaultTheme['lineHeights']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.lineHeights[value]

export const getFontSize =
  (value: keyof DefaultTheme['fontSizes']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.fontSizes[value]

export const getUnits =
  (value: number) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.gridUnits[0] * value

export const getElevation =
  (value: keyof DefaultTheme['elevations']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.elevations[value]

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
