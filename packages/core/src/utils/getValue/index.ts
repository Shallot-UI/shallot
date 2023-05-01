import { DefaultTheme } from 'styled-components'

export const getValue =
  <P>(key: keyof P & string, cssKey?: string) =>
  (props: { theme: DefaultTheme } & P) =>
    props[key] ? { [cssKey ?? key]: props[key] } : {}
