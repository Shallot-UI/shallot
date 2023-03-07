import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { boxConfig } from './config'

export const Box = makeComponent(
  'div',
  boxConfig,
  `
    display: flex;
    border-style: solid;
    border-width: 0;
  `,
)

export const pullBoxProps = makePropPuller(boxConfig)
export const getBoxStyles = makeStyleGetter(boxConfig)

export * from './types'
export * from './config'
