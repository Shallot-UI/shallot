import {
  ThemeVariants,
  makeThemeVariants,
  mergeThemeVariants,
} from '@shallot-ui/core-theme'

import Text from './Text'

export const REACT_NATIVE_THEME_VARIANTS = makeThemeVariants({ Text })

export const makeNativeThemeVariants = <T extends Readonly<ThemeVariants>>(
  variants?: T,
) => mergeThemeVariants(REACT_NATIVE_THEME_VARIANTS, variants)
