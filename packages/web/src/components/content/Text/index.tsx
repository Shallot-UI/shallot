import {
  makePropPuller,
  makeStyleGetter,
  makeComponent,
} from '@shallot-ui/core'

import { textConfig } from './config'

export const Text = makeComponent('span', textConfig)

export const pullTextProps = makePropPuller(textConfig)
export const getTextStyles = makeStyleGetter(textConfig)

export * from './types'
export * from './config'
