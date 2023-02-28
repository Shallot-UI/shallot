import { FunctionComponent } from 'react'
import { useField } from 'formik'
import { FormCheckbox, FormCheckboxProps } from '@shallot-ui/web'

export interface FormikCheckboxProps
  extends Omit<FormCheckboxProps, 'value' | 'setValue'> {
  name: string
}

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
      {...rest}
    />
  )
}
