import { TextAlignProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const textAlignProps: PropsConfig<TextAlignProps> = {
  leftText: { get: ({ leftText }) => (leftText ? 'text-align: left;' : '') },
  centerText: {
    get: ({ centerText }) => (centerText ? 'text-align: center;' : ''),
  },
  rightText: {
    get: ({ rightText }) => (rightText ? 'text-align: right;' : ''),
  },
  justifyText: {
    get: ({ justifyText }) => (justifyText ? 'text-align: justify;' : ''),
  },
}

export const pullTextAlignProps = makePropPuller(textAlignProps)
export const getTextAlignStyle = makeStyleGetter(textAlignProps)
