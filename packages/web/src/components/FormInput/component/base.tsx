import { FunctionComponent, useCallback, useState } from 'react'
import { FormInputProps } from '..'

import Container from '../style/components/Container'
import ErrorText from '../style/components/ErrorText'
import HelperText from '../style/components/HelperText'
import Input from '../style/components/Input'
import Label from '../style/components/Label'
import RequiredStar from '../style/components/RequiredStar'

import { pullFormInputStyleProps } from '../style/pull'

export const BaseFormInput: FunctionComponent<FormInputProps> = (props) => {
  const [focused, setFocused] = useState(false)

  const [
    styleProps,
    {
      onFocus,
      onBlur,
      label,
      required,
      errorText,
      helperText,
      disabled,
      value,
      ...rest
    },
  ] = pullFormInputStyleProps(props)

  const isPopulated = Boolean(value)
  const hasError = Boolean(errorText)

  const handleFocus = useCallback((e: any) => {
    setFocused(true)
    onFocus?.(e)
  }, [])

  const handleBlur = useCallback((e: any) => {
    setFocused(false)
    onBlur?.(e)
  }, [])

  return (
    <Container
      focused={focused}
      disabled={disabled}
      populated={isPopulated}
      error={hasError}
      {...styleProps}
    >
      <Label>
        {label}
        {required && <RequiredStar />}
      </Label>
      <Input
        {...rest}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {!errorText && helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  )
}
