import { getColor } from '@shallot-ui/core-mixins'
import { ThemeModes } from '@shallot-ui/core-theme'

const reactThemeModes: ThemeModes = {
  dark: {
    variants: {
      Text: {
        H1: { color: getColor('Shading', 200) },
        H2: { color: getColor('Shading', 200) },
        H3: { color: getColor('Shading', 200) },
      },
    },
  },
}

export default reactThemeModes
