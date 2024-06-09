import {
  CSSObject,
  CSSProperties,
  CSSPseudos,
  DefaultTheme,
} from 'styled-components'
import { Theme } from '../theme'

export type ShallotProp<O = CSSObject> = Omit<CSSProperties, keyof O> &
  Omit<CSSPseudos, keyof O> & {
    [K in keyof O]: O[K] | ((props: { theme: Theme }) => O[K]) | ShallotProp
  }

export type ThemeOptions = {
  gridUnit?: number
  colors?: Record<string, Record<number, CSSProperties['color']>>
  fontFamilies?: { [name: string]: CSSProperties['fontFamily'] }
  fontSizes?: { [name: string]: CSSProperties['fontSize'] }
  letterSpacings?: { [name: string]: CSSProperties['letterSpacing'] }
  lineHeights?: { [name: string]: CSSProperties['lineHeight'] }
  radii?: { [name: string]: CSSProperties['borderRadius'] }
  shadows?: { [name: string]: CSSProperties['boxShadow'] }
  breakpoints?: {
    [width: number]: {
      fontSizes?: { [name: string]: CSSProperties['fontSize'] }
      radii?: { [name: string]: CSSProperties['borderRadius'] }
    }
  }
}

export type ThemeVariants = {
  [namespace: string]: {
    [variant: string]: ShallotProp
  }
}

export type Variant<T extends Theme = DefaultTheme> = keyof T['variants']
export type ColorName<T extends Theme = DefaultTheme> = keyof T['colors']
export type ColorShade = `${string}.${number}`
