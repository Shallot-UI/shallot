import {
  ThemeVariants,
  makeThemeVariants,
  mergeThemeVariants,
} from '@shallot-ui/core-theme'

import Text from './Text'

export const REACT_EMAIL_THEME_VARIANTS = makeThemeVariants({ Text })

export const makeReactEmailThemeVariants = <T extends Readonly<ThemeVariants>>(
  variants?: T,
) => mergeThemeVariants(REACT_EMAIL_THEME_VARIANTS, variants)
