import {
  pullVerticalAlignmentProps,
  pullHorizontalAlignmentProps,
  pullProps,
} from '@shallot-ui/core'

import { pullBoxStyleProps } from '../../Box'
import { ColumnStyleProps } from './types'

export const pullColumnStyleProps = <T extends ColumnStyleProps>(props: T) =>
  pullProps(props, [
    pullBoxStyleProps,
    pullVerticalAlignmentProps,
    pullHorizontalAlignmentProps,
  ])
