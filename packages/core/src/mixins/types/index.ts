import { DefaultTheme } from 'styled-components'

export type MixinFunction<T> = (props: { theme: DefaultTheme }) => T | undefined
