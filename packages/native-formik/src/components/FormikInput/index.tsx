import { FunctionComponent } from 'react'
import { useFormikContext } from 'formik'
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
  const { setFieldValue, setFieldTouched, touched, errors, values } =
    useFormikContext<any>()

  const fieldTouched = touched[name]
  const fieldError = errors[name]

  return (
    <FormInput
      value={values[name]}
      onChangeText={(value: string) => setFieldValue(name, value)}
      onFocus={() => setFieldTouched(name, true)}
      errorText={
        fieldTouched && typeof fieldError === 'string' ? fieldError : undefined
      }
      valid={fieldTouched && !fieldError}
      name={name}
      {...rest}
    />
  )
}
