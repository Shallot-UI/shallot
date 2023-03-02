import merge from 'ts-deepmerge'

import { ThemeShape } from '../types'
import { DEFAULT_DARK_COLORS } from './colors'
import DEFAULT_THEME_OPTIONS from './defaultTheme'

export const makeTheme = (options: ThemeShape = {}) =>
  merge(DEFAULT_THEME_OPTIONS, options)

export const DEFAULT_THEME = makeTheme()
export const DEFAULT_DARK_THEME = makeTheme({ colors: DEFAULT_DARK_COLORS })
