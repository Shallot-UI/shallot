import { FunctionComponent } from 'react'
import { useField } from 'formik'
import { FormInput, FormInputProps } from '@shallot-ui/web'

export interface FormikInputProps
  extends Omit<FormInputProps, 'value' | 'setValue'> {
  name: string
}

export const FormikInput: FunctionComponent<FormikInputProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name)

  return (
    <FormInput
      {...field}
      errorText={meta.touched && meta.error ? meta.error : undefined}
      name={name}
      {...rest}
    />
  )
}
