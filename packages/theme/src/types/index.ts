import type * as CSS from 'csstype'

import type { DefaultTheme } from 'styled-components'

export type { CSS }

import type { Theme } from '../theme'

export type ShallotProp<O = any> = Omit<CSS.Properties, keyof O> &
  Omit<CSS.Pseudos, keyof O> & {
    [K in keyof O]: O[K] | ((props: { theme: Theme }) => O[K]) | ShallotProp
  }

export type ThemeOptions = {
  gridUnit?: number
  colors?: Record<string, Record<number, CSS.Properties['color']>>
  fontFamilies?: { [name: string]: CSS.Properties['fontFamily'] }
  fontSizes?: { [name: string]: CSS.Properties['fontSize'] }
  letterSpacings?: { [name: string]: CSS.Properties['letterSpacing'] }
  lineHeights?: { [name: string]: CSS.Properties['lineHeight'] }
  radii?: { [name: string]: CSS.Properties['borderRadius'] }
  shadows?: { [name: string]: CSS.Properties['boxShadow'] }
  breakpoints?: {
    [width: number]: {
      fontSizes?: { [name: string]: CSS.Properties['fontSize'] }
      radii?: { [name: string]: CSS.Properties['borderRadius'] }
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
