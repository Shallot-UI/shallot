import { FunctionComponent } from 'react'
import { useStyleProps } from '@shallot-ui/core'

import { FormControlRowProps } from './types'
import { Row, Column } from '../../containers'
import { Text } from '../../content'

export const BaseFormControlRow: FunctionComponent<FormControlRowProps> = ({
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
}) => {
  const state = {
    disabled,
    focused,
    populated,
    error,
  }

  const containerStyles = useStyleProps('container', styles, state, rest)
  const detailsStyles = useStyleProps('details', styles, state)
  const labelStyles = useStyleProps('label', styles, state)
  const requiredStarStyles = useStyleProps('requiredStar', styles, state)
  const errorTextStyles = useStyleProps('errorText', styles, state)
  const helperTextStyles = useStyleProps('helperText', styles, state)

  return (
    <Row {...containerStyles}>
      {children}
      <Column {...detailsStyles}>
        <Text {...labelStyles}>
          {label}
          {required && <Text {...requiredStarStyles}>*</Text>}
        </Text>
        {errorText && <Text {...errorTextStyles}>{errorText}</Text>}
        {!errorText && helperText && (
          <Text {...helperTextStyles}>{helperText}</Text>
        )}
      </Column>
    </Row>
  )
}
