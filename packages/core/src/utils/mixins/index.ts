import { ColorShadingValue } from '@shallot-ui/theme'
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
