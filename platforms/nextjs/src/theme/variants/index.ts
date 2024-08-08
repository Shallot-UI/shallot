import { ThemeVariants, mergeThemeVariants } from '@shallot-ui/core-theme'
import { makeReactThemeVariants } from '@shallot-ui/platform-react'

export const NEXT_THEME_VARIANTS = makeReactThemeVariants()

export const makeNextThemeVariants = <T extends Readonly<ThemeVariants>>(
  variants?: T,
) => mergeThemeVariants(NEXT_THEME_VARIANTS, variants)
