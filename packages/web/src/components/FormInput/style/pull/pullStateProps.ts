import { FormInputStateProps } from '../types'

const pullStateProps = <T extends FormInputStateProps>(
  props: T,
): [FormInputStateProps, Omit<T, keyof FormInputStateProps>] => {
  const {
    containerProps,
    inputProps,
    labelProps,
    helperTextProps,
    errorTextProps,
    ...rest
  } = props
  return [
    { containerProps, inputProps, labelProps, helperTextProps, errorTextProps },
    rest,
  ]
}

export default pullStateProps
