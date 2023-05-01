import {
  makePropPuller,
  makeStyleGetter,
  makeComponent,
} from '@shallot-ui/core'

import { columnConfig } from './config'

export const Column = makeComponent(
  'div',
  columnConfig,
  `
    display: flex;
    flex-direction: column;
  `,
)

export * from './types'
export * from './config'
