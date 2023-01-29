import makeResponsiveSize from './makeResponsiveSize'
import makeStaticSize from './makeStaticSize'

const makeSize = (
  cssProperty: string,
  units: number | number[] | undefined,
  grid: number,
  breakpoints: number[],
) => {
  if (Array.isArray(units)) {
    return makeResponsiveSize(cssProperty, units, grid, breakpoints)
  }
  if (typeof units === 'number') {
    return makeStaticSize(cssProperty, units, grid)
  }
  return ''
}

export default makeSize
