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

  const setValue = (value: boolean) => {
    field.onChange({ target: { name: field.name, value } })
  }

  return (
    <FormCheckbox
      {...field}
      value={field.value}
      setValue={setValue}
      errorText={meta.touched && meta.error ? meta.error : undefined}
      name={name}
      {...rest}
    />
  )
}
