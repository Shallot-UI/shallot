import { FormControlStateProps } from '../types'

const pullStateProps = <T extends FormControlStateProps>(
  props: T,
): [FormControlStateProps, Omit<T, keyof FormControlStateProps>] => {
  const {
    containerProps,
    labelProps,
    helperTextProps,
    errorTextProps,
    ...rest
  } = props
  return [{ containerProps, labelProps, helperTextProps, errorTextProps }, rest]
}

export default pullStateProps
