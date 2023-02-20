import { RadiusProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'
import getResponsiveRadii from './utils/getResponsiveRadii'

export const radiusProps: PropsConfig<RadiusProps> = {
  radius: { get: getResponsiveRadii },
}

export const pullRadiusProps = makePropPuller(radiusProps)
export const getRadiusStyle = makeStyleGetter(radiusProps)
