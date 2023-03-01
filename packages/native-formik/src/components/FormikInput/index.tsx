import { FunctionComponent } from 'react'
import { useFormikContext } from 'formik'
import { FormInput, FormInputProps } from '@shallot-ui/native'

export interface FormikInputProps
  extends Omit<FormInputProps, 'value' | 'setValue'> {
  name: string
}

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
      setValue={(value: string) => setFieldValue(name, value)}
      onFocus={() => setFieldTouched(name, true)}
      errorText={
        fieldTouched && typeof fieldError === 'string' ? fieldError : undefined
      }
      {...rest}
    />
  )
}
