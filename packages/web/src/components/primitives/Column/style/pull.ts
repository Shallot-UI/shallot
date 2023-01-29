import {
  pullVerticalAlignmentProps,
  pullHorizontalAlignmentProps,
} from '../../../../props'
import { pullBoxStyleProps } from '../../Box'
import { ColumnStyleProps } from './types'

export const pullColumnStyleProps = <T extends ColumnStyleProps>(
  props: T,
): [ColumnStyleProps, Omit<T, keyof ColumnStyleProps>] => {
  let columnStyleProps: ColumnStyleProps = {}
  let restProps = { ...props }

  const actions = [
    pullBoxStyleProps<T>,
    pullVerticalAlignmentProps<T>,
    pullHorizontalAlignmentProps<T>,
  ]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    columnStyleProps = { ...columnStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [columnStyleProps, restProps]
}
