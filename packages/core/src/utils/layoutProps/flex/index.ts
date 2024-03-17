import { CSSProperties } from 'styled-components'

import { getNumericValue, getUnits } from '../../../mixins'
import getWrapValue from './utils/getWrapValue'

export type FlexProps = {
  grow?: boolean | number
  shrink?: boolean | number
  flex?: boolean | number
  wrap?: boolean | CSSProperties['flexWrap']
  unitGap?: number
  unitFlexBasis?: number
}

export const flexPropKeys = [
  'grow',
  'shrink',
  'flex',
  'wrap',
  'unitGap',
  'unitFlexBasis',
] as const

export const getFlexShallot = ({
  grow,
  shrink,
  flex,
  wrap,
  unitGap,
  unitFlexBasis,
}: FlexProps) => ({
  ...(grow !== undefined && { flexGrow: getNumericValue(grow) }),
  ...(shrink !== undefined && { flexShrink: getNumericValue(shrink) }),
  ...(flex !== undefined && { flex: getNumericValue(flex) }),
  ...(wrap !== undefined && { flexWrap: getWrapValue(wrap) }),
  ...(unitGap !== undefined && { gap: getUnits(unitGap) }),
  ...(unitFlexBasis !== undefined && { flexBasis: getUnits(unitFlexBasis) }),
})
