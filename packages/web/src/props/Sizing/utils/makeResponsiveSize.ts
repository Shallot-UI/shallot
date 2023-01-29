const makeResponsiveSize = (
  cssProperty: string,
  responsiveUnits: number[],
  grid: number,
  breakpoints: number[],
) =>
  responsiveUnits
    .map((u, i) => {
      const bp = breakpoints[i]
      return (
        bp ?? `@media (min-width: ${bp}px) { ${cssProperty}: ${u * grid}px; }`
      )
    })
    .filter(Boolean)
    .join('')

export default makeResponsiveSize
