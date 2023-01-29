import { pullBoxStyleProps } from '../../Box'
import pullStateProps from './pull/pullStateProps'
import pullStatesProp from './pull/pullStatesProp'
import { FormInputStyleProps } from './types'

export const pullFormInputStyleProps = <T extends FormInputStyleProps>(
  props: T,
): [FormInputStyleProps, Omit<T, keyof FormInputStyleProps>] => {
  let columnStyleProps: FormInputStyleProps = {}
  let restProps = { ...props }

  const actions = [pullBoxStyleProps<T>, pullStateProps<T>, pullStatesProp<T>]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    columnStyleProps = { ...columnStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [columnStyleProps, restProps]
}
