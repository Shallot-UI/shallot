const snapToGrid = (value: number, gridUnits: number[]) =>
  gridUnits
    .map((u) => {
      const aligned = Math.ceil(value / u) * u
      const diff = Math.abs(value - aligned)
      return [aligned, diff] as [number, number]
    })
    .sort((a: [number, number], b: [number, number]) => a[1] - b[1])[0][0]

export default snapToGrid
