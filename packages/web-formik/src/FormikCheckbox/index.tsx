import { FunctionComponent } from 'react'
import { useField } from 'formik'
import {
  FormCheckbox,
  FormCheckboxProps,
  FormCheckboxStyleProps,
} from '@shallot-ui/web'

export type FormikCheckboxProps = Omit<
  FormCheckboxProps,
  'value' | 'setValue'
> &
  FormCheckboxStyleProps & { name: string }

export const FormikCheckbox: FunctionComponent<FormikCheckboxProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name)

  return (
    <FormCheckbox
      {...field}
      errorText={meta.touched && meta.error ? meta.error : undefined}
      name={name}
      {...rest}
    />
  )
}
