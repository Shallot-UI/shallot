import { FunctionComponent } from 'react'

import { FormControlProps } from '../types'
import Container from '../style/components/Container'
import ErrorText from '../style/components/ErrorText'
import HelperText from '../style/components/HelperText'
import RequiredStar from '../style/components/RequiredStar'
import Label from '../style/components/Label'

export const BaseFormControl: FunctionComponent<FormControlProps> = (props) => {
  const { errorText, helperText, label, required, children, ...rest } = props

  return (
    <Container {...rest}>
      <Label>
        {label}
        {required && <RequiredStar />}
      </Label>
      {children}
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {!errorText && helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  )
}
