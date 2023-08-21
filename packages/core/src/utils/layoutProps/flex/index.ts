import { getNumericValue } from '../../mixins'

export type FlexProps = {
  grow?: boolean | number
  shrink?: boolean | number
  flex?: boolean | number
}

export const flexPropKeys = ['grow', 'shrink', 'flex'] as const

export const getFlexShallot = ({ grow, shrink, flex }: FlexProps) => ({
  ...(grow !== undefined && { flexGrow: getNumericValue(grow) }),
  ...(shrink !== undefined && { flexShrink: getNumericValue(shrink) }),
  ...(flex !== undefined && { flex: getNumericValue(flex) }),
})

export const pullFlexProps = <T extends FlexProps>({
  grow,
  shrink,
  flex,
  ...rest
}: T) => rest
