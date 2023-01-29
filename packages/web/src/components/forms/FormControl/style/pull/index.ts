import { pullBoxStyleProps } from '../../../../Box'
import pullStateProps from './pullStateProps'
import pullStatesProp from './pullStatesProp'
import { FormControlStyleProps } from '../types'

export const pullFormControlStyleProps = <T extends FormControlStyleProps>(
  props: T,
): [FormControlStyleProps, Omit<T, keyof FormControlStyleProps>] => {
  let columnStyleProps: FormControlStyleProps = {}
  let restProps = { ...props }

  const actions = [pullBoxStyleProps<T>, pullStateProps<T>, pullStatesProp<T>]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    columnStyleProps = { ...columnStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [columnStyleProps, restProps]
}
