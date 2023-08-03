import {
  CSSObject,
  CSSProp,
  CSSProperties,
  CSSPseudos,
  DefaultTheme,
} from 'styled-components'

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

export type FontFamily = keyof DefaultTheme['fontFamilies']

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

export type ShallotProp<T = CSSObject> = Omit<CSSProperties, keyof T> &
  Omit<CSSPseudos, keyof T> & {
    [K in keyof T]: T[K] | ((props: { theme: DefaultTheme }) => T[K])
  }

export type Variant<T = any> = T & { state?: { [state: string]: T } }

export interface ThemeOptions {
  defaults?: { fontFamily?: keyof DefaultTheme['fontFamilies'] }
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
  fontFamilies?: { [name: string]: FontFamily }
  shadows?: { [name: string]: CSSProp }
  variants?: { [component: string]: { [variant: string]: Variant } }
}
