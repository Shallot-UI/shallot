import { View } from 'react-native'
import { makeComponent } from '@shallot-ui/core'

import { columnConfig } from '../Column'

export const Space = makeComponent(View, columnConfig, `flex: 1;`)
