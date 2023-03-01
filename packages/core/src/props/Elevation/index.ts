import { ElevationProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const elevationProps: PropsConfig<ElevationProps> = {
  elevation: {
    get: ({ elevation }) =>
      elevation ? ({ theme }) => theme.elevations?.[elevation] : '',
  },
}

export const pullElevationProps = makePropPuller(elevationProps)
export const getElevationStyle = makeStyleGetter(elevationProps)
