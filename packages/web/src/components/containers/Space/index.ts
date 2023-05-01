import { makeComponent } from '@shallot-ui/core'

import { columnConfig } from '../Column'

export const Space = makeComponent('div', columnConfig, `flex: 1;`)
