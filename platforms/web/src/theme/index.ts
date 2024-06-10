import { makeTheme } from '@repo/theme'
import webVariants from './variants'

export { webVariants }
export const DEFAULT_WEB_THEME = makeTheme({}, webVariants)
export type WebTheme = typeof DEFAULT_WEB_THEME
