import { CSSProperties } from 'styled-components'

const getWrapValue = (
  wrap: boolean | CSSProperties['flexWrap'],
): CSSProperties['flexWrap'] => {
  if (typeof wrap === 'string') return wrap
  if (typeof wrap === 'boolean') return wrap ? 'wrap' : 'nowrap'
}

export default getWrapValue
