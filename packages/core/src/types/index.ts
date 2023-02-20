import { CSSObject, DefaultTheme } from 'styled-components'

// Styled components accepts a function as a css value. This function has
// access to a special object called `theme` which contains the theme passed
// to the styled-components `ThemeProvider`.
export type ThemeGetter<T> = (
  propsWithTheme: T & {
    theme: DefaultTheme
  },
) => string | false | undefined | CSSObject

export type Getter<T> = (
  props: T,
) => string | false | undefined | ThemeGetter<T> | CSSObject

export type PropsConfig<T> = { [key: string]: { get: Getter<T> } }
