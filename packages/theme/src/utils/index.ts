import { Palette } from '../types'

export const invertPalette = (palette: Palette) => {
  const reversedPalette: Palette = {}
  Object.keys(palette).forEach((shade) => {
    const shadeValue = Number(shade)
    reversedPalette[Math.abs(500 - shadeValue) + 100] = palette[shadeValue]
  })
  return reversedPalette as Palette
}
