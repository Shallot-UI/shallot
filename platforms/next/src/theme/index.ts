import { makeTheme, webVariants } from '@shallot-ui/web'

export const DEFAULT_NEXT_THEME = makeTheme({}, webVariants)
export type NextTheme = typeof DEFAULT_NEXT_THEME
