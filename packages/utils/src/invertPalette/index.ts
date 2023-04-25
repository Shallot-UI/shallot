export const invertPalette = (palette: any) => {
  const reversedPalette: any = {}
  Object.keys(palette).forEach((shadeValue) => {
    reversedPalette[Math.abs(500 - Number(shadeValue)) + 100] =
      palette[shadeValue]
  })
  return reversedPalette as any
}
