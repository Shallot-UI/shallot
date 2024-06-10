import { makeTheme } from '@shallot-ui/core-theme'
import webVariants from './variants'

export { webVariants }
export const DEFAULT_WEB_THEME = makeTheme({}, webVariants)
export type WebTheme = typeof DEFAULT_WEB_THEME
