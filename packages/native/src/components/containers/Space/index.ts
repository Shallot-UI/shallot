import { View } from 'react-native'

import { makeComponent } from '../../../utils/makeComponent'
import { columnConfig } from '../Column'

export const Space = makeComponent(View, columnConfig, `flex: 1;`)
