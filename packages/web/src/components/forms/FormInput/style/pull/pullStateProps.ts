import { FormInputStateProps } from '../types'

const pullStateProps = <T extends FormInputStateProps>(
  props: T,
): [FormInputStateProps, Omit<T, keyof FormInputStateProps>] => {
  const { inputProps, ...rest } = props
  return [{ inputProps }, rest]
}

export default pullStateProps
