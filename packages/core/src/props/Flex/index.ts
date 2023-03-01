import { FlexProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const flexProps: PropsConfig<FlexProps> = {
  flex: {
    get: ({ flex }) => (flex ? `flex: ${flex === true ? 1 : flex};` : ''),
  },
  grow: {
    get: ({ grow }) => (grow ? `flex-grow: ${grow === true ? 1 : grow};` : ''),
  },
  shrink: {
    get: ({ shrink }) =>
      shrink ? `flex-shrink: ${shrink === true ? 1 : shrink};` : '',
  },
  wrap: {
    get: ({ wrap }) => `
      ${wrap === 'reverse' ? `flex-wrap: wrap-reverse;` : ''}
      ${
        typeof wrap === 'boolean'
          ? `flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};`
          : ''
      }
    `,
  },
}

export const pullFlexProps = makePropPuller(flexProps)
export const getFlexStyle = makeStyleGetter(flexProps)
