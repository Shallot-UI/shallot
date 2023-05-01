import { makeComponent } from '@shallot-ui/core'

import { boxConfig } from './config'

export const Box = makeComponent('div', boxConfig)

export * from './config'
export * from './types'
