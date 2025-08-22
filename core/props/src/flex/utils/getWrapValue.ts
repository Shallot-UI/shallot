
const getWrapValue = (
  wrap: boolean | string,
): string => {
  if (typeof wrap === 'string') return wrap
  return wrap ? 'wrap' : 'nowrap'
}

export default getWrapValue
