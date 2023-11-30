import {
  CSSObject,
  CSSProperties,
  CSSPseudos,
  DefaultTheme,
} from 'styled-components'

export type ShallotProp<T = CSSObject> = Omit<CSSProperties, keyof T> &
  Omit<CSSPseudos, keyof T> & {
    [K in keyof T]:
      | T[K]
      | ((props: { theme: DefaultTheme }) => T[K])
      | ShallotProp
  }

export type ColorName = keyof DefaultTheme['colors']
export type ColorShade = `${keyof DefaultTheme['colors']}.${number}`
export type Variant = keyof DefaultTheme['variants']

export interface ThemeOptions {
  gridUnits?: number[]
  gridUnit?: number
  colors?: { [name: string]: { [shade: number]: CSSProperties['color'] } }
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
  variants?: { [namespace: string]: { [variant: string]: any } }
}
