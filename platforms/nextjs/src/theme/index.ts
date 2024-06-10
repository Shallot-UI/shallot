import { webVariants, reactThemeModes } from '@shallot-ui/platform-react'
import { makeTheme } from '@shallot-ui/core-theme'

export const DEFAULT_NEXT_THEME = makeTheme({}, webVariants, reactThemeModes)
export type NextTheme = typeof DEFAULT_NEXT_THEME