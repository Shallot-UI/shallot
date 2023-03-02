import {
  CSSObject,
  ThemeProps,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'

export type ThemeGetterValue =
  | string
  | false
  | undefined
  | CSSObject
  | FlattenSimpleInterpolation
  | FlattenInterpolation<ThemeProps<DefaultTheme>>

// Styled components accepts a function as a css value. This function has
// access to a special object called `theme` which contains the theme passed
// to the styled-components `ThemeProvider`.
export type ThemeGetter<T> = (
  propsWithTheme: T & { theme: DefaultTheme },
) => ThemeGetterValue

export type Getter<T> = (
  props: T,
) => ThemeGetter<T> | ThemeGetterValue | (ThemeGetter<T> | ThemeGetterValue)[]

export type PropsConfig<T> = { [key: string]: { get: Getter<T> } }
