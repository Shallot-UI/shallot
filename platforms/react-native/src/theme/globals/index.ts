import { getColor } from '@shallot-ui/core-mixins'
import {
  ThemeGlobals,
  makeThemeGlobals,
  mergeThemeGlobals,
} from '@shallot-ui/core-theme'

export const REACT_NATIVE_THEME_GLOBALS = makeThemeGlobals({
  backgroundColor: getColor('Shading', 50),
  backgroundFadeColor: getColor('Shading', 200),
  borderColor: getColor('Shading', 300),
  foregroundColor: getColor('Shading', 950),
  foregroundFadeColor: getColor('Shading', 800),
  'mode:dark': {
    backgroundColor: getColor('Shading', 950),
    backgroundFadeColor: getColor('Shading', 800),
    borderColor: getColor('Shading', 600),
    foregroundColor: getColor('Shading', 50),
    foregroundFadeColor: getColor('Shading', 200),
  },
})

export const makeNativeThemeGlobals = <T extends Readonly<ThemeGlobals>>(
  tokens?: T,
) => mergeThemeGlobals(REACT_NATIVE_THEME_GLOBALS, tokens)
