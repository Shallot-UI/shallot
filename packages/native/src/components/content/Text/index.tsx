import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'
import { Text as RNText } from 'react-native'
import { makeComponent } from '@shallot-ui/core'

import { textConfig } from './config'

export const Text = makeComponent(RNText, textConfig)

export const pullTextProps = makePropPuller(textConfig)
export const getTextStyles = makeStyleGetter(textConfig)

export * from './types'
export * from './config'
