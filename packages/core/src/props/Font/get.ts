import { DefaultTheme } from 'styled-components'
import { FontProps } from '@shallot-ui/theme'

export const getFont =
  ({ font, typeface }: FontProps) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!font && !typeface) return ''
    const typefaceDef =
      (typeface && theme.typefaces[typeface]) ||
      theme.typefaces[theme.defaults.typeface]
    return font && typefaceDef.fonts[font]
      ? typefaceDef.fonts[font]
      : typefaceDef.fonts[typefaceDef.defaults.font]
  }
