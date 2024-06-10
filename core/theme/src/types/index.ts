import type * as CSS from 'csstype'

import type { DefaultTheme } from 'styled-components'

export type { CSS }

export type MixinFunction<T> = (props: { theme: Theme }) => T | undefined

// A shallot prop is used in components to allow for dynamic theming. Its use
// is similar to the `style` prop in React, but it allows for objects, functions,
// and nested shallot props.
export type ShallotProp<O = any> = Omit<CSS.Properties, keyof O> &
  Omit<CSS.Pseudos, keyof O> & {
    [K in keyof O]: O[K] | MixinFunction<O[K]> | ShallotProp
  }

// Theme tokens are the building blocks of a theme. They are used to define
// colors, font sizes, radii, and other properties that are used in components.
export type ThemeTokens = {
  gridUnit?: number
  colors?: Record<string, Record<number, CSS.Properties['color']>>
  fontFamilies?: { [name: string]: CSS.Properties['fontFamily'] }
  fontSizes?: { [name: string]: number }
  letterSpacings?: { [name: string]: number }
  lineHeights?: { [name: string]: number }
  radii?: { [name: string]: number }
  shadows?: { [name: string]: CSS.Properties['boxShadow'] }
  breakpoints?: {
    [width: number]: {
      fontSizes?: { [name: string]: number }
      radii?: { [name: string]: number }
    }
  }
}

// Theme variants can be used to define styles for components at the top level
// of a theme. This allows for easy customization of components on a global
// lelel.
export type ThemeVariants = {
  [namespace: string]: {
    [variant: string]: ShallotProp
  }
}

// A theme mode is used to define different themes that can be used in an
// application. This allows for easy switching between light and dark themes,
// for example.
export type ThemeModes = {
  [mode: string]: {
    tokens?: ThemeTokens
    variants?: ThemeVariants
  }
}

export type ThemeGlobals = {
  backgroundColor?: string | MixinFunction<string>
  color?: string | MixinFunction<string>
}

// A theme is a collection of tokens, variants, and modes that define the
// appearance of a component library. A theme is used to style components
// in a consistent way.
export type Theme = {
  tokens: ThemeTokens
  variants: ThemeVariants
  modes: ThemeModes
  globals: ThemeGlobals
}

export type Variant<T extends Theme = DefaultTheme> = keyof T['variants']
export type ColorName<T extends Theme = DefaultTheme> =
  keyof T['tokens']['colors']
export type ColorShade = `${string}.${number}`
