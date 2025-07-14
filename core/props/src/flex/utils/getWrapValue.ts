
const getWrapValue = (
  wrap: boolean | string,
): string => {
  if (typeof wrap === 'string') return wrap
  if (typeof wrap === 'boolean') return wrap ? 'wrap' : 'nowrap'
}

export default getWrapValue
