import { getNumericValue } from '../../mixins'

export type FlexProps = {
  grow?: boolean | number
  shrink?: boolean | number
  flex?: boolean | number
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse'
}

export const flexPropKeys = ['grow', 'shrink', 'flex', 'wrap'] as const

export const getFlexShallot = ({ grow, shrink, flex, wrap }: FlexProps) => ({
  ...(grow !== undefined && { flexGrow: getNumericValue(grow) }),
  ...(shrink !== undefined && { flexShrink: getNumericValue(shrink) }),
  ...(flex !== undefined && { flex: getNumericValue(flex) }),
  ...(typeof wrap === 'string' && { flexWrap: wrap }),
  ...(typeof wrap === 'boolean' && { flexWrap: wrap ? 'wrap' : 'nowrap' }),
})

export const pullFlexProps = <T extends FlexProps>({
  grow,
  shrink,
  flex,
  wrap,
  ...rest
}: T) => rest
