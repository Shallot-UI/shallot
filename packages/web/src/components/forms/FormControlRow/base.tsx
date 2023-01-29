import { FunctionComponent } from 'react'

import { FormControlRowProps } from './types'
import { Column } from '../../primitives/Column'
import { Text } from '../../Text'
import { useStyleProps } from '../../../hooks'
import { Row } from '../../primitives'

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
          {required && <Text {...requiredStarStyles} />}
        </Text>
        {errorText && <Text {...errorTextStyles}>{errorText}</Text>}
        {!errorText && helperText && (
          <Text {...helperTextStyles}>{helperText}</Text>
        )}
      </Column>
    </Row>
  )
}
