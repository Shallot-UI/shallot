import { FunctionComponent } from 'react'
import { useField } from 'formik'
import {
  FormInput,
  FormInputProps,
  FormInputStyleProps,
} from '@shallot-ui/native'

export type FormikInputProps = Omit<FormInputProps, 'value' | 'setValue'> &
  FormInputStyleProps & { name: string }

export const FormikInput: FunctionComponent<FormikInputProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name)

  return (
    <FormInput
      {...field}
      errorText={meta.touched && meta.error ? meta.error : undefined}
      valid={meta.touched && !meta.error}
      onChange={field.onChange(name)}
      onBlur={field.onBlur(name)}
      name={name}
      {...rest}
    />
  )
}
