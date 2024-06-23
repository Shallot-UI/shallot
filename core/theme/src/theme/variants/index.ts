import { ThemeVariants } from '@/types'
import { mergeThemeVariants } from '@/utils'

export const DEFAULT_THEME_VARIANTS = {} as const

export const makeThemeVariants = (variants?: Readonly<ThemeVariants>) =>
  mergeThemeVariants(DEFAULT_THEME_VARIANTS, variants)
