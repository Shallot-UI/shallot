import {
  CSSObject,
  CSSProp,
  CSSProperties,
  CSSPseudos,
  DefaultTheme,
} from 'styled-components'

export type ColorShadingValue =
  | number
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
    [K in keyof T]:
      | T[K]
      | ((props: { theme: DefaultTheme }) => T[K])
      | ShallotProp
  }

export type Variant<T = any> = T & { state?: { [state: string]: T } }

export interface ThemeOptions {
  gridUnits?: number[]
  gridUnit?: number
  colors?: { [name: string]: { [shade: string]: CSSProperties['color'] } }
  fontSizes?: { [name: string]: CSSProperties['fontSize'] }
  lineHeights?: { [name: string]: CSSProperties['lineHeight'] }
  radii?: { [name: string]: number }
  letterSpacings?: { [name: string]: CSSProperties['letterSpacing'] }
  breakpoints?: {
    [point: number]: {
      fontSizes?: { [name: string]: CSSProperties['fontSize'] }
      radii?: { [name: string]: number }
    }
  }
  fontFamilies?: { [name: string]: CSSProperties['fontFamily'] }
  shadows?: { [name: string]: CSSProperties['boxShadow'] }
  variants?: { [component: string]: { [variant: string]: Variant } }
}
