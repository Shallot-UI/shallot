import { LineHeightProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'
import getResponsiveLineHeights from './utils/getResponsiveLineHeights'

export const lineHeightProps: PropsConfig<LineHeightProps> = {
  lineHeight: { get: getResponsiveLineHeights },
}

export const pullLineHeightProps = makePropPuller(lineHeightProps)
export const getLineHeightStyle = makeStyleGetter(lineHeightProps)
