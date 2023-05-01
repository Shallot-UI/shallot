import { View } from 'react-native'
import {
  makePropPuller,
  makeStyleGetter,
  makeComponent,
} from '@shallot-ui/core'

import { columnConfig } from './config'

export const Column = makeComponent(
  View,
  columnConfig,
  `
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: 0;
  `,
)

export const pullColumnProps = makePropPuller(columnConfig)
export const getColumnStyles = makeStyleGetter(columnConfig)

export * from './types'
export * from './config'
