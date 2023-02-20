import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'
import { makeComponent } from '../../../utils/makeComponent'
import { textConfig } from './config'

export const Text = makeComponent('span', textConfig)

export const pullTextProps = makePropPuller(textConfig)
export const getTextStyle = makeStyleGetter(textConfig)

export * from './types'
export * from './config'
