import { View } from 'react-native'
import { makeComponent } from '@shallot-ui/core'

import { columnConfig } from '../Column'

export const Fold = makeComponent(
  View,
  columnConfig,
  `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
  `,
)
