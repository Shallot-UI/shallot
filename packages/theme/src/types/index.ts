import { CSSObject, CSSProp, DefaultTheme } from 'styled-components'

export type ColorShadingValue =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950

export type Palette = Record<number, string>

export type Typeface = {
  name: string
  alternates?: string[]
  fonts: Record<string, CSSObject>
  defaults: {
    font: string
  }
}

export type ColorName = keyof DefaultTheme['colors']

// Combines a color name with each of its shade values.
export type AllColorShades = `${ColorName}.${ColorShadingValue}` | 'transparent'

export interface ColorProps {
  placeholderColor?: AllColorShades
  backgroundColor?: AllColorShades
  textColor?: AllColorShades
  borderColor?: AllColorShades
  fillColor?: AllColorShades
}

export interface ThemeOptions {
  defaults?: { typeface?: string }
  gridUnits?: number[]
  colors?: { [name: string]: { [shade: string]: string } }
  fontSizes?: { [name: string]: number }
  lineHeights?: { [name: string]: number }
  radii?: { [name: string]: number }
  letterSpacings?: { [name: string]: number }
  breakpoints?: {
    [point: number]: {
      fontSizes?: { [name: string]: number }
      radii?: { [name: string]: number }
    }
  }
  typefaces?: { [name: string]: Typeface }
  elevations?: { [name: string]: CSSProp }
}
