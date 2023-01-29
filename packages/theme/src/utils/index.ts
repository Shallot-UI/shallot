import { DefaultTheme } from 'styled-components'
import { Palette } from '../types'

export const invertColor = (color: keyof DefaultTheme['colors']) => {
  const [palette, shade] = color.split('.')
  const shadeValue = parseInt(shade)
  const reversedShade = Math.abs(500 - shadeValue) + 100
  return `${palette}.${reversedShade}` as keyof DefaultTheme['colors']
}

export const invertPalette = (palette: Palette) => {
  const reversedPalette: Palette = {}
  Object.keys(palette).forEach((color) => {
    reversedPalette[invertColor(color)] = palette[color]
  })
  return reversedPalette as Palette
}
