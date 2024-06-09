import type {} from 'csstype'

import type { Theme } from '@repo/theme'
import type { RuleSet, StyleFunction, StyledObject } from 'styled-components'

export type ThemeGetterValue =
  | StyledObject
  | string
  | number
  | StyleFunction<any>
  | RuleSet
  | undefined

// Styled components accepts a function as a css value. This function has
// access to a special object called `theme` which contains the theme passed
// to the styled-components `ThemeProvider`.
export type ThemeGetter<T> = (
  propsWithTheme: T & { theme: Theme },
) => ThemeGetterValue

export type Getter<T> = (props: T) => ThemeGetterValue

export type PropsConfig<T> = { [key: string]: { get: Getter<T> } }

export type StaticProps<SharedProps, ComponentStyles> = SharedProps & {
  styles?: ComponentStyles
}

export type StatefulProps<SharedProps, ComponentStyles, State> = SharedProps & {
  getStyles?: (state: State) => ComponentStyles
}
