import { makeComponent } from '../../../utils/makeComponent'
import { columnConfig } from '../Column'

export const Fold = makeComponent(
  'div',
  columnConfig,
  `min-height: 100vh; width: 100vw;`,
)
