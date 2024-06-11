import { getColor } from '@shallot-ui/core-mixins'
import { ThemeGlobals } from '@shallot-ui/core-theme'

const nativeThemeGlobals: ThemeGlobals = {
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
}

export default nativeThemeGlobals
