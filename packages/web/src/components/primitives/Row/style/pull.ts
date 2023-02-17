import {
  pullVerticalAlignmentProps,
  pullHorizontalAlignmentProps,
  pullProps,
} from '@shallot-ui/core'

import { pullBoxStyleProps } from '../../Box'
import { RowStyleProps } from './types'

export const pullRowStyleProps = <T extends RowStyleProps>(props: T) =>
  pullProps(props, [
    pullBoxStyleProps,
    pullVerticalAlignmentProps,
    pullHorizontalAlignmentProps,
  ])
