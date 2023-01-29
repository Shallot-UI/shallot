import snapToGrid from './snapToGrid'

const makeStaticLineHeight = (
  size: number,
  ratio: number,
  gridUnits: number[],
) => `line-height: ${snapToGrid(size * ratio, gridUnits)}px;`

export default makeStaticLineHeight
