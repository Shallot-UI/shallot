import { LineHeightProps } from '@shallot-ui/theme'
import { PropsConfig, makePropPuller, makeStyleGetter } from '@shallot-ui/core'
import getStaticLineHeight from './utils/getStaticLineHeight'

export const lineHeightProps: PropsConfig<LineHeightProps> = {
  lineHeight: {
    get: getStaticLineHeight,
  },
}

export const pullLineHeightProps = makePropPuller(lineHeightProps)
export const getLineHeightStyle = makeStyleGetter(lineHeightProps)
