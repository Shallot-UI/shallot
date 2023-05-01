import { makeComponent } from '@shallot-ui/core'

import { rowConfig } from './config'

export const Row = makeComponent(
  'div',
  rowConfig,
  `
    display: flex;
    flex-direction: row;
  `,
)

export * from './types'
export * from './config'
