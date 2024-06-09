import type { CSS, ShallotProp } from '@repo/theme'

import { getNumericValue, getUnits } from '../../../mixins'
import getWrapValue from './utils/getWrapValue'

export type FlexProps = {
  grow?: boolean | number
  shrink?: boolean | number
  flex?: boolean | number
  wrap?: boolean | CSS.Properties['flexWrap']
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
}: FlexProps): ShallotProp => ({
  ...(grow !== undefined && { flexGrow: getNumericValue(grow) }),
  ...(shrink !== undefined && { flexShrink: getNumericValue(shrink) }),
  ...(flex !== undefined && { flex: getNumericValue(flex) }),
  ...(wrap !== undefined && { flexWrap: getWrapValue(wrap) }),
  ...(unitGap !== undefined && { gap: getUnits(unitGap) }),
  ...(unitFlexBasis !== undefined && { flexBasis: getUnits(unitFlexBasis) }),
})
