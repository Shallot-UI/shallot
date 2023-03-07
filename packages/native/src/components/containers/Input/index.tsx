import { TextInput } from 'react-native'
import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { inputConfig } from './config'

export const Input = makeComponent(TextInput, inputConfig)

export const pullInputProps = makePropPuller(inputConfig)
export const getInputStyles = makeStyleGetter(inputConfig)

export * from './types'
export * from './config'
