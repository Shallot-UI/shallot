import { View } from 'react-native'

import { makeComponent } from '../../../utils/makeComponent'
import { columnConfig } from '../Column'

export const Fold = makeComponent(
  View,
  columnConfig,
  `display: flex; min-height: 100vh; width: 100vw;`,
)
