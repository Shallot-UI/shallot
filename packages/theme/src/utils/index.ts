import { Palette } from '../types'

export const invertPalette = (palette: Palette) => {
  const reversedPalette: Palette = {}
  Object.keys(palette).forEach((shade) => {
    const shadeValue = Number(shade)
    reversedPalette[Math.abs(1000 - shadeValue)] = palette[shadeValue]
  })
  return reversedPalette as Palette
}
