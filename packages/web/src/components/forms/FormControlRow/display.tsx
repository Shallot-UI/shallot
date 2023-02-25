import { FunctionComponent } from 'react'

import { FormControlRowProps } from './types'
import { Row, Column } from '../../containers'
import { Text } from '../../content'

export const FormControlRow: FunctionComponent<FormControlRowProps> = ({
  errorText,
  helperText,
  label,
  required,
  children,
  disabled,
  focused,
  populated,
  error,
  styles,
  ...rest
}) => (
  <Row {...styles?.container}>
    {children}
    <Column {...styles?.details}>
      <Text {...styles?.label}>
        {label}
        {required && <Text {...styles?.requiredStar}>*</Text>}
      </Text>
      {errorText && <Text {...styles?.errorText}>{errorText}</Text>}
      {!errorText && helperText && (
        <Text {...styles?.helperText}>{helperText}</Text>
      )}
    </Column>
  </Row>
)
