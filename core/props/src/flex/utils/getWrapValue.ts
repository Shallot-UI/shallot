import { CSS } from '@shallot-ui/core-theme'

const getWrapValue = (
  wrap: boolean | CSS.Properties['flexWrap'],
): CSS.Properties['flexWrap'] => {
  if (typeof wrap === 'string') return wrap
  if (typeof wrap === 'boolean') return wrap ? 'wrap' : 'nowrap'
}

export default getWrapValue
