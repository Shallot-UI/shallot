import { DefaultTheme, css } from 'styled-components'
import { FontProps, Typeface } from '@shallot-ui/theme'

const getDefaultTypeface = (theme: DefaultTheme) => {
  const name = theme?.defaults?.typeface
  const typeface =
    name && theme?.typefaces?.[name as keyof typeof theme.typefaces]
  return typeface || undefined
}

const getFontForTypeface = (typeface: Typeface, font?: string) =>
  font && typeface.fonts[font]
    ? typeface.fonts[font]
    : typeface.fonts[typeface.defaults.font]

export const typeface = ({ font, typeface }: FontProps) =>
  font || typeface
    ? css`
        ${({ theme }) => {
          const defaultTypeface = getDefaultTypeface(theme)
          const typefaceDef =
            (typeface && theme?.typefaces?.[typeface]) || defaultTypeface
          return typefaceDef ? getFontForTypeface(typefaceDef, font) : ''
        }}
      `
    : ''

export const font = ({ font, typeface }: FontProps) =>
  font || typeface
    ? css`
        ${({ theme }) => {
          const defaultTypeface = getDefaultTypeface(theme)
          const typefaceDef =
            (typeface && theme?.typefaces?.[typeface]) || defaultTypeface
          return typefaceDef ? getFontForTypeface(typefaceDef, font) : ''
        }}
      `
    : ''
