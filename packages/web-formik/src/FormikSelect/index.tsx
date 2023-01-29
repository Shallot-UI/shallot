import { FunctionComponent } from 'react'
import { useFormikContext } from 'formik'
import {
  FormSelect,
  FormSelectProps,
  FormSelectStyleProps,
} from '@shallot-ui/react-select'

export type FormikSelectProps = Omit<
  FormSelectProps,
  'value' | 'onChangeValue'
> &
  FormSelectStyleProps & { name: string }

export const FormikSelect: FunctionComponent<FormikSelectProps> = ({
  name,
  ...rest
}) => {
  const { values, touched, errors, setFieldValue } = useFormikContext<{
    [name: string]: string | string[]
  }>()

  const error = errors[name]
  const value = values[name]

  return (
    <FormSelect
      value={value}
      onChangeValue={(nextValue) => setFieldValue(name, nextValue)}
      errorText={touched[name] && error ? error : undefined}
      name={name}
      {...rest}
    />
  )
}
