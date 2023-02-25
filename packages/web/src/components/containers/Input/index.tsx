import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { inputConfig } from './config'

export const Input = makeComponent('div', inputConfig)

export const pullInputProps = makePropPuller(inputConfig)
export const getInputStyle = makeStyleGetter(inputConfig)

export * from './types'
export * from './config'
