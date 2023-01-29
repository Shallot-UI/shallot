import { FormControlStatesProp } from '../types'

const pullStatesProp = <T extends FormControlStatesProp>(
  props: T,
): [FormControlStatesProp, Omit<T, keyof FormControlStatesProp>] => {
  const { states, ...rest } = props
  return [{ states }, rest]
}

export default pullStatesProp
