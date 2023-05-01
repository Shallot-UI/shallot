import { css, DefaultTheme } from 'styled-components'

export const getProportion =
  <P>(key: keyof P & string, cssKey?: string) =>
  (props: { theme: DefaultTheme } & P) => {
    const value = props[key]
    if (value === undefined) return {}
    if (typeof value === 'function') {
      return css`
        ${cssKey || key}: ${value(props)};
      `
    }
    return { [cssKey ?? key]: value }
  }
