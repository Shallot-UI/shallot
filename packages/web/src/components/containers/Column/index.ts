import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { columnConfig } from './config'

export const Column = makeComponent(
  'div',
  columnConfig,
  `
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: 0;
  `,
)

export const pullColumnProps = makePropPuller(columnConfig)
export const getColumnStyles = makeStyleGetter(columnConfig)

export * from './types'
export * from './config'
