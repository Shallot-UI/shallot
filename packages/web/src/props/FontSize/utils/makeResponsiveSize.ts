import makeStaticSize from './makeStaticSize'

const makeResponsiveSize = (sizes: number[], breakpoints: number[]) => {
  const [normal, ...rest] = sizes
  let style = makeStaticSize(normal)
  rest.forEach((size, i) => {
    if (breakpoints[i]) {
      style += `@media (min-width: ${breakpoints[i]}px) { font-size: ${size}px; }`
    }
  })
  return style
}

export default makeResponsiveSize
