import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { rowConfig } from './config'

export const Row = makeComponent(
  'div',
  rowConfig,
  `display: flex; flex-direction: row;`,
)

export const pullRowProps = makePropPuller(rowConfig)
export const getRowStyle = makeStyleGetter(rowConfig)

export * from './types'
export * from './config'
