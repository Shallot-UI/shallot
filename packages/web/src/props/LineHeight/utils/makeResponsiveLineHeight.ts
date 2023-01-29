import makeStaticLineHeight from './makeStaticLineHeight'
import snapToGrid from './snapToGrid'

const makeResponsiveLineHeight = (
  sizes: number[],
  ratio: number,
  gridUnits: number[],
  breakpoints: number[],
) => {
  const [normal, ...rest] = sizes
  let style = makeStaticLineHeight(normal, ratio, gridUnits)
  rest.forEach((size, i) => {
    if (breakpoints[i]) {
      const aligned = snapToGrid(size * ratio, gridUnits)
      style += `@media (min-width: ${breakpoints[i]}px) {
        line-height: ${aligned}px;
      }`
    }
  })
  return style
}

export default makeResponsiveLineHeight
