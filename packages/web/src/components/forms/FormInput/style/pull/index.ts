import pullStateProps from './pullStateProps'
import pullStatesProp from './pullStatesProp'
import { FormInputStyleProps } from '../types'

export const pullFormInputStyleProps = <T extends FormInputStyleProps>(
  props: T,
): [FormInputStyleProps, Omit<T, keyof FormInputStyleProps>] => {
  let columnStyleProps: FormInputStyleProps = {}
  let restProps = { ...props }

  const actions = [pullStateProps<T>, pullStatesProp<T>]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    columnStyleProps = { ...columnStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [columnStyleProps, restProps]
}
