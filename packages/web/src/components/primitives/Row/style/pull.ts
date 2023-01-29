import {
  pullVerticalAlignmentProps,
  pullHorizontalAlignmentProps,
} from '../../../../props'
import { pullBoxStyleProps } from '../../Box'
import { RowStyleProps } from './types'

export const pullRowStyleProps = <T extends RowStyleProps>(props: T) => {
  let boxStyleProps: RowStyleProps = {}
  let restProps = { ...props }

  const actions = [
    pullBoxStyleProps<T>,
    pullVerticalAlignmentProps<T>,
    pullHorizontalAlignmentProps<T>,
  ]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    boxStyleProps = { ...boxStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [boxStyleProps, restProps]
}
