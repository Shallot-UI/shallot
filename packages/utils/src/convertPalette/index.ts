import chroma from 'chroma-js'

export const convertPalette = (original: string[]) => {
  const shadeValues = [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
  ] as const

  const shades = chroma.scale(original).colors(shadeValues.length)

  const palette = {} as Record<(typeof shadeValues)[number], string>
  shadeValues.forEach((shade, index) => (palette[shade] = shades[index]))

  return palette
}
