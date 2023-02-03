const makeStaticSize = (cssProperty: string, units: number, grid: number) =>
  `${cssProperty}: ${units * grid}px;`

export default makeStaticSize
