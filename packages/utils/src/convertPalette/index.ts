import chroma from 'chroma-js'

export const convertPalette = (original: string[]) => {
  const shadeValues = [
    100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450,
    475, 500,
  ] as const

  const shades = chroma.scale(original).colors(shadeValues.length)

  const palette: Record<string, string> = {}
  shadeValues.forEach((shade, index) => {
    palette[shade] = shades[index]
  })

  return palette
}
