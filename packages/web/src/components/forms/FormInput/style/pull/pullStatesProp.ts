import { FormInputStatesProp } from '../types'

const pullStatesProp = <T extends FormInputStatesProp>(
  props: T,
): [FormInputStatesProp, Omit<T, keyof FormInputStatesProp>] => {
  const { states, ...rest } = props
  return [{ states }, rest]
}

export default pullStatesProp
