import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { columnConfig } from './config'

export const Column = makeComponent(
  'div',
  columnConfig,
  `display: flex; flex-direction: column;`,
)

export const pullColumnProps = makePropPuller(columnConfig)
export const getColumnStyle = makeStyleGetter(columnConfig)

export * from './types'
export * from './config'
