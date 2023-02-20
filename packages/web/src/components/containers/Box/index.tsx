import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { boxConfig } from './config'

export const Box = makeComponent('div', boxConfig, `display: flex;`)

export const pullBoxProps = makePropPuller(boxConfig)
export const getBoxStyle = makeStyleGetter(boxConfig)

export * from './types'
export * from './config'
