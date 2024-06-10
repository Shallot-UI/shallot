import { makeTheme } from '@shallot-ui/core-theme'
import webVariants from './variants'
import reactThemeModes from './modes'

export { webVariants, reactThemeModes }
export const DEFAULT_WEB_THEME = makeTheme({}, webVariants, reactThemeModes)
