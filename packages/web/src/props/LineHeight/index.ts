import { makePropPuller, makeStyleGetter, PropsConfig } from '@shallot-ui/core'
import { LineHeightProps } from '@shallot-ui/theme'

import getResponsiveLineHeights from './utils/getResponsiveLineHeights'

export const lineHeightProps: PropsConfig<LineHeightProps> = {
  lineHeight: { get: getResponsiveLineHeights },
}

export const pullLineHeightProps = makePropPuller(lineHeightProps)
export const getLineHeightStyle = makeStyleGetter(lineHeightProps)
