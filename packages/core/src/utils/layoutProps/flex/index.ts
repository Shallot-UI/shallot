import { CSSProperties } from 'styled-components'

import { getNumericValue } from '../../../mixins'
import getWrapValue from './utils/getWrapValue'

export type FlexProps = {
  grow?: boolean | number
  shrink?: boolean | number
  flex?: boolean | number
  wrap?: boolean | CSSProperties['flexWrap']
}

export const flexPropKeys = ['grow', 'shrink', 'flex', 'wrap'] as const

export const getFlexShallot = ({ grow, shrink, flex, wrap }: FlexProps) => ({
  ...(grow !== undefined && { flexGrow: getNumericValue(grow) }),
  ...(shrink !== undefined && { flexShrink: getNumericValue(shrink) }),
  ...(flex !== undefined && { flex: getNumericValue(flex) }),
  ...(wrap !== undefined && { flexWrap: getWrapValue(wrap) }),
})
