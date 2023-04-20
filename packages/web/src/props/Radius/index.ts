import { RadiusProps } from '@shallot-ui/theme'
import { PropsConfig, makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import getResponsiveRadii from './utils/getResponsiveRadii'

export const radiusProps: PropsConfig<RadiusProps> = {
  radius: { get: getResponsiveRadii },
}

export const pullRadiusProps = makePropPuller(radiusProps)
export const getRadiusStyle = makeStyleGetter(radiusProps)
