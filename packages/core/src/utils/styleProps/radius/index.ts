import { DefaultTheme } from 'styled-components'

import { getRadius } from '../../mixins'

export type RadiusProps = {
  radius?: keyof DefaultTheme['radii']
}

export const radiusPropKeys = ['radius'] as const

export const getRadiusShallot = ({ radius }: RadiusProps) => ({
  ...(radius && { borderRadius: getRadius(radius) }),
})

export const pullRadiusProps = <T extends RadiusProps>({
  radius,
  ...rest
}: T) => rest
