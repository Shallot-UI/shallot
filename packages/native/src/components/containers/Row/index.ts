import { View } from 'react-native'
import { makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import { makeComponent } from '../../../utils/makeComponent'
import { rowConfig } from './config'

export const Row = makeComponent(
  View,
  rowConfig,
  `
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 0;
  `,
)

export const pullRowProps = makePropPuller(rowConfig)
export const getRowStyles = makeStyleGetter(rowConfig)

export * from './types'
export * from './config'
