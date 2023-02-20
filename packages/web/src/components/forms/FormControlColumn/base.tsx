import { FunctionComponent } from 'react'
import { useStyleProps } from '@shallot-ui/core'

import { FormControlColumnProps } from './types'
import { Column } from '../../containers'
import { Text } from '../../content'

export const BaseFormControlColumn: FunctionComponent<
  FormControlColumnProps
> = ({
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
  const labelStyles = useStyleProps('label', styles, state)
  const requiredStarStyles = useStyleProps('requiredStar', styles, state)
  const errorTextStyles = useStyleProps('errorText', styles, state)
  const helperTextStyles = useStyleProps('helperText', styles, state)

  return (
    <Column {...containerStyles}>
      <Text {...labelStyles}>
        {label}
        {required && <Text {...requiredStarStyles}>*</Text>}
      </Text>
      {children}
      {errorText && <Text {...errorTextStyles}>{errorText}</Text>}
      {!errorText && helperText && (
        <Text {...helperTextStyles}>{helperText}</Text>
      )}
    </Column>
  )
}
