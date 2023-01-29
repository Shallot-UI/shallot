import { FunctionComponent, useCallback, useState } from 'react'
import { FormInputProps } from '..'

import S from '../style/components'
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
    <S.Container
      focused={focused}
      disabled={disabled}
      populated={isPopulated}
      error={hasError}
      {...styleProps}
    >
      <S.Label>
        {label}
        {required && <S.RequiredStar />}
      </S.Label>
      <S.Input
        {...rest}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
      />
      {errorText && <S.ErrorText>{errorText}</S.ErrorText>}
      {!errorText && helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Container>
  )
}
